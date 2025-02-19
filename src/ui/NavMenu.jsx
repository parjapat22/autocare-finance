import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { HiOutlineHome } from "react-icons/hi2";
import { FaFileInvoiceDollar } from "react-icons/fa";

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  gap: 5rem;
`;

const StyledLi = styled.li`
  display: flex;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-text1);
    font-size: 2rem;
    font-weight: bold;
    transition: var(--transition);
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-primary);
    text-decoration: none;
  }

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-text1);
    transition: var(--transition);
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-primary);
  }
`;

function NavMenu() {
  return (
    <nav>
      <StyledUl>
        <StyledLi>
          <StyledNavLink to="/dashboard">
            <HiOutlineHome />
            <span>Dashboard</span>
          </StyledNavLink>
        </StyledLi>

        <StyledLi>
          <StyledNavLink to="/invoices">
            <FaFileInvoiceDollar />
            <span>Invoices</span>
          </StyledNavLink>
        </StyledLi>
      </StyledUl>
    </nav>
  );
}

export default NavMenu;
