import { Col, Row } from "antd";
import styled from "styled-components";
import Contact, { ContactType } from "./Contact";
import profile1 from "../../assets/Rectangle 180.png";
import profile2 from "../../assets/Rectangle 180(1).png";
import profile3 from "../../assets/Rectangle 180(2).png";
import profile4 from "../../assets/Rectangle 180(3).png";
import profile5 from "../../assets/Rectangle 184.png";
import profile6 from "../../assets/Rectangle 185.png";
import { useState } from "react";

export default function Messagerie() {
  const [selected, setSelected] = useState("");
  const contacts: ContactType[] = [
    {
      image: profile1,
      name: "Cédric Ulrich",
      lastmsg: "salut sa va est-ce que...",
    },
    {
      image: profile2,
      name: "Evan Koehler",
      lastmsg: "le néomorphisme est né...",
    },
    {
      image: profile3,
      name: "Marius Nowak",
      lastmsg: "tutututtuututututututt...",
    },
    {
      image: profile4,
      name: "Vivant Garrigues",
      lastmsg: "Salut je m'appelle Viv...",
    },
    {
      image: profile5,
      name: "Damien Demontis",
      lastmsg: "Salut je suis l'ami de...",
    },
    {
      image: profile6,
      name: "Clovis Schneider",
      lastmsg: "Warcraft 3 est un jeu ...",
    },
  ];

  return (
    <MessagerieWrapper>
      <StyledCol>
        {contacts.map((contact) => {
          return (
            <Contact
              contact={contact}
              selected={selected}
              setSelected={setSelected}
            />
          );
        })}
      </StyledCol>
      <StyledCol flex="auto"></StyledCol>
    </MessagerieWrapper>
  );
}

const MessagerieWrapper = styled(Row)`
  background: #f0efef;
  margin: 10px 5px;
  border-radius: 10px;
`;

const StyledCol = styled(Col)`
  margin: 5px;
  padding: 5px;
  height: ${window.innerHeight - 80 - 30 + "px"};
  /* border:solid; */
  border-width: 1px;
  border-radius: 20px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`;
