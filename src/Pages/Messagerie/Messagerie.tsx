import styled from "styled-components";
import { Row, Col } from "antd";

export default function Messagerie() {
  return (
    <StyledRow>
      <StyledCol width="400px" flex="auto">
        <StyledRow align="middle" justify="center">
          <div>message</div>
        </StyledRow>
      </StyledCol>
      <StyledCol width="200px" flex="auto">
        <StyledRow align="middle" justify="center">
          <div>message</div>
        </StyledRow>
      </StyledCol>
      <StyledCol width="100px" flex="auto">
        <StyledRow align="middle" justify="center">
          <div>message</div>
        </StyledRow>
      </StyledCol>
      <StyledCol width="300px" flex="auto">
        <StyledRow align="middle" justify="center">
          <div>message</div>
        </StyledRow>
      </StyledCol>
      <StyledCol width="200px" flex="auto">
        <StyledRow align="middle" justify="center">
          <div>message</div>
        </StyledRow>
      </StyledCol>
      <StyledCol width="500px" flex="auto">
        <StyledRow align="middle" justify="center">
          <div>message</div>
        </StyledRow>
      </StyledCol>
      <StyledCol width="100px" flex="auto">
        <StyledRow align="middle" justify="center">
          <div>message</div>
        </StyledRow>
      </StyledCol>
    </StyledRow>
  );
}

const StyledRow = styled(Row)`
  width: 100%;
  height: 100%;
`;

const StyledCol = styled(Col)<{ width: string }>`
  height: 50px;
  margin: 10px 6px 0 6px;
  background: #d8f3dc;
  border-radius: 10px;
  min-width: ${(props) => props.width};
`;
