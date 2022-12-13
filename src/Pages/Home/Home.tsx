import styled from "styled-components";
import { ReactPictureGrid } from "react-picture-grid";
import { useRecoilValue } from "recoil";
import { searchInput } from "../../SetupRecoil";

export default function Home() {
  const filter = useRecoilValue(searchInput);
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1475778057357-d35f37fa89dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      title: "Nature 01",
      description: "Description de l'image",
    },
    {
      image:
        "https://images.unsplash.com/photo-1502675135487-e971002a6adb?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
      title: "Nature 02",
      description: "Description de l'image",
    },
    {
      image:
        "https://images.unsplash.com/photo-1501862700950-18382cd41497?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=894&q=80",
      title: "Nature 03",
      description: "Description de l'image",
    },
    {
      image:
        "https://images.unsplash.com/photo-1532040675891-5991e7e3d0cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      title: "Nature 04",
      description: "Description de l'image",
    },
    {
      image:
        "https://images.unsplash.com/photo-1532040675891-5991e7e3d0cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      title: "Nature 04",
      description: "Description de l'image",
    },
    {
      image:
        "https://images.unsplash.com/photo-1532040675891-5991e7e3d0cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      title: "Nature 04",
      description: "Description de l'image",
    },
    {
      image:
        "https://images.unsplash.com/photo-1532040675891-5991e7e3d0cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      title: "Nature 04",
      description: "Description de l'image",
    },
    {
      image:
        "https://images.unsplash.com/photo-1532040675891-5991e7e3d0cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      title: "Nature 04",
      description: "Description de l'image",
    },
    {
      image:
        "https://images.unsplash.com/photo-1532040675891-5991e7e3d0cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      title: "Nature 04",
      description: "Description de l'image",
    },
    {
      image:
        "https://images.unsplash.com/photo-1532040675891-5991e7e3d0cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      title: "Nature 04",
      description: "Description de l'image",
    },
    {
      image:
        "https://images.unsplash.com/photo-1532040675891-5991e7e3d0cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      title: "Nature 04",
      description: "Description de l'image",
    },
    {
      image:
        "https://images.unsplash.com/photo-1475778057357-d35f37fa89dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      title: "Nature 01",
      description: "Description de l'image",
    },
    {
      image:
        "https://images.unsplash.com/photo-1475778057357-d35f37fa89dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      title: "Nature 01",
      description: "Description de l'image",
    },
    {
      image:
        "https://images.unsplash.com/photo-1475778057357-d35f37fa89dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      title: "Nature 01",
      description: "Description de l'image",
    },
    {
      image:
        "https://images.unsplash.com/photo-1475778057357-d35f37fa89dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      title: "Nature 01",
      description: "Description de l'image",
    },
  ];

  const filtered = filter ? data.filter(element => element.title.toLowerCase().includes(filter.toLowerCase())) : data;

  return (
    <div>
      <HomeWrapper>
        <GridWrapper>
          <ReactPictureGrid data={filtered} showTitle />
        </GridWrapper>
      </HomeWrapper>
    </div>
  );
}

const HomeWrapper = styled.div`
  background: white;
`;

const GridWrapper = styled.div`
  width: 80%;
  margin: auto;
`;
