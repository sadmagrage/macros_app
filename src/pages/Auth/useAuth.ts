import { useState } from "react";
import { toast } from "react-toastify";
import { authenticate } from "../../modules/auth/services/auth.service";
import AuthRequest from "../../modules/auth/dtos/requests/auth.request";
import { useNavigate } from "react-router-dom";

export function useAuth() {

     const [ username, setUsername ] = useState("");
     const [ password, setPassword ] = useState("");
     const [ inputPasswordType, setInputPasswordType ] = useState("password");

     const navigate = useNavigate();

     const onSend = async () => {
          toast.loading("Authenticating ...");

          try {
               const authReq: AuthRequest = new AuthRequest(username, password);

               const { token } = await authenticate(authReq);

               localStorage.setItem("Authorization", token);

               toast.dismiss();
               toast.success("Successfully authenticated", { autoClose: 2000 });
               navigate("/");
          } catch (error: any) {
               toast.dismiss();
               toast.error(error.message, { autoClose: 2000 });
          }
     };

     const changeInputPasswordType = () => setInputPasswordType(inputPasswordType == "password" ? "text" : "password");

     return {
          username, setUsername,
          password, setPassword,
          inputPasswordType, changeInputPasswordType,
          onSend
     };
}