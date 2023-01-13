import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { getInfoById } from 'API_Services/moviesdbAPI';
import { useQuery } from 'react-query';
import useLanguageContext from 'hooks/useLanguageContext';
import {
  BackLink,
  Container,
  Image,
  Text,
  Info,
  AddInfo,
  AddLink,
  Item,
  Description,
} from './MovieDetails.styled';
export default function MovieDetails() {
  const location = useLocation();
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const { language } = useLanguageContext();
  const imageUrl = 'https://image.tmdb.org/t/p/w300/';
  const backLinkHref = location.state?.from ?? '/';
  const { isError } = useQuery(['movie', movieId, language], async () => {
    const { data } = await getInfoById(movieId, language);
    setMovieInfo(data);
  });

  if (!movieInfo) {
    return null;
  }
  const {
    poster_path,
    title,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = movieInfo;
  return (
    <div>
      <BackLink to={backLinkHref}>
        {language === 'uk' ? 'Назад' : 'Go back'}
      </BackLink>
      {isError &&
        toast.error('Something went wrong. Please, try again in few minutes')}
      {movieInfo && (
        <Container>
          <Image src={imageUrl + poster_path} alt={title}></Image>
          <div>
            <h1>
              {original_title} ({release_date.slice(0, 4)})
            </h1>
            {genres.map(({ name }, index) => (
              <Info key={index}>{name}</Info>
            ))}
            {vote_average > 0 && (
              <Text>
                {language === 'uk' ? 'Оцінка користувача' : 'User score'}:{' '}
                {Math.round(vote_average * 10)}%
              </Text>
            )}
            {overview !== '' && (
              <Text>
                {language === 'uk' ? 'Опис' : 'Overview'}{' '}
                <Description>{overview}</Description>
              </Text>
            )}
          </div>
        </Container>
      )}
      <AddInfo>
        <Info>
          {language === 'uk'
            ? 'Додаткова інформація'
            : 'Additional information'}
        </Info>
        <ul>
          <Item>
            <AddLink to="cast" state={{ from: location.state?.from }}>
              {language === 'uk' ? 'Акторський склад' : 'Cast'}
            </AddLink>
          </Item>
          <Item>
            <AddLink to="reviews" state={{ from: location.state?.from }}>
              {language === 'uk' ? 'Відгуки' : 'Reviews'}
            </AddLink>
          </Item>
        </ul>
      </AddInfo>
      <Outlet />
    </div>
  );
}
MovieDetails.propTypes = {
  movieInfo: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    original_title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
  }),
};
