import axios from "../../../infra/http/api";
import type { TokenDto } from "../../../pages/Auth/types";
import UnexpectedResponseError from "../../../infra/http/errors/UnexpectedResponseError";
import type { AxiosResponse } from "axios";

export const authenticate = async (username: string, password: string): Promise<TokenDto> => {
     try {
          const response: AxiosResponse = await axios.post("auth/login", JSON.stringify({ username, password }));
      
          if (response.status == 401) throw new UnexpectedResponseError("Unauthorized", response.status);
          else if (response.status != 200) throw new UnexpectedResponseError(response.data, response.status);
          
          return response.data;
     } catch (error) {
          if (error instanceof UnexpectedResponseError) throw error;

          throw new Error("An expected error occurred");
     }
} 