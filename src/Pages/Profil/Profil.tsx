import { Col, Row } from "antd";
import styled from "styled-components";
import image from "../../assets/profil_pic.png";

interface ProfilPictureProps {
  marginTop: string;
  marginLeft: string;
  image: string;
  height: string;
}

export default function ProfilPage() {
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
          <ProfilPictureRow>
            <ProfilPicture alt="logo" src={profilPic.image} props={profilPic}></ProfilPicture>
          </ProfilPictureRow>
          <StyledCol span={18}>
            <Name>Uthie-Lisa TEUR</Name>
            <FullRow>
              <StyledCol span={5}>
                <Stat>Posts</Stat>
                <StatValue>300</StatValue>
              </StyledCol>
              <StyledCol span={5}>
                <Stat>Followers</Stat>
                <StatValue>1M+</StatValue>
              </StyledCol>
              <StyledCol span={5}>
                <Stat>Posts</Stat>
                <StatValue>2342</StatValue>
              </StyledCol>
            </FullRow>
          </StyledCol>
        </ProfilBackground>
      </StyledCol>
    </FullRow>
  );
}

const Stat = styled.div`
  text-align: left;
  margin-top: 40px;
  color: #525252;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
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
  margin-top: 20px;
`;