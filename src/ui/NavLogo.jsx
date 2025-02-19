import { Link } from "react-router-dom";
import styled from "styled-components";

import Logo from "../assets/nav-logo.png";

const StyledDiv = styled.div`
  width: 10%;
`;

function NavLogo() {
  return (
    <StyledDiv>
      <Link to="/">
        <img src={Logo} alt="nav logo" />
      </Link>
    </StyledDiv>
  );
}

export default NavLogo;
