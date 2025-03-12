export interface ITokenResponse {
  access_token: string;
  refresh_token: string;
}

export interface ISignup {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface ILogin {
  email: string;
  password: string;
}
