import Layout from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import MovieDetails from './MovieDetails';

import Movies from './Pages/Movies';
import { Box } from './Box';
import { lazy } from 'react';

const CastLazy = lazy(() => import('./Cast'));
const ReviewLazy = lazy(() => import('./Review'));

export const App = () => {
  return (
    <Box>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Movies/:filmId" element={<MovieDetails />}>
            <Route path="cast" element={<CastLazy />} />
            <Route path="review" element={<ReviewLazy />} />
          </Route>

          <Route path="Movies" element={<Movies />} />
        </Route>
      </Routes>
    </Box>
  );
};
