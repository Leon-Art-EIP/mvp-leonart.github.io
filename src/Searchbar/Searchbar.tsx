import { Row, Col, Switch } from "antd";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { searchInput, tag } from "../SetupRecoil";

export default function Searchbar() {
  const setInput = useSetRecoilState(searchInput);
  const [thetag, setSwitch] = useRecoilState(tag);

  function handleInputOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  console.log(thetag);

  return (
    <SearchbarWrapper align="middle" justify="center">
      <StyledCol span={6}>
        <Row align="middle" justify="center">
          <StyledInput
            placeholder="Rechercher..."
            onChange={handleInputOnChange}
          ></StyledInput>
          <StyledSwitch>
            <StyledSwitchTitle>Projets</StyledSwitchTitle>
            <Switch
              onChange={() => setSwitch(thetag === "art" ? "offer" : "art")}
            />
            <StyledSwitchTitle>Offres</StyledSwitchTitle>
          </StyledSwitch>
        </Row>
      </StyledCol>
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
  margin-top: 10px;
  background: #f5f5f5;
  border-radius: 20px;
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
