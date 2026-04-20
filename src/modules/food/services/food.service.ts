import axios from "../../core/lib/http/api";

import UnexpectedResponseError from "../../core/lib/http/errors/UnexpectedResponseError";
import type { AxiosResponse } from "axios";
import type FoodResponse from "../lib/dtos/responses/food.response";

export const findAll = async (): Promise<FoodResponse[]> => {
     try {
          const response: AxiosResponse = await axios.get("food").catch(error => error.response);
          
          if (response.status != 200) throw new UnexpectedResponseError(response.data.error, response.status);
          
          return response.data;
     } catch (error) {
          if (error instanceof UnexpectedResponseError) throw error;

          throw new Error("An unexpected error occurred while trying to fetch food");
     }
} 