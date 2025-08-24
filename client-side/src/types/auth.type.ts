// Authentication related types
export interface ILoginRequest {
    email: string;
    password: string;
}

export interface IChangePasswordRequest {
    oldPassword: string;
    newPassword: string;
}

export interface IRegisterRequest {
    name: string;
    email: string;
    password: string;
}

// Generic API response
export interface IApiResponse<T = null> {
    statusCode: number;
    message: string;
    success: boolean;
    data: T;
}

export type ILoginResponse = IApiResponse<null>;
export type ILogoutResponse = IApiResponse<null>;
export type IRegisterResponse = IApiResponse<null>;
export type IUserInfoResponse = IApiResponse<null>;
export type IChangePasswordResponse = IApiResponse<null>;