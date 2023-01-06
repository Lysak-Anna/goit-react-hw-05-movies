import PropTypes from 'prop-types';
import { Title, Container, StyledLink, Icon, Item } from './Home.styled';
import { useState, useEffect } from 'react';
import { getMovies } from 'API_Services/moviesdbAPI';
export default function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMovies()
      .then(({ results }) => setMovies(results))
      .catch(error => setError(error));
  }, []);
  return (
    <Container>
      <Title>Trending today</Title>
      {error && <p>Something went wrong. Please, try again in few minutes</p>}
      {movies.length > 0 && (
        <ul>
          {movies.map(({ id, title }) => (
            <Item key={id}>
              <Icon />
              <StyledLink to={`/movies/${id}`}>{title}</StyledLink>
            </Item>
          ))}
        </ul>
      )}
    </Container>
  );
}
Home.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};
