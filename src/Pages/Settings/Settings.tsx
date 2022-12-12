import { Col, Row } from "antd";
import styled from "styled-components";
import image from "../../assets/matteo.png";

interface ProfilPictureProps {
  marginTop: string;
  marginLeft: string;
  image: string;
  height: string;
}
export default function Settings() {
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
            <Title>Paramètres</Title>
            <Header>Profil</Header>
            <ProfilPictureRow>
              <ProfilPicture alt="logo" src={profilPic.image} props={profilPic}></ProfilPicture>
            </ProfilPictureRow>
            <Button color="#FFFFFF" background="#2D6A4F">Changer de photo de profil</Button>
            <Name>Uthie-Lisa TEUR</Name>
            <Button color="#FFFFFF" background="#2D6A4F">Changer de nom d'utilisateur</Button>
            <Button color="#FFFFFF" background="#b50000">Désactiver mon compte :(</Button>
          </StyledCol>
        </ProfilBackground>
      </StyledCol>
    </FullRow>
  );
}

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

const FullRow = styled(Row)`
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  color: #2d6a4f;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  text-align: left;
  margin-bottom: 30px;
  margin-top: 20px;
`;

const Header = styled.div`
  color: #2d6a4f;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  text-align: left;
  margin-bottom: 30px;
  margin-top: 20px;
`;

const ProfilBackground = styled(Row)`
  position: relative;
  height: 100%;
  width: 100%;
  background: #f5f5f5;
`;

const StyledCol = styled(Col)`
  min-height: 100%;
  width: 100%;
`;

const ProfilPicture = styled.img<{ props: ProfilPictureProps }>`
  height: ${(props) => props.props.height};
`;

const ProfilPictureRow = styled(Row)`
  height: 200px;
  width: 200px;
  margin-top: 100px;
  margin-top: 20px; 
`;

const Name = styled.div`
  color: #2d6a4f;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  text-align: left;
  margin-bottom: 30px;
  margin-top: 20px;
`;