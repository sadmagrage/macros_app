import { Axios } from "axios";
import { useState } from "react";
import type { TokenDto } from "./types";

export function useAuth() {
     const API_URL = "http://localhost:8080";
     const axios = new Axios({ baseURL: API_URL });

     const [ username, setUsername ] = useState("");
     const [ password, setPassword ] = useState("");

     const onSend = () => {
          console.log(`Username: ${ username }\nPassword: ${ password }`);
     };

     const authenticate = async () => {
          const response = await axios.post("/auth/login", JSON.stringify({ username, password }), { headers: { "Content-Type": "application/json" } });

          let tokenDto: TokenDto;

          if (response.status == 200) {
               tokenDto = JSON.parse(response.data);
          }
     };

     return {
          username, setUsername,
          password, setPassword,
          onSend, authenticate
     };
}