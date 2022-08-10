import { Box } from 'components/Box';
import { getTrending } from 'components/API/Api';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Home() {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    try {
      getTrending().then(({ results }) => setTrending(results));
    } catch (error) {
      console.log(error);
    }
  }, []);
  if (!trending) {
    return;
  }
  return (
    <Box>
      <h1>Trending today</h1>
      <Box as="ul">
        {trending.map(({ id, name, title }) => (
          <li key={id}>
            <NavLink to={`Movies/${id}`}>{title ? title : name}</NavLink>
          </li>
        ))}
      </Box>
    </Box>
  );
}
