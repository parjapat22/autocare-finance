import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { HiHome } from "react-icons/hi2";
import { HiUserGroup } from "react-icons/hi";
import { HiClipboardDocumentList } from "react-icons/hi2";
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
    color: var(--color-neutral-800);
    display: flex;
    align-items: center;
    gap: 0.5rem;
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
    color: var(--color-neutral-800);
    width: 1.8rem;
    height: 1.8rem;
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
            <HiHome />
            <span>Dashboard</span>
          </StyledNavLink>
        </StyledLi>

        <StyledLi>
          <StyledNavLink to="/customers">
            <HiUserGroup />
            <span>Customers</span>
          </StyledNavLink>
        </StyledLi>

        <StyledLi>
          <StyledNavLink to="/prices">
            <HiClipboardDocumentList />
            <span>Prices</span>
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
