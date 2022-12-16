import { Col, Row } from "antd";
import styled from "styled-components";
import image from "../../assets/matteo.png";
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
        "https://images.unsplash.com/photo-1670349928042-519fee6e11de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
      title: "Nature 01",
      description: "This picture is taken from unsplash.com",
    },
    {
      image:
        "https://images.unsplash.com/photo-1558444510-2bacddde13bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      title: "Nature 02",
      description: "This picture is taken from unsplash.com",
    },
    {
      image:
        "https://images.unsplash.com/photo-1560611942-a56ce2956f1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNvdXRoJTIwZnJhbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      title: "Nature 03",
      description: "This picture is taken from unsplash.com",
    },
    {
      image:
        "https://images.unsplash.com/photo-1499002238440-d264edd596ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNvdXRoJTIwZnJhbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      title: "Nature 04",
      description: "This picture is taken from unsplash.com",
    },
    {
      image:
        "https://images.unsplash.com/photo-1557505956-eb3d48eb0223?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
      title: "Nature 04",
      description: "This picture is taken from unsplash.com",
    },
    {
      image:
        "https://images.unsplash.com/photo-1560612137-e423867d48d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNvdXRoJTIwZnJhbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      title: "Nature 602",
      description: "This picture is taken from unsplash.com",
    },
    {
      image:
        "https://images.unsplash.com/photo-1597319190485-a2805361746c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      title: "Nature 38",
      description: "This picture is taken from unsplash.com",
    },
    {
      image:
        "https://images.unsplash.com/photo-1604440401661-8f6f07c285a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=663&q=80",
      title: "Nature 22",
      description: "This picture is taken from unsplash.com",
    },
    {
      image:
        "https://images.unsplash.com/photo-1563177974-c89b7382147b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHNvdXRoJTIwZnJhbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      title: "Nature 66",
      description: "This picture is taken from unsplash.com",
    },
    {
      image:
        "https://images.unsplash.com/photo-1586773611131-daae9fb00884?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Nature 67",
      description: "This picture is taken from unsplash.com",
    }
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
            <Name>Guillaume Paris</Name>
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
  height: 20%;
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
  padding-top: 2vh;
  width: 100%;
  margin: auto;
`;
