import { Row, Col } from "antd";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
// import { MailOutlined } from "@ant-design/icons";

export default function Navbar() {
  return (
    <NavbarWrapper>
      <StyledCol span={8}>
        <FullRow align="middle">
          <Col>
            <Link to="/mvp-leonart.github.io">
              <StyledImg alt="logo" src={logo}></StyledImg>
            </Link>
          </Col>
          <Col flex="auto"></Col>
        </FullRow>
      </StyledCol>
      <StyledCol span={8}>
        <FullRow align="middle" justify="center">
          <Link to="/mvp-leonart.github.io">
            <StyledLeonart>
              <StyledLeon>Leon</StyledLeon>
              <StyledArt>'Art</StyledArt>
            </StyledLeonart>
          </Link>
        </FullRow>
      </StyledCol>
      <StyledCol span={8}>
        <FullRow>
          <Col flex="auto"></Col>
          <Col>
            <FullRow align="middle">
              <Link to="/login">
                <StyledButton color="#FFFFFF" background="#2D6A4F">
                  Se connecter
                </StyledButton>
              </Link>
              <StyledButton color="#52B788" background="#F5F5F5">
                S'inscrire
              </StyledButton>
            </FullRow>
          </Col>
        </FullRow>
      </StyledCol>
    </NavbarWrapper>
  );
}

const NavbarWrapper = styled(Row)`
  position: absolute;
  z-index: 2;
  background: #f5f5f5bf;
  min-height: 80px;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(15px);
`;

const StyledCol = styled(Col)`
  min-height: 100%;
  width: 100%;
  /* border: solid;
  border-color: red;
  border-width: 1px; */
`;

const FullRow = styled(Row)`
  width: 100%;
  height: 100%;
`;

const StyledLeonart = styled.div`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 2.5rem;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const StyledLeon = styled.u`
  text-decoration: none;
  color: #2d6a4f;
`;

const StyledArt = styled.u`
  text-decoration: none;
  color: #2e2e2e;
`;

const StyledImg = styled.img`
  margin-left: 10px;
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
`;

/*
pour Messagerie :

const StyledMailRow = styled(Row)`
  min-height: 100%;
`;

const StyledMailOutlinedLogo = styled(MailOutlined)`
  font-size: 40px;
`;

const StyledButtonDiv = styled.div`
  padding: 10px 20px;
  border-radius: 30px;
  color: #454545;
  :hover {
    background: green;
    cursor: pointer;
    color: white;
  }
`;
*/
