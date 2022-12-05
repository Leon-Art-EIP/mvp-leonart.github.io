import styled from "styled-components";

function App() {
  return (
    <StyledDiv>
      <div>THIS</div>
      <div>IS</div>
      <div>LEON'ART</div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  font-size: 3rem;
  text-align: center;
  color: green;
  background: linear-gradient(to right, blue, white, white, red);
  border: solid;
  border-color: blue;
`;

export default App;
