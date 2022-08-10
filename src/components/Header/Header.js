import { Box } from 'components/Box';
import { HeaderLink, NavItem } from './Header.style';

export default function Header() {
  return (
    <Box as="header" border="normal">
      <Box as="nav">
        <Box as="ul" display="flex">
          <NavItem>
            <HeaderLink to="/">Home</HeaderLink>
          </NavItem>

          <NavItem>
            <HeaderLink to="Movies">Movies</HeaderLink>
          </NavItem>
        </Box>
      </Box>
    </Box>
  );
}
