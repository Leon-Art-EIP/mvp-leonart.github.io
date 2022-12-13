import { Row, Col, Switch } from "antd";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { searchInput } from "../SetupRecoil";

export default function Searchbar() {
  const setInput = useSetRecoilState(searchInput);

  function handleInputOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  return (
    <SearchbarWrapper align="middle" justify="center">
      <Col flex="auto">
        <Row justify="end">
          <StyledSwitch>
            <StyledSwitchTitle>Offres</StyledSwitchTitle>
            <Switch />
          </StyledSwitch>
        </Row>
      </Col>
      <StyledCol span={6}>
        <Row align="middle" justify="center">
          <StyledInput placeholder="Rechercher..." onChange={handleInputOnChange}></StyledInput>
        </Row>
      </StyledCol>
      <Col flex="auto">
        <Row justify="start">
          <StyledSwitch>
            <StyledSwitchTitle>Projets</StyledSwitchTitle>
            <Switch />
          </StyledSwitch>
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

const StyledSwitch = styled(Row)`
  margin: 0px 10px;
`;

const StyledSwitchTitle = styled.div`
  margin: 0px 10px;
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
