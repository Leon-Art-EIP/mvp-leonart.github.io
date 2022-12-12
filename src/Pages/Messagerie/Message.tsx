import styled from "styled-components";
import { Row, Col, Modal } from "antd";
import { useState } from "react";
import { Msg } from "./Messagerie";

interface PropsMessage {
  message: Omit<Msg, 'id'>;
}

export default function Message({message}: PropsMessage) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <StyledCol width={message.width} flex="auto">
      <StyledRow align="middle" justify="center" onClick={showModal}>
        <StyledImg alt="profil" src={message.image}></StyledImg>
        <StyledText>{message.name}</StyledText>
        <StyledText>-</StyledText>
        <StyledText>{message.date}</StyledText>
        <StyledText>{message.hour}</StyledText>
      </StyledRow>
      <Modal
        title="Message Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Pour l'instant y a rien...</p>
      </Modal>
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
  :hover {
    background: #9df5aa;
    cursor: pointer;
  }
`;

const StyledImg = styled.img`
  width: 30px;
  border-radius: 10px;
`;

const StyledText = styled.div`
  margin-left: 3px;
  margin-right: 3px;
  color: #6f6f6f;
  font-family: 'Montserrat', sans-serif;
`;
