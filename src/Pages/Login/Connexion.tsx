import styled from "styled-components";

// TODO :
// 1e chose à faire : aligner verticalment les inputs

export default function Connexion() {
  return (
    <>
      <Title>Connexion</Title>
      <Inputs>
        <StyledInput placeholder="Nom d'utilisateur"></StyledInput>
        <StyledInput placeholder="Mot de passe"></StyledInput>
      </Inputs>
    </>
  );
}

const Title = styled.div`
  color: #2d6a4f;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledInput = styled.input`
  border-radius: 10px;
  margin-top: 10px;
`;
