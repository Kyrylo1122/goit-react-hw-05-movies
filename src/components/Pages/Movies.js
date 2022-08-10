import { SearchedMovie } from 'components/API/Api';
import { Box } from 'components/Box';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Movies() {
  const [films, setFilms] = useState([]);
  const [query, setQuery] = useState('');
  useEffect(() => {
    if (query === '') {
      return;
    }
    SearchedMovie(query).then(({ data: { results } }) => setFilms(results));
  }, [query]);
  const handleSubmit = e => {
    e.preventDefault();
    setQuery(e.target.elements.query.value);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <input name="query" type="text"></input>
        <button type="submit">Search</button>
      </form>

      {films && (
        <Box as="ul">
          {films.map(({ id, title }) => (
            <li key={id}>
              <NavLink to={`/Movies/${id}`}>{title}</NavLink>
            </li>
          ))}
        </Box>
      )}
    </Box>
  );
}

// adult: false;
// backdrop_path: '/ZWzkZV8h4Ryhhb2cV49QOxxBds.jpg';
// genre_ids: (2)[(27, 35)];
// id: 14451;
// original_language: 'no';
// original_title: 'Død snø';
// overview: "Eight medical students on a ski trip to Norway discover that Hitler's horrors live on when they come face to face with a battalion of zombie Nazi soldiers intent on devouring anyone unfortunate enough to wander into the remote mountains where they were once sent to die.";
// popularity: 20.67;
// poster_path: '/sfwVo5cZJtO8VyDWTILDt4f69IT.jpg';
// release_date: '2009-01-09';
// title: 'Dead Snow';
// video: false;
// vote_average: 6;
// vote_count: 896;
