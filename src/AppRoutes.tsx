import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

export default function AppRoutes() {
     return (
          <Routes>
               <Route element={ <Home/> } path="/home" />
          </Routes>
     )
}