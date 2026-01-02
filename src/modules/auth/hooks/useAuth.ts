import { useState } from "react";
import { toast } from "react-toastify";
import { authenticate } from "../services/auth.service";
import AuthRequest from "../lib/dtos/requests/auth.request";
import { useNavigate } from "react-router-dom";
import type AuthResponse from "../lib/dtos/responses/auth.response";
import { storeToken } from "../utils/auth.utils";

export function useAuth() {

     const [ username, setUsername ] = useState("");
     const [ password, setPassword ] = useState("");
     const [ passwordVisibility, setPasswordVisibility ] = useState(false);

     const navigate = useNavigate();

     const signIn = async () => {
          toast.loading("Authenticating ...");

          try {
               const authReq: AuthRequest = new AuthRequest(username, password);

               const authRes: AuthResponse = await authenticate(authReq);

               storeToken(authRes);

               toast.dismiss();
               toast.success("Successfully authenticated", { autoClose: 2000 });
               navigate("/");
          } catch (error: any) {
               toast.dismiss();
               toast.error(error.message, { autoClose: 2000 });
          }
     };

     return {
          username, setUsername,
          password, setPassword,
          passwordVisibility, setPasswordVisibility,
          signIn
     };
}