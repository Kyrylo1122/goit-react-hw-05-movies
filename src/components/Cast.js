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
    <Box as="ul" display="flex" flexWrap="wrap" margin="-10px" p={4}>
      {cast.map(actor => {
        const { name, profile_path, character, id } = actor;
        return (
          <Box
            key={id}
            width="150px"
            borderRadius="4px"
            margin="10px"
            boxShadow="0px 0px 50px -28px rgba(66, 68, 90, 1)"
          >
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
          </Box>
        );
      })}
    </Box>
  );
}
