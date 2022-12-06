import styled from "styled-components";
import { Row, Col, Modal } from "antd";
import { useState } from "react";

interface PropsMessage {
  width: string;
}

export default function Message(props: PropsMessage) {
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
    <StyledCol width={props.width} flex="auto">
      <StyledRow align="middle" justify="center" onClick={showModal}>
        <>message</>
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
