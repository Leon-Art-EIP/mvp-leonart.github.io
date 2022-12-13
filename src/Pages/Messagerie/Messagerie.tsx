import { Col, Row } from "antd";
import styled from "styled-components";

export default function Messagerie() {
  return (
    <MessagerieWrapper>
      <StyledColButtons>
        <StyledButton></StyledButton>
        <StyledButton></StyledButton>
        <StyledButton></StyledButton>
        <StyledButton></StyledButton>
        <StyledButton></StyledButton>
        <StyledButton></StyledButton>
      </StyledColButtons>
      <Col></Col>
    </MessagerieWrapper>
  );
}

const MessagerieWrapper = styled(Row)`
  background: #f0efef;
  margin: 10px 5px;
  border-radius: 10px;
`;

const StyledColButtons = styled(Col)`
  margin: 5px;
  padding: 5px;
  height: ${window.innerHeight - 80 - 30 + "px"};
  /* border:solid; */
  border-width: 1px;
  border-radius: 20px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`;

const StyledButton = styled.div`
  background: #f0efef;
  box-shadow: inset -4px -4px 10px #ffffff,
    inset 4px 4px 5px rgba(0, 0, 0, 0.25);
  width: 250px;
  height: 60px;
  border-radius: 30px;
  margin: 10px 0px;
`;
