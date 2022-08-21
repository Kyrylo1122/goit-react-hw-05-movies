import { SearchedMovie } from 'components/API/Api';
import { Box } from 'components/Box';
import { useEffect, useState } from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [films, setFilms] = useState([]);
  const [searchParam, setSearchParams] = useSearchParams();
  const location = useLocation();

  const filterParam = searchParam.get('filter') ?? '';
  useEffect(() => {
    if (filterParam === '') {
      return;
    }
    SearchedMovie(filterParam).then(({ data: { results } }) =>
      setFilms(results)
    );
  }, [filterParam]);

  const handleChange = e => {
    const { value } = e.target;
    setSearchParams(value !== '' ? { filter: value } : {});
  };

  return (
    <Box>
      <input type="text" value={filterParam} onChange={handleChange}></input>

      {films && (
        <Box as="ul">
          {films.map(({ id, title }) => (
            <li key={id}>
              <NavLink to={`/Movies/${id}`} state={{ from: location }}>
                {title}
              </NavLink>
            </li>
          ))}
        </Box>
      )}
    </Box>
  );
}
