import styled from "styled-components";

import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";

const StyledHeader = styled.header`
  background-color: var(--color-indigo-100);
  margin-inline: auto;
`;

const StyledDiv = styled.div`
  max-width: var(--max-width-desktop);
  margin-inline: auto;
  padding: 0.5rem 0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
`;

function Header() {
  return (
    <StyledHeader>
      <StyledDiv>
        <NavLogo />
        <NavMenu />
      </StyledDiv>
    </StyledHeader>
  );
}

export default Header;
