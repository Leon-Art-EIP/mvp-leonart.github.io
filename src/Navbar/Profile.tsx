import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainPath } from "../Utils/variables";
import DeconnexionButton from "./DeconnexionButton";
import MyProfileButton from "./MyProfileButton";
import ParametersButton from "./ParametersButton";

export default function Profile() {
  return (
    <ProfileWrapper>
      <Link to={mainPath + "/profil"}>
        <MyProfileButton></MyProfileButton>
      </Link>
      <Link to={mainPath + "/parametres"}>
        <ParametersButton></ParametersButton>
      </Link>
      <DeconnexionButton></DeconnexionButton>
    </ProfileWrapper>
  );
}

const ProfileWrapper = styled.div`
  position: absolute;
  width: 175px;
  right: 20px;
  margin-top: 60px;
  border-radius: 10px;
  background: #f5f5f5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
