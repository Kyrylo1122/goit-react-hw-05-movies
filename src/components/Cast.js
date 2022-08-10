import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from './API/Api';
import { Box } from './Box';
import img from './img/images.jpg';

export default function Cast() {
  const { filmId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    getCast(Number(filmId)).then(({ data: { cast } }) => setCast(cast));
  }, [filmId]);
  if (!cast.length) {
    return;
  }
  return (
    <Box as="ul">
      {cast.map(actor => {
        const { name, profile_path, character, id } = actor;
        return (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : img
              }
              alt={name}
              width="150px"
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </Box>
  );
}
