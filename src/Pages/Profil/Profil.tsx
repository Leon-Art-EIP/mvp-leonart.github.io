import { Col, Row } from "antd";
import styled from "styled-components";
import image from "../../assets/profil_pic.png";
import { ReactPictureGrid } from "react-picture-grid";

interface ProfilPictureProps {
  marginTop: string;
  marginLeft: string;
  image: string;
  height: string;
}

export default function ProfilPage() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1475778057357-d35f37fa89dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      title: "Nature 01",
      description: "This picture is taken from unsplash.com",
    },
    {
      image:
        "https://images.unsplash.com/photo-1502675135487-e971002a6adb?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
      title: "Nature 02",
      description: "This picture is taken from unsplash.com",
    },
    {
      image:
        "https://images.unsplash.com/photo-1501862700950-18382cd41497?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=894&q=80",
      title: "Nature 03",
      description: "This picture is taken from unsplash.com",
    },
    {
      image:
        "https://images.unsplash.com/photo-1532040675891-5991e7e3d0cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      title: "Nature 04",
      description: "This picture is taken from unsplash.com",
    },
    {
      image:
        "https://images.unsplash.com/photo-1532040675891-5991e7e3d0cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      title: "Nature 04",
      description: "This picture is taken from unsplash.com",
    },
    {
      image:
        "https://images.unsplash.com/photo-1532040675891-5991e7e3d0cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      title: "Nature 04",
      description: "This picture is taken from unsplash.com",
    },
    {
      image:
        "https://images.unsplash.com/photo-1532040675891-5991e7e3d0cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      title: "Nature 04",
      description: "This picture is taken from unsplash.com",
    },
    {
      image:
        "https://images.unsplash.com/photo-1532040675891-5991e7e3d0cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      title: "Nature 04",
      description: "This picture is taken from unsplash.com",
    },
    {
      image:
        "https://images.unsplash.com/photo-1532040675891-5991e7e3d0cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      title: "Nature 04",
      description: "This picture is taken from unsplash.com",
    },
    {
      image:
        "https://images.unsplash.com/photo-1532040675891-5991e7e3d0cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      title: "Nature 04",
      description: "This picture is taken from unsplash.com",
    },
    {
      image:
        "https://images.unsplash.com/photo-1532040675891-5991e7e3d0cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      title: "Nature 04",
      description: "This picture is taken from unsplash.com",
    },
    {
      image:
        "https://images.unsplash.com/photo-1475778057357-d35f37fa89dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      title: "Nature 01",
      description: "This picture is taken from unsplash.com",
    },
    {
      image:
        "https://images.unsplash.com/photo-1475778057357-d35f37fa89dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      title: "Nature 01",
      description: "This picture is taken from unsplash.com",
    },
    {
      image:
        "https://images.unsplash.com/photo-1475778057357-d35f37fa89dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      title: "Nature 01",
      description: "This picture is taken from unsplash.com",
    },
    {
      image:
        "https://images.unsplash.com/photo-1475778057357-d35f37fa89dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      title: "Nature 01",
      description: "This picture is taken from unsplash.com",
    },
  ];
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
                <Stat>Sales</Stat>
                <StatValue>2342</StatValue>
              </StyledCol>
            </FullRow>
          </StyledCol>
        </ProfilBackground>
        <GridWrapper>
        <ReactPictureGrid data={data} showTitle />
        </GridWrapper>
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
  height: 15%;
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

const GridWrapper = styled.div`
  padding-top: 1vh;
  width: 100%;
  margin: auto;
`;
