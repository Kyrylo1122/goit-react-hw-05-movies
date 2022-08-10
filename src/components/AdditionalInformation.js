import { Link, Outlet } from 'react-router-dom';
import { Box } from './Box';

export default function AdditionalInformation() {
  return (
    <Box>
      <Box border="1px solid black">
        <p>Additional information</p>
        <Box display="flex" flexDirection="column">
          <Link to="cast">Cast</Link>
          <Link to="review">Review</Link>
        </Box>
      </Box>
      <Outlet />
    </Box>
  );
}
