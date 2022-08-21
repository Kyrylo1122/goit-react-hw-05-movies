import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import AdditionalInformation from './AdditionalInfo/AdditionalInformation';
import { getMovieById } from './API/Api';
import { Box } from './Box';
import { BsArrow90DegUp } from 'react-icons/bs';
import img from './img/No_Picture.jpg';

export default function MovieDetails() {
  const [film, setFilm] = useState(null);
  const [errorEl, setError] = useState(false);

  const { filmId } = useParams();
  const location = useLocation();
  useEffect(() => {
    getMovieById(Number(filmId))
      .then(res => {
        console.log(res);
        if (res.status !== 200) {
          throw new Error();
        }
        setFilm(res.data);
      })
      .catch(() => {
        setError(true);
      });
  }, [errorEl, filmId]);
  if (errorEl) {
    return <h1>Oops... Sorry but this page does not exist anymore</h1>;
  }
  if (!film) {
    return;
  }
  const { title, vote_average, overview, genres, poster_path } = film;

  return (
    <Box p={4}>
      <Link to={location?.state?.from ?? '/Movies'}>
        {<BsArrow90DegUp />}
        Return{' '}
      </Link>
      <Box
        p={4}
        borderRadius="4px"
        boxShadow="  0px 0px 70px -27px rgba(66, 68, 90, 1)"
      >
        <Box display="flex">
          <Box>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : img
              }
              alt="poster"
              width="200px"
            />
          </Box>
          <Box p={4}>
            <h1>{title}</h1>
            <p>User Score:{(vote_average * 10).toFixed()}%</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <Box as="ul">
              {genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </Box>
          </Box>
        </Box>
        <Box as="section">
          <AdditionalInformation />
        </Box>
      </Box>
    </Box>
  );
}
