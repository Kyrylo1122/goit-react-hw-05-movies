import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReview } from './API/Api';
import { Box } from './Box';

export default function Review() {
  const { filmId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getReview(filmId).then(({ data: { results } }) => {
      setReviews(results);
    });
  }, [filmId]);

  return (
    <>
      {reviews.length ? (
        <Box as="ul">
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h2>Author: {author}</h2>
              <p>{content}</p>
            </li>
          ))}
        </Box>
      ) : (
        <h1>There is no reviews</h1>
      )}
    </>
  );
}
