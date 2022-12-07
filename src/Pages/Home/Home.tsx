import styled from "styled-components";
import Searchbar from "../../Searchbar/Searchbar";

export default function Home() {
  return (
    <HomeWrapper>
      <Searchbar />
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  height: 100vh;
  background: linear-gradient(#d8f3dc, #2d6a4f);
`;
