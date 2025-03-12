import { Module, forwardRef } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './auth-guard/jwt-auth.guard';
import { JwtStrategy } from './auth-guard/jwt.strategy';
import { UserModule } from '../user/user.module';


/**
 * The `AuthModule` is responsible for handling authentication-related functionalities,
 * including JWT configuration, guards, and strategies. It imports required modules,
 * registers the necessary providers, and exports them for use in other parts of the application.
 */
@Module({
    imports: [forwardRef(() => UserModule),
        JwtModule.register({ secret: process.env.JWT_SECRET_KEY, signOptions: { expiresIn: '60m' } })],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy, JwtAuthGuard],
    exports: [AuthService, JwtStrategy, JwtAuthGuard, JwtModule],
})
export class AuthModule {}