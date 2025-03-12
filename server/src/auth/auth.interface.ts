export interface ITokens {
    access_token: string;
    refresh_token: string
}

export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    createdAt: Date;
}

export interface IUserRegister {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}