import styled from "styled-components";
import { Row, Col } from "antd";

interface PropsMessage {
  width: string;
}

export default function Message(props: PropsMessage) {
  return (
    <StyledCol width={props.width} flex="auto">
      <StyledRow align="middle" justify="center">
        <div>message</div>
      </StyledRow>
    </StyledCol>
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
