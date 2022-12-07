import { Row } from "antd";
import styled from "styled-components";
import "./styles.css";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Card from "./Card";
import CardNews from "./CardNews";
import { config } from "react-spring";
import Carroussel from "./Carroussel";

export default function Home() {
  let cards = [
    {
      key: uuidv4(),
      content: <CardNews />
    },
    {
      key: uuidv4(),
      content: <CardNews />
    },
    {
      key: uuidv4(),
      content: <CardNews />
    },
    {
      key: uuidv4(),
      content: <CardNews />
    },
    {
      key: uuidv4(),
      content: <CardNews />
    },
    {
      key: uuidv4(),
      content: <CardNews />
    },
    {
      key: uuidv4(),
      content: <CardNews />
    }
  ];

  return (
    <HomeWrapper>
      <Carroussel
        cards={cards}
        height="500px"
        width="90%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  height: 100vh;
  padding-top: 100px;
  padding-top: 150px;
  background: linear-gradient(#d8f3dc, #2d6a4f);
`;

const StyledSloganRow = styled(Row)`
  width: 100%;
  height: 100%;
`;

const StyledSlogan = styled.div`
  color: green;
  font-family: "Lobster", cursive;
  font-size: xx-large;
`;
