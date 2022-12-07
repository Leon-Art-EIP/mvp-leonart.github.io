import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Searchbar from "./Searchbar/Searchbar";
import Pages from "./Pages/Pages";

export default function Main() {
  return (
    <BrowserRouter>
      <Navbar />
      <Searchbar />
      <Pages />
    </BrowserRouter>
  );
}
