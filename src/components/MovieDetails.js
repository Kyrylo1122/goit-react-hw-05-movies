import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AdditionalInformation from './AdditionalInformation';
import { getMovieById } from './API/Api';
import { Box } from './Box';
import img from './img/No_Picture.jpg';

export default function MovieDetails() {
  const [film, setFilm] = useState(null);
  const { filmId } = useParams();
  useEffect(() => {
    getMovieById(Number(filmId)).then(({ data }) => {
      setFilm(data);
    });
  }, [filmId]);
  if (!film) {
    return;
  }
  const { title, vote_average, overview, genres, poster_path } = film;
  return (
    <Box p={3} border="1px solid brown">
      <Link to="/Movies">Go back</Link>
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
        <Box>
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
  );
}
