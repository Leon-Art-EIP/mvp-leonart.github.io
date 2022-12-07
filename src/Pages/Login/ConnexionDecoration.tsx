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
  marginTop: string;
  marginLeft: string;
  author: string;
  image: string;
  width: string;
};

export default function ConnexionDecoration() {
  const cards: CardType[] = [
    {
      marginTop: "100px",
      marginLeft: "50px",
      author: "D.Demontis",
      image: image12,
      width: "200px",
    },
    {
      marginTop: "140px",
      marginLeft: "350px",
      author: "M.Weber",
      image: image13,
      width: "150px",
    },
    {
      marginTop: "100px",
      marginLeft: "530px",
      author: "M.Weber",
      image: image14,
      width: "150px",
    },
    {
      marginTop: "420px",
      marginLeft: "80px",
      author: "M.Nowak",
      image: image15,
      width: "150px",
    },
    {
      marginTop: "360px",
      marginLeft: "180px",
      author: "M.Nowak",
      image: image16,
      width: "200px",
    },
    {
      marginTop: "380px",
      marginLeft: "450px",
      author: "Van Gogh",
      image: image17,
      width: "200px",
    },
  ];

  return (
    <ConnexionDecorationRow align="middle" justify="center">
      {cards.map((card: CardType) => {
        return (
          <Card
            marginTop={card.marginTop}
            marginLeft={card.marginLeft}
            author={card.author}
            image={card.image}
            width={card.width}
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
`;

const ConnexionDecorationRow = styled(Row)`
  height: 100%;
  width: 100%;
  background: #d8f3dc;
`;
