import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainPath } from "../../Utils/variables";

export default function Register() {
  return (
    <FullRow align="middle" justify="center">
      <StyledCol span={8}>
        <ConnexionRow align="middle" justify="center">
          <Title>Inscription</Title>
          <FullInput placeholder="Nom"></FullInput>
          <FullInput placeholder="Prénom"></FullInput>
          <FullInput placeholder="Date de naissance JJ/MM/AAAA"></FullInput>
          <FullInput placeholder="E-mail"></FullInput>
          <StyledButton color="#468367" background="#F5F5F5">Se connecter avec Google</StyledButton>
          <StyledButton color="#FFFFFF" background="#2D6A4F">S' inscrire</StyledButton>
          <StyledDiv>
            Vous avez déjà un compte ? <StyledLink to={mainPath + "/login"}>Se connecter</StyledLink>
          </StyledDiv>
        </ConnexionRow>
      </StyledCol>
    </FullRow>
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

const ConnexionRow = styled(Row)`
  position: relative;
  height: 100%;
  width: 100%;
  background: #f5f5f5;
  padding: 20px;
  border-radius: 25px;
`;

const StyledCol = styled(Col)`
  min-height: 100%;
  width: 100%;
`;

const StyledButton = styled.div<{ color: string; background: string }>`
  font-family: "Montserrat", sans-serif;
  padding: 10px 20px;
  margin-right: 20px;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  border-radius: 20px;
  transition: all 0.1s ease-in-out;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25))
    drop-shadow(-2px -2px 4px #ffffff);
  :hover {
    cursor: pointer;
    filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.25))
      drop-shadow(-1px -1px 1px #ffffff);
  }
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;