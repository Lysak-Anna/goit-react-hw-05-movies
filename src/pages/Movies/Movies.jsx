import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useSearchParams, useLocation } from 'react-router-dom';
import { getMoviesByQuery } from 'API_Services/moviesdbAPI';
import { useState } from 'react';
import { useQuery } from 'react-query';
import useLanguageContext from 'hooks/useLanguageContext';
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
  const { language } = useLanguageContext();
  const { isError } = useQuery(
    ['searchMovie', keyWord, language],
    async () => {
      const { data } = await getMoviesByQuery(keyWord, language);
      setMovies(data.results);
    },
    {
      enabled: !!keyWord,
    }
  );

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
      {isError &&
        toast.error('Something went wrong. Please, try again in few minutes')}
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
