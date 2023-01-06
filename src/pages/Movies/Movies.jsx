import PropTypes from 'prop-types';
import { useSearchParams, useLocation } from 'react-router-dom';
import { getMoviesByQuery } from 'API_Services/moviesdbAPI';
import { useState, useEffect } from 'react';
import {
  Container,
  Input,
  Button,
  Icon,
  StyledLink,
  Item,
} from './Movies.styled';
export default function Movies() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const keyWord = searchParams.get('keyWord');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (keyWord === null || keyWord === '') {
      return;
    }
    getMoviesByQuery(keyWord)
      .then(({ results }) => setMovies(results))
      .catch(error => setError(error));
  }, [keyWord]);

  function onSubmitHandler(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setSearchParams({ keyWord: form.elements.keyWord.value });
    form.reset();
  }
  return (
    <Container>
      <form onSubmit={onSubmitHandler}>
        <Input
          type="text"
          name="keyWord"
          placeholder="Enter movie name"
        ></Input>
        <Button>
          <Icon />
        </Button>
      </form>
      {error && <p>Something went wrong. Please, try again in few minutes</p>}
      {movies.length > 0 && (
        <ul>
          {movies.map(({ title, id }) => (
            <Item key={id}>
              <StyledLink to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </StyledLink>
            </Item>
          ))}
        </ul>
      )}
    </Container>
  );
}
Movies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};
