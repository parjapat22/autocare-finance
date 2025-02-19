import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";
import styled from "styled-components";

const StyledHeader = styled.header`
  margin-inline: auto;
  background-color: var(--color-card1);
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
