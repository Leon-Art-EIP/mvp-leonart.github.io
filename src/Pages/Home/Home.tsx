import styled from "styled-components";
import Searchbar from "../../Searchbar/Searchbar";
import { ReactPictureGrid } from "react-picture-grid";

export default function Home() {
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
  return (
    <div>
      <Searchbar />
      <HomeWrapper>
        <GridWrapper>
          <ReactPictureGrid data={data} showTitle />
        </GridWrapper>
      </HomeWrapper>
    </div>
  );
}

const HomeWrapper = styled.div`
  background: linear-gradient(#d8f3dc, #2d6a4f);
`;

const GridWrapper = styled.div`
  padding-top: 18vh;
  width: 55%;
  margin: auto;
`;
