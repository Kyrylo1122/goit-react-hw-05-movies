import { Outlet } from 'react-router-dom';
import { Box } from '../Box';
import { NavLinkItem } from './AdditionalInformation.style';

export default function AdditionalInformation() {
  return (
    <Box>
      <Box>
        <h3>Additional information</h3>
        <Box display="flex">
          <NavLinkItem to="cast">Cast</NavLinkItem>
          <NavLinkItem to="review">Review</NavLinkItem>
        </Box>
      </Box>
      <Outlet />
    </Box>
  );
}
