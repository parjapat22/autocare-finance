import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/nav-logo.png";

const DivStyled = styled.div`
  width: 10%;
`;

function NavLogo() {
  return (
    <DivStyled>
      <Link to="/">
        <img src={Logo} alt="nav logo" />
      </Link>
    </DivStyled>
  );
}

export default NavLogo;
