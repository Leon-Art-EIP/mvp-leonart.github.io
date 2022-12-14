import { Col, Row } from "antd";
import styled from "styled-components";
import { ContactType } from "./Contact";

interface ConctactHeaderProps {
  contacts: ContactType[];
  selected: string;
}

export default function ContactHeader({ contacts, selected }: ConctactHeaderProps) {
  let current: ContactType = {image: "", name: "", lastmsg: "", sent: [], received: []};
  for (const contact of contacts) {
    if (contact.name === selected) {
      current = contact;
    }
  }
  return (
    <ContactHeaderWrapper align="middle">
      <Col>
        <StyledImg alt="profile picture" src={current.image}></StyledImg>
      </Col>
      <Col>
        <StyledUser>{current.name}</StyledUser>
      </Col>
    </ContactHeaderWrapper>
  );
}

const ContactHeaderWrapper = styled(Row)`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 65px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const StyledUser = styled.div`
  font-size: 1.2rem;
  font-family: "Montserrat", sans-serif;
  margin-left: 10px;
`;

const StyledImg = styled.img`
  width: 50px;
  border-radius: 30px;
  margin-left: 10px;
`;
