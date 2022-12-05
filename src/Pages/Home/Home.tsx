import { Row } from "antd";
import styled from "styled-components";

export default function Home() {
  return (
    <HomeWrapper>
      <StyledSloganRow align="middle" justify="center">
        <StyledSlogan>Ça va se vendre comme des petits peintres !</StyledSlogan>
      </StyledSloganRow>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  height: 100vh;
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
