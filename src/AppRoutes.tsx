import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Food from "./pages/Food";

export default function AppRoutes() {
     return (
          <Routes>
               <Route element={ <Home/> } path="/home" />
               <Route element={ <Auth/> } path="/auth" />
               <Route element={ <Food/> } path="/food" />
          </Routes>
     )
}