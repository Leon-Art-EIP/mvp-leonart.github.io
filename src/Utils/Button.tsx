import styled from "styled-components";

interface ButtonProps {
  text: string;
  color: string;
  background: string;
  borderRadius: string;
  icon?: JSX.Element;
  isLoading?: boolean;
  onClick?(): void;
}

export default function Button(props: ButtonProps) {
  return (
    <StyledButton
      color={props.color}
      background={props.background}
      borderRadius={props.borderRadius}
      grey={props.isLoading}
      onClick={props.onClick}
    >
      {props.icon}
      {props.text}
    </StyledButton>
  );
}

const StyledButton = styled.div<{
  color: string;
  background: string;
  borderRadius: string;
  grey?: boolean;
}>`
  pointer-events: ${(props) => props.grey && "none"};
  font-family: "Montserrat", sans-serif;
  padding: 8px 0px 8px 10px;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  border-radius: ${(props) => props.borderRadius};
  :hover {
    cursor: ${(props) => (props.grey ? "default" : "pointer")};
  }
`;
