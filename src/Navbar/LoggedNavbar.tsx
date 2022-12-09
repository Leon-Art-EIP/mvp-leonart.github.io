import { Col, Row } from "antd";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { mainPath } from "../Utils/variables";
import Searchbar from "../Searchbar/Searchbar";
import { UserOutlined } from "@ant-design/icons";
import { useState } from "react";
import Profile from "./Profile";

export default function LoggedNavbar() {
  const [profileOpen, setProfileOpen] = useState(false);

  function handleProfileOnClick() {
    setProfileOpen(!profileOpen);
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
              <StyledUserOutlined onClick={handleProfileOnClick} />
            </Col>
          </FullRow>
        </Col>
        {profileOpen && <Profile />}
      </LinkersWrapper>
      {useLocation().pathname === mainPath && <Searchbar />}
    </NavbarWrapper>
  );
}

const StyledUserOutlined = styled(UserOutlined)`
  font-size: 1.6rem;
  margin-right: 20px;
  :hover {
    cursor: pointer;
  }
`;

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
