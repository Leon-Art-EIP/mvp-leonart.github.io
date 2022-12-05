import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Messagerie from "./Messagerie/Messagerie";

export default function Pages() {
  return (
    <Routes>
      <Route path="/profil" element={<Profil />} />
      <Route path="/messagerie" element={<Messagerie />} />
      <Route path="/reseaux" element={<Reseaux />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

function Profil() {
  return <div>Mon profil</div>
}

function Reseaux() {
  return <div>Reseaux</div>;
}

function Contact() {
  return <div>leonart@epitech.eu</div>
}
