import { Box } from 'components/Box';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header/Header';
import Home from 'components/Pages/Home';
export default function Layout() {
  return (
    <Box>
      <Header />
      <Home />
      <Outlet />
    </Box>
  );
}
