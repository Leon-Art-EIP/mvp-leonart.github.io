import { EuroOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import styled from "styled-components";

export default function Publier() {
  return (
    <ParentRow align="middle" justify="center">
      <PublierWrapper span={16}>
        <FullRow justify="center">
          <InputZone span={18}>
            <Row>
              <Col span={18}>
                <Row justify="start">
                  <div>Ajouter une image</div>
                </Row>
              </Col>
              <Col span={6}>
                <Row justify="end">
                  <StyledPlusCircleOutlined />
                </Row>
              </Col>
            </Row>
          </InputZone>
        </FullRow>
        <FullRow justify="center">
          <InputZone span={18}>
            <FullRow>
              <TextZone
                flex="auto"
                customPadding="10px 20px"
                customMargin="0px"
              >
                Titre
              </TextZone>
            </FullRow>
            <FullRow>
              <TextZone
                flex="auto"
                customPadding="10px 20px 100px 20px"
                customMargin="15px 0px 0px 0px"
              >
                Description
              </TextZone>
            </FullRow>
            <FullRow>
              <TextZone
                flex="auto"
                customPadding="10px 20px"
                customMargin="15px 0px 0px 0px"
              >
                Tags
              </TextZone>
            </FullRow>
          </InputZone>
        </FullRow>
        <FullRow justify="center">
          <Col span={18}>
            <Row>
              <InputZone span={8}>
                <Row>
                  <Col span={18}>
                    <Row justify="start">
                      <div>Prix</div>
                    </Row>
                  </Col>
                  <Col span={6}>
                    <Row justify="end">
                      <StyledEuroOutlined />
                    </Row>
                  </Col>
                </Row>
              </InputZone>
            </Row>
          </Col>
        </FullRow>
        <FullRow justify="center">
          <Col span={18}>
            <FullRow justify="end">
              <StyledButton color="#828282" background="#F0EFEF">
                Retour
              </StyledButton>
              <StyledButton color="#FFFDFD" background="#2D6A4F">
                Publier
              </StyledButton>
            </FullRow>
          </Col>
        </FullRow>
      </PublierWrapper>
    </ParentRow>
  );
}

const StyledButton = styled.div<{ color: string; background: string }>`
  font-family: "Montserrat", sans-serif;
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  margin-bottom: 10px;
  padding: 10px 15px;
  mix-blend-mode: normal;
  filter: drop-shadow(-4px -4px 10px #ffffff)
    drop-shadow(4px 4px 5px rgba(0, 0, 0, 0.25));
  border-radius: 20px;
  width: 100px;
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
  :hover {
    cursor: pointer;
  }
`;

const TextZone = styled(Col)<{ customPadding: string; customMargin: string }>`
  padding: ${(props) => props.customPadding};
  margin: ${(props) => props.customMargin};
  border: solid;
  border-width: 1px;
  border-color: #0000004d;
  border-radius: 20px;
  color: #828282;
`;

const ParentRow = styled(Row)`
  background: #ecececae;
`;

const FullRow = styled(Row)`
  width: 100%;
`;

const PublierWrapper = styled(Col)`
  background: #f0efef;
  border-radius: 20px;
  width: 700px;
  margin: 20px 0px;
  box-shadow: inset -4px -4px 10px rgba(0, 0, 0, 0.25),
    inset 4px 4px 5px #ffffff;
`;

const InputZone = styled(Col)`
  mix-blend-mode: normal;
  box-shadow: inset -4px -4px 10px #ffffff,
    inset 4px 4px 5px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  background: #f0efef;
  padding: 15px 25px;
  font-family: "Montserrat", sans-serif;
  margin: 10px 0px;
  color: #828282;
  :hover {
    cursor: pointer;
  }
`;

const StyledPlusCircleOutlined = styled(PlusCircleOutlined)`
  font-size: 1.2rem;
`;

const StyledEuroOutlined = styled(EuroOutlined)`
  font-size: 1.2rem;
`;
