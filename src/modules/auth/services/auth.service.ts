import axios from "../../../infra/http/api";

import UnexpectedResponseError from "../../../infra/http/errors/UnexpectedResponseError";
import type { AxiosResponse } from "axios";
import type AuthResponse from "../dtos/responses/auth.response";
import type AuthRequest from "../dtos/requests/auth.request";

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