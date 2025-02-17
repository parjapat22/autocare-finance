import { NavLink } from "react-router-dom";
import styled from "styled-components";

const UlStyled = styled.ul`
  display: flex;
  gap: 5rem;
`;

const LiStyled = styled.li`
  display: flex;

  a {
    color: var(--color-text1);
    font-size: 2rem;
    font-weight: bold;
  }

  a:hover {
    color: var(--color-primary);
    text-decoration: none;
  }
`;

function NavMenu() {
  return (
    <nav>
      <UlStyled>
        <LiStyled>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </LiStyled>

        <LiStyled>
          <NavLink to="/invoices">Invoices</NavLink>
        </LiStyled>
      </UlStyled>
    </nav>
  );
}

export default NavMenu;
