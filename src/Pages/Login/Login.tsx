import { Row, Col } from "antd";
import styled from "styled-components";
import Connexion from "./Connexion";

export default function Login() {
  return (
    <LoginWrapper>
      <Col span={14}>
        <SloganRow></SloganRow>
      </Col>
      <Col span={10}>
        <Connexion></Connexion>
      </Col>
    </LoginWrapper>
  );
}

const LoginWrapper = styled(Row)`
  height: 100vh;
  width: 100vw;
`;

const SloganRow = styled(Row)`
  height: 100%;
  width: 100%;
  background: #d8f3dc;
`;
