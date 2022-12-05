import { Row, Col } from "antd";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import text from "../assets/Leonart.svg";

export default function Navbar() {
  return (
    <NavbarWrapper>
      <StyledCol borderColor="black">
        <StyledLogoRow align="middle">
          <StyledImg alt="logo" src={logo}></StyledImg>
          <StyledImg alt="text" src={text}></StyledImg>
        </StyledLogoRow>
      </StyledCol>
      <StyledCol borderColor="grey" flex="auto">
        <StyledSloganRow align="middle" justify="center">
          <StyledSlogan>
            Ça va se vendre comme des petits peintres !
          </StyledSlogan>
        </StyledSloganRow>
      </StyledCol>
      <StyledCol borderColor="white" span={6}></StyledCol>
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

const StyledCol = styled(Col)<{ borderColor: string }>`
  /* border: solid; */
  /* border-color: ${(props) => props.borderColor}; */
  min-height: 100%;
`;

const StyledLogoRow = styled(Row)`
  min-height: 100%;
  padding: 20px;
`;

const StyledImg = styled.img`
  margin: 5px;
`;

const StyledSloganRow = styled(Row)`
  width: 100%;
  height: 100%;
`;

const StyledSlogan = styled.div`
  color: green;
  font-family: "Lobster", cursive;
  font-size: xx-large;
`;
