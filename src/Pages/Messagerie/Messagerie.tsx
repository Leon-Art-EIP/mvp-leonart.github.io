import styled from "styled-components";
import { Row } from "antd";
import Message from "./Message";
import profile from "../../assets/profil.png";

export type Msg = {
  id: string;
  width: string;
  image: string;
  name: string;
  date: string;
  hour: string;
}

export default function Messagerie() {
  const messages: Msg[] = [
    { id: "message1", width: "400px", image: profile, name: "Jon Snow", date: "9 sept.", hour: "16h50" },
    { id: "message2", width: "200px", image: profile, name: "Damien D", date: "11 sept.", hour: "16h51" },
    { id: "message3", width: "100px", image: profile, name: "Evan K", date: "13 sept.", hour: "16h52" },
    { id: "message4", width: "200px", image: profile, name: "Clovis S", date: "9 nov.", hour: "16h53" },
    { id: "message5", width: "500px", image: profile, name: "Vivant G", date: "29 sept.", hour: "16h54" },
    { id: "message6", width: "100px", image: profile, name: "Marine W", date: "3 déc.", hour: "16h55" },
  ];

  return (
    <StyledRow align="middle">
      {messages.map((message) => {
        let {id, ...rest} = message;
        return <Message key={message.id} message={rest}></Message>;
      })}
    </StyledRow>
  );
}

const StyledRow = styled(Row)`
  width: 100%;
  height: 100%;
`;
