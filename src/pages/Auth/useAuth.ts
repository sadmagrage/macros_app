import { Axios } from "axios";
import { useState } from "react";

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

          console.log(response);
     };

     return {
          username, setUsername,
          password, setPassword,
          onSend, authenticate
     };
}