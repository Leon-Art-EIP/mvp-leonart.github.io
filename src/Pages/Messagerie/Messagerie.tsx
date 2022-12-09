import styled from "styled-components";
import { Row } from "antd";
import Message from "./Message";

interface Msg {
  id: string;
  width: string;
}

export default function Messagerie() {
  const messages: Msg[] = [
    { id: "message1", width: "400px" },
    { id: "message2", width: "200px" },
    { id: "message3", width: "100px" },
    { id: "message4", width: "200px" },
    { id: "message5", width: "500px" },
    { id: "message6", width: "100px" },
  ];

  return (
    <StyledRow align="middle">
      {messages.map((message) => {
        return <Message key={message.id} width={message.width}></Message>;
      })}
    </StyledRow>
  );
}

const StyledRow = styled(Row)`
  width: 100%;
  height: 100%;
`;
