import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import image from "../../assets/profil_pic.png";

interface ProfilPictureProps {
  marginTop: string;
  marginLeft: string;
  image: string;
  height: string;
}


export default function Publier() {
  const profilPic: ProfilPictureProps = {
    marginTop: "16vh",
    marginLeft: "50px",
    image: image,
    height: "20vh",
  }
  return (
    <FullRow>
      <StyledCol span={2}></StyledCol>
      <StyledCol span={20}>
        <ProfilBackground>
          <StyledCol span={1}></StyledCol>
          <StyledCol span={18}>
            <Name>Nouvelle publication</Name>
            <Button color="#FFFFFF" background="#2D6A4F">Importer une image</Button>
            <Button color="#FFFFFF" background="#2D6A4F">Followers</Button>
            <Button color="#FFFFFF" background="#2D6A4F">Posts</Button>
          </StyledCol>
        </ProfilBackground>
      </StyledCol>
    </FullRow>
  );
}

const StyledLink = styled(Link)`
  color: #2d6a4f;
  text-decoration: underline;
  :hover {
    color: #2d6a4f;
    text-decoration: underline;
  }
`;

const Button = styled.div<{ color: string; background: string }>`
  font-family: "Montserrat", sans-serif;
  padding: 10px 20px;
  margin-right: 20px;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  border-radius: 20px;
  transition: all 0.1s ease-in-out;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25))
    drop-shadow(-2px -2px 4px #ffffff);
  :hover {
    cursor: pointer;
    filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.25))
      drop-shadow(-1px -1px 1px #ffffff);
  }
  margin-bottom: 10px;
`;

const StatValue = styled.div`
  text-align: left;
  margin-top: 10px;
  margin-bottom: 40px;
  color: #525252;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
`;

const FullRow = styled(Row)`
  width: 100%;
  height: 100%;
`;

const Name = styled.div`
  color: #2d6a4f;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  text-align: left;
  margin-bottom: 30px;
  margin-top: 100px;
`;

const FullInput = styled.input`
  background: #f5f5f5;
  box-shadow: inset -2px -2px 4px #ffffff, inset 2px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  border: none;
  width: 100%;
  max-width: 400px;
  padding: 8px 16px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  margin-bottom: 30px;
  color: #8f8f8f;
  outline: none;
  transition: all 0.3s ease-in-out;
  :focus {
    box-shadow: inset -1px -1px 1px #ffffff,
      inset 1px 1px 1px rgba(0, 0, 0, 0.25);
  }
`;

const ProfilBackground = styled(Row)`
  position: relative;
  height: 100%;
  width: 100%;
  pargin-top: 100px;
  background: #f5f5f5;
`;

const StyledCol = styled(Col)`
  min-height: 100%;
  width: 100%;
`;

const StyledButton = styled.div<{ color: string; background: string }>`
  font-family: "Montserrat", sans-serif;
  padding: 10px 20px;
  margin-right: 20px;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  border-radius: 20px;
  transition: all 0.1s ease-in-out;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25))
    drop-shadow(-2px -2px 4px #ffffff);
  :hover {
    cursor: pointer;
    filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.25))
      drop-shadow(-1px -1px 1px #ffffff);
  }
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width = 100%;
`;

const ProfilPicture = styled.img<{ props: ProfilPictureProps }>`
  height: ${(props) => props.props.height};
`;

const ProfilPictureRow = styled(Row)`
  height: 200px;
  width: 200px;
  margin-top: 100px;
`;