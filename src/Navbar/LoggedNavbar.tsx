import { Row } from "antd";
import styled from "styled-components";

export default function LoggedNavbar() {
  return (
    <NavbarWrapper>
      <div>LoggedInNavbar</div>
    </NavbarWrapper>
  );
}

const NavbarWrapper = styled(Row)`
  position: absolute;
  z-index: 2;
  background: #f5f5f5bf;
  min-height: 80px;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(15px);
`;
