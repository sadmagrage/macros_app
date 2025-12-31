import type AuthResponse from "../dtos/responses/auth.response";
import { jwtDecode, type JwtPayload } from "jwt-decode";

const AUTH_TOKEN_KEY: string = "auth_token";

export const storeToken = (authResponse: AuthResponse) => localStorage.setItem(AUTH_TOKEN_KEY, authResponse.token);

export const getToken = (): string | null => localStorage.getItem(AUTH_TOKEN_KEY);

export const isTokenExpired = (token: string): boolean => {
     const dtNow = Date.now() / 1000;

     const jwtInfo = jwtDecode<JwtPayload>(token);

     if (jwtInfo == null || jwtInfo.exp == null) throw new Error();

     return jwtInfo.exp < dtNow;
}