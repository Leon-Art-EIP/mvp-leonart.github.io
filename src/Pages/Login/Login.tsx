import { Row, Col } from "antd";
import styled from "styled-components";
import Connexion from "./Connexion";
import ConnexionDecoration from "./ConnexionDecoration";

export default function Login() {
  return (
    <LoginWrapper>
      <Col span={14}>
        <ConnexionDecoration></ConnexionDecoration>
      </Col>
      <Col span={10}>
        <Connexion></Connexion>
      </Col>
    </LoginWrapper>
  );
}

const LoginWrapper = styled(Row)`
  height: ${(window.innerHeight - 80) + "px"};
`;
