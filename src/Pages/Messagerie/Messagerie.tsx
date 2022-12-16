import { Col, Input, Row } from "antd";
import styled from "styled-components";
import Contact, { ContactType } from "./Contact";
import profile1 from "../../assets/Rectangle 180.png";
import profile2 from "../../assets/Rectangle 180(1).png";
import profile3 from "../../assets/Rectangle 180(2).png";
import profile4 from "../../assets/Rectangle 180(3).png";
import profile5 from "../../assets/Rectangle 184.png";
import profile6 from "../../assets/Rectangle 185.png";
import { useState } from "react";
import ContactHeader from "./ContactHeader";
import Message from "./Message";

export default function Messagerie() {
  const [selected, setSelected] = useState("Cédric Ulrich");
  const contacts: ContactType[] = [
    {
      image: profile1,
      name: "Cédric Ulrich",
      lastmsg: "Très bien, à Lundi 20,...",
      received: [
        "Bonjour, créez-vous des huiles sur toile sur mesure ?",
        "J'aimerais que vous peignez ma voiture",
        "Je suis disponible tous les jours dès la semaine prochaine. Que diriez-vous de Lundi 20 à 19h00 place Carrière ?",
      ],
      sent: [
        "Bonjour, oui bien-sûr que désirez-vous ?",
        "Très bien, avez-vous des disponibilités pour que nous puissions parler détails en présentiel ?",
        "Très bien, à Lundi 20, 19h !",
      ],
    },
    {
      image: profile2,
      name: "Evan Koehler",
      lastmsg: "Oui bien-sûr, que pens...",
      received: [
        "Bonsoir, je suis passioné d'art et suis intéressé par vos créations",
        "En tant que pilote, j'aimerais faire une séance photos avec moi et mon avion.",
        "J'habite dans les Vosges près d'Epinal, peut-on programmer un rendez-vous ?",
      ],
      sent: [
        "Bonsoir, ravi de le lire, merci, que puis-je faire pour vous ?",
        "Je vois. Je peux me déplacer dans la région Grand Est, êtes-vous situé dans cette zone ?",
        "Oui bien-sûr, que pensez-vous du Mardi 21 à 14h00 devant le château d'Epinal ?",
      ],
    },
    {
      image: profile3,
      name: "Marius Nowak",
      lastmsg: "Oui bien-sûr !",
      received: [
        "Bonjour, j'ai vu votre travail et aimerais vous solliciter pour une mission de photographe, est-ce possible ?",
        "Il s'agirait d'un mariage qui aurait lieu au château de Morey près de Pont-à-Mousson",
        "Cela serait le 23 janvier à partir de 16h00, seriez-vous disponible ?",
      ],
      sent: [
        "Bonjour, oui bien-sûr, pour quelle mission précisemment ?",
        "D'accord, très bien, c'est une mission que je peux réaliser, pour quand cela serait-il ?",
        "Oui bien-sûr !",
      ],
    },
    {
      image: profile4,
      name: "Vivant Garrigues",
      lastmsg: "Oui bien-sûr, je serai...",
      received: [
        "Bonjour, je suis passioné d'art abstrait, peignez-vous ce genre d'oeuvre ?",
        "J'aimerais une toile s'inspirant de ces deux thèmes : tennis et rubiik's cube, libre à vous ensuite d'en faire de ce que vous voulez",
        "Je suis disponible le 22 décembre à 10h00, place Carrière, ça vous irait ?",
      ],
      sent: [
        "Bonjour, oui bien-sûr, que souhaitez-vous précisément ?",
        "D'accord, quand est-ce vous êtes disponibles pour qu'on se rencontre pour parler détails (dimensions par exemple)",
        "Oui bien-sûr, je serai là.",
      ],
    },
    {
      image: profile5,
      name: "Damien Demontis",
      lastmsg: "C'est noté, je serai l...",
      received: [
        "Bonjour, créez-vous des huiles sur toile sur mesure ?",
        "J'aimerais que vous peignez ma voiture",
        "Je suis disponible tous les jours dès la semaine prochaine. Que diriez-vous de Lundi 20 à 19h00 place Carrière ?",
      ],
      sent: [
        "Bonjour, oui bien-sûr que désirez-vous ?",
        "Très bien, avez-vous des disponibilités pour que nous puissions parler détails en présentiel ?",
        "C'est noté, je serai là ! Bonne journée.",
      ],
    },
    {
      image: profile6,
      name: "Clovis Schneider",
      lastmsg: "Je vous propose que l'...",
      received: [
        "Bonsoir, je suis passioné d'art et suis intéressé par vos créations",
        "En tant que pilote, j'aimerais faire une séance photos avec moi et mon avion.",
        "J'habite dans les Vosges près d'Epinal, peut-on programmer un rendez-vous ?",
      ],
      sent: [
        "Bonsoir, ravi de le lire, merci, que puis-je faire pour vous ?",
        "Je vois. Je peux me déplacer dans la région Grand Est, êtes-vous situé dans cette zone ?",
        "Je vous propose que l'on se rejoigne devant le musée de l'image le 22 à 19h?",
      ],
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
      <MessageCol flex="auto">
        <ContactHeader contacts={contacts} selected={selected} />
        <Date>Vendredi 9 décembre 2022</Date>
        <Message contacts={contacts} selected={selected} />
        <FullRow align="bottom">
          <StyledInput placeholder="Entrer un message..."></StyledInput>
        </FullRow>
      </MessageCol>
    </MessagerieWrapper>
  );
}

const Date = styled.div`
  text-align: center;
  color: #6a6a6a;
  margin: 15px 0;
`;

const FullRow = styled(Row)`
  height: 90px;
`;

const MessageCol = styled(Col)`
  box-shadow: inset -4px -4px 10px #ffffff,
    inset 4px 4px 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin: 5px;
  padding: 5px;
`;

const StyledInput = styled(Input)`
  background: #f0efef;
  border-top-right-radius: 0px;
  border-top-left-radius: 0px;
  padding: 5px 15px;
`;

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
  box-shadow: inset -4px -4px 10px #ffffff,
    inset 4px 4px 5px rgba(0, 0, 0, 0.25);
`;
