import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Messagerie from "./Messagerie/Messagerie";
import Login from "./Login/Login";

export default function Pages() {
  return (
    <Routes>
      <Route path="/mvp-leonart.github.io" element={<Home />} />
      <Route path="/profil" element={<Profil />} />
      <Route path="/messagerie" element={<Messagerie />} />
      <Route path="/reseaux" element={<Reseaux />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

function Profil() {
  return <div>Mon profil</div>;
}

function Reseaux() {
  return <div>Reseaux</div>;
}

function Contact() {
  return <div>leonart@epitech.eu</div>;
}
