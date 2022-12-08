import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LoadingOutlined } from "@ant-design/icons";
import { useState } from "react";
import { isLoggedIn } from "../../SetupRecoil";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

export default function Connexion() {
  const [isLoading, setIsLoading] = useState(false);
  const setLoggedIn = useSetRecoilState(isLoggedIn);
  const navigate = useNavigate();

  function handleOnClick() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setLoggedIn(true);
      navigate("/mvp-leonart.github.io");
    }, 1500);
  }

  return (
    <ConnexionRow align="middle" justify="center">
      <CenteredDiv>
        <Title>Connexion</Title>
        <FullInput placeholder="Nom d'utilisateur"></FullInput>
        <FullInput placeholder="Mot de passe" type="password"></FullInput>
        <FullRow>
          <Col span={11}>
            <HalfButton color="#468367" background="#F5F5F5">
              Mot de passe oublié ?
            </HalfButton>
          </Col>
          <Col flex="auto"></Col>
          <Col span={11}>
            <HalfButton
              color="#FFFFFF"
              background="#2D6A4F"
              grey={isLoading}
              onClick={handleOnClick}
            >
              {isLoading && <LoadingOutlined style={{ fontSize: 14, marginRight: "10px" }} spin />}{" "}
              Se connecter
            </HalfButton>
          </Col>
        </FullRow>
        <StyledDiv>
          Pas encore de compte ?{" "}
          <StyledLink to="/register">S'inscrire</StyledLink>
        </StyledDiv>
      </CenteredDiv>
    </ConnexionRow>
  );
}

const StyledLink = styled(Link)`
  color: #2d6a4f;
  text-decoration: underline;
  :hover {
    color: #2d6a4f;
    text-decoration: underline;
  }
`;

const StyledDiv = styled.div`
  text-align: center;
  margin-top: 40px;
  color: #525252;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 0.8rem;
`;

const FullRow = styled(Row)`
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  color: #2d6a4f;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  text-align: center;
  margin-bottom: 30px;
`;

const FullInput = styled.input`
  background: #f5f5f5;
  box-shadow: inset -2px -2px 4px #ffffff, inset 2px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  border: none;
  width: 100%;
  max-width: 400px;
  padding: 8px 16px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  margin-bottom: 30px;
  color: #8f8f8f;
  outline: none;
  transition: all 0.3s ease-in-out;
  :focus {
    box-shadow: inset -1px -1px 1px #ffffff,
      inset 1px 1px 1px rgba(0, 0, 0, 0.25);
  }
`;

const HalfButton = styled.div<{
  color: string;
  background: string;
  grey?: boolean;
}>`
  pointer-events: ${(props) => props.grey && "none"};
  font-family: "Montserrat", sans-serif;
  padding: 10px 20px;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  border-radius: 20px;
  transition: all 0.1s ease-in-out;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25))
    drop-shadow(-2px -2px 4px #ffffff);
  :hover {
    cursor: ${(props) => (props.grey ? "default" : "pointer")};
    filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.25))
      drop-shadow(-1px -1px 1px #ffffff);
  }
  text-align: center;
  font-weight: 400;
  margin-top: 20px;
`;

const ConnexionRow = styled(Row)`
  height: 100%;
  width: 100%;
  background: #f5f5f5;
`;

const CenteredDiv = styled.div``;
