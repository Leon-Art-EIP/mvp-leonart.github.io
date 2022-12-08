import styled from "styled-components";
import { Row } from "antd";
import Searchbar from "./../../Searchbar/Searchbar";

export default function Feed() {
  return (
    <StyledRow>
      <Searchbar />
    </StyledRow>
  );
}

const StyledRow = styled(Row)`
  width: 100%;
  height: 100%;
`;
