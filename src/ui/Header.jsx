import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";
import styled from "styled-components";

const HeaderStyled = styled.header`
  background-color: var(--color-card1);
  margin-inline: auto;
`;

const DivStyled = styled.div`
  max-width: var(--max-width-desktop);
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
  padding: 0.5rem 0rem;
`;

function Header() {
  return (
    <HeaderStyled>
      <DivStyled>
        <NavLogo />
        <NavMenu />
      </DivStyled>
    </HeaderStyled>
  );
}

export default Header;
