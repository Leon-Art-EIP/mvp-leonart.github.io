import { Row, Col } from "antd";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import text from "../assets/Leonart.svg";
import { Link } from "react-router-dom";
import { MailOutlined } from "@ant-design/icons";

export default function Navbar() {
  return (
    <NavbarWrapper>
      <StyledCol>
        <StyledLogoRow align="middle">
          <Link to="/mvp-leonart.github.io">
            <StyledImg alt="logo" src={logo}></StyledImg>
            <StyledImg alt="text" src={text}></StyledImg>
          </Link>
        </StyledLogoRow>
      </StyledCol>
      <StyledCol flex="auto"></StyledCol>
      <StyledCol span={6}>
        <StyledMailRow align="middle" justify="center">
          <Link to="/messagerie">
            <StyledButtonDiv>
              <StyledMailOutlinedLogo />
            </StyledButtonDiv>
          </Link>
        </StyledMailRow>
      </StyledCol>
    </NavbarWrapper>
  );
}

const NavbarWrapper = styled(Row)`
  background: #d8f3dc;
  min-height: 80px;
  width: 100%;
  border-bottom: solid;
  border-bottom-color: white;
  border-bottom-width: 1px;
`;

const StyledCol = styled(Col)`
  min-height: 100%;
`;

const StyledLogoRow = styled(Row)`
  min-height: 100%;
  padding: 20px;
`;

const StyledImg = styled.img`
  margin: 5px;
`;

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
