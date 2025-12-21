import "./types";
import { Axios } from "axios";
import { useState } from "react";
import type { TokenDto } from "./types";

export function useAuth() {
     const API_URL = "http://localhost:8080";
     const axios = new Axios({ baseURL: API_URL });

     const [ username, setUsername ] = useState("");
     const [ password, setPassword ] = useState("");

     const onSend = async () => {
          try {
               const tokenDto = await authenticate();
               
               console.log(tokenDto.token);
          } catch (error: any) {
               console.error(error.message);
          }
     };

     const authenticate = async (): Promise<TokenDto> => {
          const response = await axios.post("/auth/login", JSON.stringify({ username, password }), { headers: { "Content-Type": "application/json" } });

          if (response.status == 403) throw new Error("Unauthorized");
          else if (response.status != 200) throw new Error("Internal error");

          return JSON.parse(response.data);
     };

     return {
          username, setUsername,
          password, setPassword,
          onSend
     };
}