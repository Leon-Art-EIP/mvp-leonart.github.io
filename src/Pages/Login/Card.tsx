import styled from "styled-components";

interface CardProps {
  marginTop: string;
  marginLeft: string;
  author: string;
  image: string;
  width: string;
}

export default function Card(props: CardProps) {
  return (
    <CardWrapper marginTop={props.marginTop} marginLeft={props.marginLeft}>
      <Title>{props.author}</Title>
      <StyledImg alt={props.image} src={props.image} width={props.width}></StyledImg>
    </CardWrapper>
  );
}

const StyledImg = styled.img<{ width: string }>`
  width: ${(props) => props.width};
`;

const CardWrapper = styled.div<{ marginTop: string; marginLeft: string }>`
  top: 0;
  left: 0;
  margin-top: ${(props) => props.marginTop};
  margin-left: ${(props) => props.marginLeft};
  position: absolute;
  background: #f5f5f5;
  border-radius: 20px;
`;

const Title = styled.div`
  color: #848484;
  font-family: "Montserrat";
  font-style: normal;
  font-size: 1rem;
  margin: 5px 0px 0px 15px;
`;
