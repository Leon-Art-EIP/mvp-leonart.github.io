import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { searchInput, tag } from "../../SetupRecoil";
import { Col, Modal, Row, Tooltip } from "antd";
import { useEffect, useState } from "react";

type PublicationType = {
  id: string;
  image: string;
  title: string;
  description: string;
  prix: string;
  type: string;
};

export default function Home() {
  const filter = useRecoilValue(searchInput);
  const defaultPubData: PublicationType[] = [];
  const [data, setData] = useState(defaultPubData);
  const thetag = useRecoilValue(tag);

  async function fetchApi(n: number) {
    let res = await fetch(
      "https://collectionapi.metmuseum.org/public/collection/v1/objects/" +
        n.toString()
    );
    let data = await res.json();
    let newobject: PublicationType = {
      id: n.toString(),
      image: data.primaryImage,
      title: data?.creditLine ?? "titre inconnu",
      description: data?.artistDisplayName ?? "Artiste inconnu",
      prix: (Math.random() * 1000).toString(),
      type: Math.random() * 10 > 5 ? "art" : "offer",
    };
    console.log(newobject);
    setData((data) => [...data, newobject]);
  }

  useEffect(() => {
    let numbers = [
      10923, 25965, 45321, 34738, 51234, 61234, 23721, 11893, 29645, 29453,
      16114, 13453, 61342, 57435, 34254,
    ];
    for (const n of numbers) {
      fetchApi(n);
    }
  }, []);

  const filtered = filter
    ? data
        .filter(
          (element) => element.type.toLowerCase() === thetag.toLowerCase()
        )
        .filter((element) =>
          element.title.toLowerCase().includes(filter.toLowerCase())
        )
    : data.filter(
        (element) => element.type.toLowerCase() === thetag.toLowerCase()
      );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [infoImageOpen, setInfoImageOpen] = useState({
    image: "",
    titre: "",
    prix: "",
    desc: "",
  });

  const showModal = (
    image: string,
    titre: string,
    prix: string,
    desc: string
  ) => {
    setIsModalOpen(true);
    setInfoImageOpen({ image, titre, prix, desc });
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
                <Tooltip
                  key={element.id}
                  title={element.prix + " - " + element.description}
                >
                  <PublicationCol
                    span={7}
                    onClick={() =>
                      showModal(
                        element.image,
                        element.title,
                        element.prix,
                        element.description
                      )
                    }
                  >
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
            title={
              infoImageOpen.titre +
              " - " +
              infoImageOpen.desc +
              " - " +
              infoImageOpen.prix
            }
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
