import { Row, Col, Checkbox } from "antd";
import styled from "styled-components";

export default function Searchbar() {
  return (
    <SearchbarWrapper align="middle" justify="center">
      <Col span={2}>
        <Row justify="end">
          <StyledCheckbox>Offres</StyledCheckbox>
        </Row>
      </Col>
      <StyledCol span={6}>
        <Row align="middle" justify="center">
          <StyledInput placeholder="Rechercher..."></StyledInput>
        </Row>
      </StyledCol>
      <Col span={2}>
        <Row justify="start">
          <StyledCheckbox>Projets</StyledCheckbox>
        </Row>
      </Col>
    </SearchbarWrapper>
  );
}

const SearchbarWrapper = styled(Row)`
  z-index: 1;
  width: 100%;
  margin: 10px 0px;
  /* border: solid;
  border-color: red;
  border-width: 1px; */
`;

const StyledCheckbox = styled(Checkbox)`
  margin-left: 10px;
  margin-right: 10px;
  padding: 2px 5px;
  background: #7575755d;
  color: white;
  border-radius: 2px;
`;

const StyledCol = styled(Col)`
  width: 100%;
  /* border: solid;
  border-color: red;
  border-width: 1px; */
`;

const StyledInput = styled.input`
  background: #f5f5f5;
  box-shadow: inset -2px -2px 4px #ffffff, inset 2px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  border: none;
  max-width: 400px;
  width: 100%;
  padding: 8px 16px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  color: #8f8f8f;
  outline: none;
  transition: all 0.3s ease-in-out;
  :focus {
    box-shadow: inset -1px -1px 1px #ffffff,
      inset 1px 1px 1px rgba(0, 0, 0, 0.25);
  }
`;
