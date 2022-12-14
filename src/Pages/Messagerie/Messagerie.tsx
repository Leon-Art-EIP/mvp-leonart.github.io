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
      lastmsg: "salut sa va est-ce que...",
      received: [
        "ce sont les mêmes messages pour tt le monde",
        "car c'est long à faire pour rien",
        "blablablabla\nretour à la ligne ?",
      ],
      sent: [
        "moi aussi ce sont tjs les mm messages",
        "car oui bus autorioute voiture f1\npetit retour à la ligne\nn2",
        "et enfin le dernier message",
      ],
    },
    {
      image: profile2,
      name: "Evan Koehler",
      lastmsg: "le néomorphisme est né...",
      received: [
        "bonj<eosjfsmowdjfwmdjfdlglwkd,fwdlmf",
        "<ejrozeroejfoqsjdfd,klvwmxcnvoierjdfg>",
        "wfjdmgfdpwikbpgqerjtqsdnvmwkdfngwmldfgml",
      ],
      sent: [
        "okkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk",
        "blitzblitzblitzblitzblitzblitzblitzblitzblitzblitz",
        "syyyymmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm",
      ],
    },
    {
      image: profile3,
      name: "Marius Nowak",
      lastmsg: "tutututtuututututututt...",
      received: [
        "blablablablablablablablablablablablablablabla",
        "albalbalbalbalbalbalbalbalbalbalbalbalbalbalb",
        "iasamiasamiasamiasamiasamiasamiasamiasamiasamiasamiasam",
      ],
      sent: [
        "MmmhhhMmmhhhMmmhhhMmmhhhMmmhhhM",
        "Lopsem durojz pzhe ghrzvu ozeuozidoifozkzen izr izueo",
        "et enfin le dernier message",
      ],
    },
    {
      image: profile4,
      name: "Vivant Garrigues",
      lastmsg: "Salut je m'appelle Viv...",
      received: [
        "okokokokokokokokokokokokokokokokokokokok",
        "çavvva ?çavvva ?çavvva ?çavvva ?çavvva ?çavvva ?",
        "astalisata astalisata astalisata astalisata ?",
      ],
      sent: [
        "ejvoisejvoisejvoisejvoisejvoisejvoisejvoisejvois",
        "sinncv??sinncv??sinncv??sinncv??sinncv??sinncv??sinncv??",
        "dakodakdakodakdakodakdakodakdakodakdakoda",
      ],
    },
    {
      image: profile5,
      name: "Damien Demontis",
      lastmsg: "Salut je suis l'ami de...",
      received: [
        "NOrmalllumùmNOrmalllumùmNOrmalllumùmNOrmalllumùm",
        "velkozzzvelkozzzvelkozzzvelkozzzvelkozzzvelkozzzvelkozzz",
        "ou ziggs ou cassio ou ziggs ou cassio ou ziggs ou cassio",
      ],
      sent: [
        "non c'ets nul non c'ets nulnon c'ets nulnon c'ets nul",
        "j'achete leouvre pour 120 eurosj'achete leouvre pour 120 euros",
        "non en fait ja le veux pasnon en fait ja le",
      ],
    },
    {
      image: profile6,
      name: "Clovis Schneider",
      lastmsg: "Warcraft 3 est un jeu ...",
      received: [
        "mesaoahiozamesaoahiozamesaoahiozamesaoahioza",
        "la france va gagner 2-1 puis 4-1",
        "il faut parier sur winamax",
      ],
      sent: [
        "ok jacheteok jacheteok jacheteok jacheteok jachete",
        "hphphphphphphphphphphphphphphphphphphphphphphphphphphp",
        "The office saison 23§!!!!!!",
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
