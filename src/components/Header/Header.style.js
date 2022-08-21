import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const NavItem = styled.li`
  :not(:last-child) {
    margin-right: 10px;
  }
`;
export const HeaderLink = styled(NavLink)`
  padding: 10px;
  border-radius: 4px;
  &.active {
    background-color: orange;
    color: white;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    background-color: pink;
  }
`;
