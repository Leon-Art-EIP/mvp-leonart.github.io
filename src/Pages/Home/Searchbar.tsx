import { Row, Col } from "antd";
import styled from "styled-components";

export default function Searchbar() {
  return (
    <SearchbarWrapper>
      <FullRow align="middle" justify="center">
        <StyledCol span={6}>
          <StyledInput placeholder="Nom d'utilisateur"></StyledInput>
          {/* <StyledInput type="text" id="searchbar" color="#9C9C9C" background="#F5F5F5" placeholder="Recherche..."> */}
            {/* </StyledInput> */}
        </StyledCol>
      </FullRow>
    </SearchbarWrapper>
  );
}

const SearchbarWrapper = styled(Row)`
  position: absolute;
  z-index: 1;
  min-height: 80px;
  width: 100%;
  backdrop-filter: blur(15px);
  margin-top : 100px;
  margin-left: auto;
  margin-right: auto;
`;

const StyledCol = styled(Col)`
  min-height: 100%;
  width: 100%;
  /* border: solid;
  border-color: red;
  border-width: 1px; */
`;

const FullRow = styled(Row)`
  width: 100%;
  height: 100%;
`;

const StyledInput = styled.input`
  background: #f5f5f5;
  box-shadow: inset -2px -2px 4px #ffffff, inset 2px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  border: none;
  width: 100%;
  max-width: 400px;
  padding: 8px 16px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  margin-bottom: 30px;
  color: #8f8f8f;
  outline: none;
  transition: all 0.3s ease-in-out;
  :focus {
    box-shadow: inset -1px -1px 1px #ffffff,
      inset 1px 1px 1px rgba(0, 0, 0, 0.25);
  }
`;