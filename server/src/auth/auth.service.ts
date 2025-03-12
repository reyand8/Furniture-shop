import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { User } from '@prisma/client';

import { ITokens, IUserRegister } from './auth.interface';
import { UserService } from '../user/user.service';

type PublicUser = Omit<User, 'password'>;


@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,) {}

    /**
     * Hashes the given password using bcrypt.
     * @param password - The password to hash.
     * @returns A promise resolving to the hashed password.
     */
    private async hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, 6);
    }

    /**
     * Checks if a username already exists in the database.
     * @param email - The username to check.
     * @returns A promise resolving to true if the username exists, otherwise false.
     */
    async emailExists(email: string): Promise<boolean> {
        const existingUser = await this.userService.findByEmail(email);
        return !!existingUser;
    }

    /**
     * Generates access and refresh tokens for a user.
     * @param user - The user for whom tokens are being generated.
     * @returns A promise resolving to the tokens.
     */
    private async generateTokens(user: PublicUser): Promise<ITokens> {
        const payload: {email: string, sub: number} =
            { email: user.email, sub: user.id };
        const access_token: string = this.jwtService.sign(payload);
        const refresh_token: string = this.jwtService.sign(payload, { expiresIn: '1d' });
        return { access_token, refresh_token };
    }

    /**
     * Registers a new user.
     * @param regUser - Data transfer object containing the user's registration details.
     * @returns A promise resolving to the user's tokens.
     */
    async register(regUser: IUserRegister): Promise<ITokens> {
        const { email, password } = regUser;

        if (await this.emailExists(email)) {
            throw new BadRequestException({
                statusCode: HttpStatus.BAD_REQUEST,
                message: 'This email is already in use',
                error: 'Bad Request',
            });
        }
        regUser.password = await this.hashPassword(password);
        const user = await this.userService.create(regUser);
        if (user) {
            const { access_token, refresh_token } = await this.generateTokens(user);
            return { access_token, refresh_token };
        } else {
            throw new Error('Create user error')
        }

    }

    /**
     * Logs a user into the system and generates tokens.
     * @param loginUser - The user to log in.
     * @returns A promise resolving to the user's tokens.
     */
    async login(loginUser: User): Promise<ITokens> {
        const payload: { email: string, sub: number }
            = { email: loginUser.email, sub: loginUser.id };
        return {
            access_token: this.jwtService.sign(payload),
            refresh_token: this.jwtService.sign(payload, {
                expiresIn: '1d',
            }),
        };
    }

    /**
     * Validates a user's credentials.
     * @param email - The email to validate.
     * @param pass - The password to validate.
     * @returns A promise resolving to the user if valid, otherwise null.
     */
    async validateUser(email: string, pass: string): Promise<User | null> {
        const user: any = await this.userService.findByEmail(email);
        if (user && await bcrypt.compare(pass, user.password)) {
            return user;
        }
        return null;
    }
}