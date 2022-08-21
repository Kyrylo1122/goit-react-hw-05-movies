import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const NavLinkItem = styled(NavLink)`
  padding: 10px;
  border-radius: 4px;
  &.active {
    background-color: orange;
  }
`;
