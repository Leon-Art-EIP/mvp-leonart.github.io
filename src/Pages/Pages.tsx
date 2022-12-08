import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Messagerie from "./Messagerie/Messagerie";
import Feed from "./Feed/Feed";
import Publier from "./Publier/Publier";
import Register from "./Register/Register";
import Login from "./Login/Login";
import Profil from "./Profil/Profil";

export default function Pages() {
  return (
    <Routes>
      <Route path="/mvp-leonart.github.io" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/publier" element={<Publier />} />
      <Route path="/messagerie" element={<Messagerie />} />
      <Route path="/profil" element={<Profil />} />
    </Routes>
  );
}

