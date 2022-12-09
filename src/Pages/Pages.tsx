import { Routes, Route } from "react-router-dom";
import { mainPath } from "../Utils/variables";
import Messagerie from "./Messagerie/Messagerie";
import Publier from "./Publier/Publier";
import Register from "./Register/Register";
import Login from "./Login/Login";
import Profil from "./Profil/Profil";
import Home from "./Home/Home";
import Parameters from "./Parameters/Parameters";

export default function Pages() {
  return (
    <Routes>
      <Route path={mainPath + "/login"} element={<Login />} />
      <Route path={mainPath + "/register"} element={<Register />} />
      <Route path={mainPath + "/publier"} element={<Publier />} />
      <Route path={mainPath + "/messagerie"} element={<Messagerie />} />
      <Route path={mainPath + "/profil"} element={<Profil />} />
      <Route path={mainPath + "/parametres"} element={<Parameters />} />
      <Route path={mainPath} element={<Home />} />
    </Routes>
  );
}
