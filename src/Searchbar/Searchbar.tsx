import { Row, Col } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { MailOutlined } from "@ant-design/icons";

export default function Searchbar() {
  return (
    // <SearchbarWrapper>
      
    //   <StyledCol span ={9}></StyledCol>
    //   <StyledCol span={6}>
    //     <FullRow align="middle" justify="center">
    //       <StyledLeonart>
    //         <StyledSearchBarText>Rechercher ...</StyledSearchBarText>
    //       </StyledLeonart>
    //     </FullRow>
    //   </StyledCol>
    //   <StyledCol span ={9}></StyledCol>
    // </SearchbarWrapper>
    <SearchbarWrapper>
      <FullRow align="middle" justify="center">
        <StyledCol span={6}>
          <StyledInput type="text" id="searchbar" color="#9C9C9C" background="#F5F5F5" placeholder="Recherche...">
            </StyledInput>
        </StyledCol>
      </FullRow>
    </SearchbarWrapper>
  );
}

const SearchbarWrapper = styled(Row)`
  position: absolute;
  z-index: 1;
  min-height: 80px;
  width: 100%;
  backdrop-filter: blur(15px);
  margin-top : 100px;
  margin-left: auto;
  margin-right: auto;
`;

const StyledCol = styled(Col)`
  min-height: 100%;
  width: 100%;
  /* border: solid;
  border-color: red;
  border-width: 1px; */
  border: solid;
  border-width: 1px;
  border-color: red;
`;

const FullRow = styled(Row)`
  width: 100%;
  height: 100%;
`;

const StyledLeonart = styled.div`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 2.5rem;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const StyledSearchBarText = styled.u`
  text-decoration: none;
  color: #9C9C9C;
`;

const StyledArt = styled.u`
  text-decoration: none;
  color: #2e2e2e;
`;

const StyledImg = styled.img`
  margin-left: 10px;
`;

// const StyledButton = styled.div<{ color: string; background: string }>`
//   font-family: "Montserrat", sans-serif;
//   padding: 10px 20px;
//   margin-right: 20px;
//   background: ${(props) => props.background};
//   color: ${(props) => props.color};
//   border-radius: 20px;
//   transition: all 0.1s ease-in-out;
//   filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25))
//     drop-shadow(-2px -2px 4px #ffffff);
//   :hover {
//     cursor: pointer;
//     filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.25))
//       drop-shadow(-1px -1px 1px #ffffff);
//   }
// `;

const StyledInput = styled.input<{ color: string; background: string}>`
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
  width: 89%;
  border: solid;
  border-width: 1px;
  border-color: blue;
`;