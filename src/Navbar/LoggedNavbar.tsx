import { Col, Row } from "antd";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { isLoggedIn } from "../SetupRecoil";
import { useSetRecoilState } from "recoil";
import { LoadingOutlined } from "@ant-design/icons";
import { useState } from "react";
import { mainPath } from "../Utils/variables";
import Searchbar from "../Searchbar/Searchbar";

export default function LoggedNavbar() {
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
    <NavbarWrapper>
      <LinkersWrapper>
        <Col span={8}>
          <FullRow align="middle">
            <Col>
              <Link to="/mvp-leonart.github.io">
                <Row>
                  <Col>
                    <StyledImg alt="logo" src={logo}></StyledImg>
                  </Col>
                  <Col>
                    <StyledLeonart>
                      <StyledLeon>Leon</StyledLeon>
                      <StyledArt>'Art</StyledArt>
                    </StyledLeonart>
                  </Col>
                </Row>
              </Link>
            </Col>
          </FullRow>
        </Col>
        <Col span={8}>
          <FullRow align="middle" justify="center">
            <Col span={20}>
              <Row justify="space-between">
                <Col>
                  <Link to={mainPath}>
                    <PageTitle current={useLocation().pathname === mainPath}>
                      Home
                    </PageTitle>
                  </Link>
                </Col>
                <Col>
                  <Link to={mainPath + "/profil"}>
                    <PageTitle
                      current={useLocation().pathname === mainPath + "/profil"}
                    >
                      Profil
                    </PageTitle>
                  </Link>
                </Col>
                <Col>
                  <Link to={mainPath + "/publier"}>
                    <PageTitle
                      current={useLocation().pathname === mainPath + "/publier"}
                    >
                      Publier
                    </PageTitle>
                  </Link>
                </Col>
                <Col>
                  <Link to={mainPath + "/messagerie"}>
                    <PageTitle
                      current={
                        useLocation().pathname === mainPath + "/messagerie"
                      }
                    >
                      Messagerie
                    </PageTitle>
                  </Link>
                </Col>
              </Row>
            </Col>
          </FullRow>
        </Col>
        <Col span={8}>
          <FullRow align="middle">
            <Col flex="auto"></Col>
            <Col>
              <StyledButton
                color="#52B788"
                background="#F5F5F5"
                grey={isLoading}
                onClick={handleOnClick}
              >
                {isLoading && (
                  <LoadingOutlined
                    style={{ fontSize: 14, marginRight: "10px" }}
                    spin
                  />
                )}{" "}
                Déconnexion
              </StyledButton>
            </Col>
          </FullRow>
        </Col>
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

const FullRow = styled(Row)`
  width: 100%;
  height: 100%;
`;

const StyledImg = styled.img`
  margin-left: 10px;
  margin-right: 10px;
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

const PageTitle = styled.div<{ current: boolean }>`
  color: ${(props) => (props.current ? "#2D6A4F" : "#212121")};
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
`;

const StyledButton = styled.div<{
  color: string;
  background: string;
  grey?: boolean;
}>`
  pointer-events: ${(props) => props.grey && "none"};
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
    cursor: ${(props) => (props.grey ? "default" : "pointer")};
    filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.25))
      drop-shadow(-1px -1px 1px #ffffff);
  }
`;
