import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviewsById } from 'API_Services/moviesdbAPI';
import { Container, Text, Content } from './Reviews.styled';
export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    getReviewsById(movieId)
      .then(({ results }) => setReviews(results))
      .catch(error => setError(error));
  }, [movieId]);
  return (
    <Container>
      {error && (
        <Content>
          Something went wrong. Please, try again in few minutes
        </Content>
      )}
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <Text>Author: {author}</Text>
              <Content>{content}</Content>
            </li>
          ))}
        </ul>
      ) : (
        <Content>We don't have any reviews for this movie</Content>
      )}
    </Container>
  );
}
Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      content: PropTypes.string,
    })
  ),
};
