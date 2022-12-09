import { Row } from "antd";
import styled from "styled-components";

export default function Parameters() {
  return (
    <ParametersWrapper align="middle" justify="center">
      <StyledDiv>C'est les paramètres</StyledDiv>
    </ParametersWrapper>
  );
}

const ParametersWrapper = styled(Row)`
  height: ${window.innerHeight - 80 + "px"};
  width: 100%;
`;

const StyledDiv = styled.div`
  font-size: 1.4rem;
`;
