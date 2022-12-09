import { isLoggedIn } from "../SetupRecoil";
import { useSetRecoilState } from "recoil";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mainPath } from "../Utils/variables";
import Button from "../Utils/Button";
import { LoadingOutlined, LogoutOutlined } from "@ant-design/icons";

export default function DeconnexionButton() {
  const loadIcon = (
    <LoadingOutlined style={{ fontSize: 14, marginRight: "10px" }} spin />
  );
  const logoutIcon = (
    <LogoutOutlined style={{ fontSize: 14, marginRight: "10px" }} />
  );
  const [isLoading, setIsLoading] = useState(false);
  const setLoggedIn = useSetRecoilState(isLoggedIn);
  const navigate = useNavigate();
  function handleOnClick() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setLoggedIn(false);
      navigate(mainPath);
    }, 1500);
  }

  return (
    <Button
      text="Déconnexion"
      color="red"
      background="#F5F5F5"
      borderRadius="0px 0px 10px 10px"
      isLoading={isLoading}
      icon={isLoading ? loadIcon : logoutIcon}
      onClick={handleOnClick}
    ></Button>
  );
}
