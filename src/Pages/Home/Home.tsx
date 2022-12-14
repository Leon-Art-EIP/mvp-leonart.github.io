import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { searchInput } from "../../SetupRecoil";
import { Col, Modal, Row, Tooltip } from "antd";
import { useState } from "react";

export default function Home() {
  const filter = useRecoilValue(searchInput);
  const data = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1475778057357-d35f37fa89dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      title: "Nature 01",
      description: "Description de l'image Nature 01",
      prix: "1 000 000 de dollars canadiens",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1502675135487-e971002a6adb?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
      title: "Nature 02",
      description: "Description de l'image Nature 02",
      prix: "10 euros",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1501862700950-18382cd41497?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=894&q=80",
      title: "Nature 03",
      description: "Description de l'image Nature 03",
      prix: "1 000 000 de dollars canadiens",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1532040675891-5991e7e3d0cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      title: "Nature 04",
      description: "Description de l'image Nature 04",
      prix: "10 euros",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1532040675891-5991e7e3d0cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      title: "Nature 04",
      description: "Description de l'image Nature 04",
      prix: "1 000 000 de dollars canadiens",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1532040675891-5991e7e3d0cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      title: "Nature 04",
      description: "Description de l'image Nature 04",
      prix: "10 euros",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1532040675891-5991e7e3d0cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      title: "Nature 04",
      description: "Description de l'image Nature 04",
      prix: "1 000 000 de dollars canadiens",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1532040675891-5991e7e3d0cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      title: "Nature 04",
      description: "Description de l'image Nature 04",
      prix: "10 euros",
    },
    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1532040675891-5991e7e3d0cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      title: "Nature 04",
      description: "Description de l'image Nature 04",
      prix: "1 000 000 de dollars canadiens",
    },
    {
      id: 10,
      image:
        "https://images.unsplash.com/photo-1532040675891-5991e7e3d0cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      title: "Nature 04",
      description: "Description de l'image Nature 04",
      prix: "10 euros",
    },
    {
      id: 11,
      image:
        "https://images.unsplash.com/photo-1532040675891-5991e7e3d0cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      title: "Nature 04",
      description: "Description de l'image Nature 04",
      prix: "1 000 000 de dollars canadiens",
    },
    {
      id: 12,
      image:
        "https://images.unsplash.com/photo-1475778057357-d35f37fa89dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      title: "Nature 01",
      description: "Description de l'image Nature 01",
      prix: "10 euros",
    },
    {
      id: 13,
      image:
        "https://images.unsplash.com/photo-1475778057357-d35f37fa89dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      title: "Nature 01",
      description: "Description de l'image Nature 01",
      prix: "1 000 000 de dollars canadiens",
    },
    {
      id: 14,
      image:
        "https://images.unsplash.com/photo-1475778057357-d35f37fa89dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      title: "Nature 01",
      description: "Description de l'image Nature 01",
      prix: "10 euros",
    },
    {
      id: 15,
      image:
        "https://images.unsplash.com/photo-1475778057357-d35f37fa89dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      title: "Nature 01",
      description: "Description de l'image Nature 01",
      prix: "1 000 000 de dollars canadiens",
    },
  ];

  const filtered = filter
    ? data.filter((element) =>
        element.title.toLowerCase().includes(filter.toLowerCase())
      )
    : data;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [infoImageOpen, setInfoImageOpen] = useState({image: "", titre: "", prix: "", desc: ""});

  const showModal = (image: string, titre: string, prix: string, desc: string) => {
    setIsModalOpen(true);
    setInfoImageOpen({image, titre, prix, desc});
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <HomeWrapper>
        <GridWrapper>
          <Row justify="space-around">
            {filtered.map((element) => {
              return (
                <Tooltip key={element.id} title={element.prix + " - " + element.description}>
                  <PublicationCol span={7} onClick={() => showModal(element.image, element.title, element.prix, element.description)}>
                    <PublicationTitle>{element.title}</PublicationTitle>
                    <StyledImg
                      alt="publication"
                      src={element.image}
                    ></StyledImg>
                    <div>{element.description}</div>
                  </PublicationCol>
                </Tooltip>
              );
            })}
          </Row>
          <Modal
            title={infoImageOpen.titre + " - " + infoImageOpen.desc + " - " + infoImageOpen.prix}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <StyledImg alt="publication" src={infoImageOpen.image}></StyledImg>
          </Modal>
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
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 300px;
`;

const PublicationCol = styled(Col)`
  padding: 10px;
  margin: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  transition: transform 0.4s;
  :hover {
    cursor: pointer;
    transform: scale(1.05);
    transform-origin: 50% 50%;
  }
`;

const PublicationTitle = styled.div`
  font-family: "Montserrat", sans-serif;
`;
