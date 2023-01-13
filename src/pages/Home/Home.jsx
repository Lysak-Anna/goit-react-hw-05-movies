import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Title, Container, StyledLink, Icon, Item } from './Home.styled';
import { useState } from 'react';
import { getMovies } from 'API_Services/moviesdbAPI';
import { useQuery } from 'react-query';
import useLanguageContext from 'hooks/useLanguageContext';
export default function Home() {
  const [movies, setMovies] = useState([]);
  const { language } = useLanguageContext();
  const { isError } = useQuery(['movies', language], async () => {
    const { results } = await getMovies(language);
    setMovies(results);
  });
  return (
    <Container>
      <Title>{language === 'uk' ? 'ТОП-20 сьогодні' : 'Trending today'}</Title>
      {isError &&
        toast.error('Something went wrong. Please, try again in few minutes')}
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
