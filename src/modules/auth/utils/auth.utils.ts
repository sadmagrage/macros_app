import type AuthResponse from "../dtos/responses/auth.response"

const AUTH_TOKEN_KEY: string = "auth_token";

export const storeToken = (authResponse: AuthResponse) => {
     localStorage.setItem(AUTH_TOKEN_KEY, authResponse.token);
}

export const getToken = (): string | null => {
     return localStorage.getItem(AUTH_TOKEN_KEY);
}