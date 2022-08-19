import Home from './Pages/Home';
import Layout from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import MovieDetails from './MovieDetails';
import Cast from './Cast';
import Review from './Review';
import Movies from './Pages/Movies';
import { Box } from './Box';

export const App = () => {
  return (
    <Box>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route path="/" element={<Home />}></Route> */}
          <Route path="Movies/:filmId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="review" element={<Review />} />
          </Route>
          <Route path="Movies" element={<Movies />} />
        </Route>
      </Routes>
    </Box>
  );
};
