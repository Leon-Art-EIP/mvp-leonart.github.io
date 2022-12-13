import { Col, Row } from "antd";
import styled from "styled-components";

export type ContactType = {
  image: string;
  name: string;
  lastmsg: string;
};

interface ContactProps {
  contact: ContactType;
  selected: string;
  setSelected(arg0: string): void;
}

export default function Contact({
  contact,
  selected,
  setSelected,
}: ContactProps) {
  if (selected === contact.name) {
    return (
      <StyledButtonPressed>
        <ContactInfos
          contact={contact}
          selected={selected}
          setSelected={setSelected}
        ></ContactInfos>
      </StyledButtonPressed>
    );
  }
  return (
    <StyledButton>
      <ContactInfos
        contact={contact}
        selected={selected}
        setSelected={setSelected}
      ></ContactInfos>
    </StyledButton>
  );
}

function ContactInfos({ contact, selected, setSelected }: ContactProps) {
  function handleOnClick() {
    setSelected(contact.name);
  }

  return (
    <FullRow align="middle" onClick={handleOnClick}>
      <Col span={6}>
        <StyledImg src={contact.image}></StyledImg>
      </Col>
      <Col span={18}>
        <StyledName>{contact.name}</StyledName>
        <div>{contact.lastmsg}</div>
      </Col>
    </FullRow>
  );
}

const StyledButtonPressed = styled.div<{ selected?: boolean }>`
  background: #f0efef;
  box-shadow: inset -4px -4px 10px #ffffff,
    inset 4px 4px 5px rgba(0, 0, 0, 0.25);
  width: 250px;
  height: 60px;
  border-radius: 30px;
  margin: 10px 0px;
`;

const StyledButton = styled.div<{ selected?: boolean }>`
  background: #f0efef;
  box-shadow: inset -4px -4px 10px rgba(0, 0, 0, 0.25),
    inset 4px 4px 5px #ffffff;
  width: 250px;
  height: 60px;
  border-radius: 30px;
  margin: 10px 0px;
`;

const StyledName = styled.div`
  font-size: 1rem;
  font-size: "Montserrat", sans-serif;
`;

const FullRow = styled(Row)`
  height: 100%;
  width: 100%;
  padding: 0px 10px;
  :hover {
    cursor: pointer;
  }
`;

const StyledImg = styled.img`
  width: 50px;
  border-radius: 30px;
`;
