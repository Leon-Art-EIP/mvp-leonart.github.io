import { useRecoilValue } from "recoil";
import { isLoggedIn } from "../SetupRecoil";
import LoggedNavbar from "./LoggedNavbar";
import NotLoggedNavbar from "./NotLoggedNavbar";

export default function Navbar() {
  const isLogged = useRecoilValue(isLoggedIn);
  return isLogged ? <LoggedNavbar /> : <NotLoggedNavbar />;
}
