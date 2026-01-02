import axios from "../../core/lib/http/api";

import UnexpectedResponseError from "../../core/lib/http/errors/UnexpectedResponseError";
import type { AxiosResponse } from "axios";
import type AuthResponse from "../lib/dtos/responses/auth.response";
import type AuthRequest from "../lib/dtos/requests/auth.request";

export const authenticate = async (authReq: AuthRequest): Promise<AuthResponse> => {
     try {
          const response: AxiosResponse = await axios.post("auth/login", JSON.stringify(authReq)).catch(error => error.response);
          
          if (response.status != 200) throw new UnexpectedResponseError(response.data.error, response.status);
          
          return response.data;
     } catch (error) {
          if (error instanceof UnexpectedResponseError) throw error;

          throw new Error("An unexpected error occurred while trying to authenticate");
     }
} 