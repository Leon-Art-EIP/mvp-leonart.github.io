import { Row, Col } from "antd";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { mainPath } from "../Utils/variables";
import Searchbar from "../Searchbar/Searchbar";

export default function NotLoggedNavbar() {
  return (
    <NavbarWrapper>
      <LinkersWrapper>
        <StyledCol span={8}>
          <FullRow align="middle">
            <Col>
              <Link to={mainPath}>
                <StyledImg alt="logo" src={logo}></StyledImg>
              </Link>
            </Col>
            <Col flex="auto"></Col>
          </FullRow>
        </StyledCol>
        <StyledCol span={8}>
          <FullRow align="middle" justify="center">
            <Link to={mainPath}>
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
                <Link to={mainPath + "/login"}>
                  <StyledButton color="#FFFFFF" background="#2D6A4F">
                    Se connecter
                  </StyledButton>
                </Link>
                <Link to={mainPath + "/register"}>
                  <StyledButton color="#52B788" background="#F5F5F5">
                    S'inscrire
                  </StyledButton>
                </Link>
              </FullRow>
            </Col>
          </FullRow>
        </StyledCol>
      </LinkersWrapper>
      {useLocation().pathname === mainPath && <Searchbar />}
    </NavbarWrapper>
  );
}

const NavbarWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
`;

const LinkersWrapper = styled(Row)`
  background: #f5f5f5bf;
  height: 80px;
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
