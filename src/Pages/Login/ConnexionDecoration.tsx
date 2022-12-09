import { Row } from "antd";
import styled from "styled-components";
import Card from "./Card";
import image12 from "../../assets/image12.png";
import image13 from "../../assets/image13.png";
import image14 from "../../assets/image14.png";
import image15 from "../../assets/image15.png";
import image16 from "../../assets/image16.png";
import image17 from "../../assets/image17.png";

type CardType = {
  id: string;
  marginTop: string;
  marginLeft: string;
  author: string;
  image: string;
  height: string;
};

export default function ConnexionDecoration() {
  const cards: CardType[] = [
    {
      id: "card1",
      marginTop: "5vh",
      marginLeft: "50px",
      author: "D.Demontis",
      image: image12,
      height: "20vh",
    },
    {
      id: "card2",
      marginTop: "14vh",
      marginLeft: "350px",
      author: "M.Weber",
      image: image13,
      height: "15vh",
    },
    {
      id: "card3",
      marginTop: "5vh",
      marginLeft: "530px",
      author: "M.Weber",
      image: image14,
      height: "15vh",
    },
    {
      id: "card4",
      marginTop: "60vh",
      marginLeft: "80px",
      author: "M.Nowak",
      image: image15,
      height: "15vh",
    },
    {
      id: "card5",
      marginTop: "52vh",
      marginLeft: "180px",
      author: "M.Nowak",
      image: image16,
      height: "20vh",
    },
    {
      id: "card6",
      marginTop: "58vh",
      marginLeft: "450px",
      author: "Van Gogh",
      image: image17,
      height: "20vh",
    },
  ];

  return (
    <ConnexionDecorationRow justify="center" align="middle">
      {cards.map((card: CardType) => {
        return (
          <Card
            key={card.id}
            marginTop={card.marginTop}
            marginLeft={card.marginLeft}
            author={card.author}
            image={card.image}
            height={card.height}
          ></Card>
        );
      })}
      <StyledSlogan>
        Ca va se vendre comme des
        <br />
        petits peintres
      </StyledSlogan>
    </ConnexionDecorationRow>
  );
}

const StyledSlogan = styled.div`
  color: #2d6a4f;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 2rem;
  text-align: center;
  z-index: 1;
`;

const ConnexionDecorationRow = styled(Row)`
  height: 100%;
  width: 100%;
  background: #d8f3dc;
`;
