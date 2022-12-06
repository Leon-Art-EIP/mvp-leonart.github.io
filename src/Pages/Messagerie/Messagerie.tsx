import styled from "styled-components";
import { Row } from "antd";
import Message from "./Message";

interface Msg {
  width: string;
}

export default function Messagerie() {
  const messages: Msg[] = [
    { width: "400px" },
    { width: "200px" },
    { width: "100px" },
    { width: "200px" },
    { width: "500px" },
    { width: "100px" },
  ];

  return (
    <StyledRow>
      {messages.map((message) => {
        return <Message width={message.width}></Message>;
      })}
    </StyledRow>
  );
}

const StyledRow = styled(Row)`
  width: 100%;
  height: 100%;
`;
