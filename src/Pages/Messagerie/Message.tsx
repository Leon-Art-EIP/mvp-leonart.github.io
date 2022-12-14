import { Col, Row } from "antd";
import styled from "styled-components";
import { ContactType } from "./Contact";

interface MessageProps {
  contacts: ContactType[];
  selected: string;
}

export default function Message({ contacts, selected }: MessageProps) {
  for (const contact of contacts) {
    if (contact.name === selected) {
      return (
        <>
          <Row>
            <Col span={12}>
              <Row justify="start">
                <StyledMessage background="#f0efef" color="black">
                  {contact.sent[0]}
                </StyledMessage>
              </Row>
            </Col>
            <Col span={12}></Col>
          </Row>
          <Row>
            <Col span={12}></Col>
            <Col span={12}>
              <Row justify="end">
                <StyledMessage background="#2D6A4F" color="white" end>
                  {contact.received[0]}<br></br>{contact.received[0]}
                </StyledMessage>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Row justify="start">
                <StyledMessage background="#f0efef" color="black">
                {contact.sent[1]}
                </StyledMessage>
              </Row>
            </Col>
            <Col span={12}></Col>
          </Row>
          <Row>
            <Col span={12}></Col>
            <Col span={12}>
              <Row justify="end">
                <StyledMessage background="#2D6A4F" color="white" end>
                {contact.received[1]}
                </StyledMessage>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Row justify="start">
                <StyledMessage background="#f0efef" color="black">
                {contact.sent[2]}<br></br>{contact.sent[2]}
                </StyledMessage>
              </Row>
            </Col>
            <Col span={12}></Col>
          </Row>
          <Row>
            <Col span={12}></Col>
            <Col span={12}>
              <Row justify="end">
                <StyledMessage background="#2D6A4F" color="white" end>
                {contact.received[2]}
                </StyledMessage>
              </Row>
            </Col>
          </Row>
        </>
      );
    }
  }
  return <></>;
}

const StyledMessage = styled.div<{
  background: string;
  color: string;
  end?: boolean;
}>`
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  border-radius: 20px;
  mix-blend-mode: normal;
  filter: drop-shadow(-4px -4px 10px #ffffff)
    drop-shadow(4px 4px 5px rgba(0, 0, 0, 0.25));
  margin: 0px 20px;
  padding: 10px 20px;
  text-align: ${(props) => (props.end ? "end" : "start")};
`;
