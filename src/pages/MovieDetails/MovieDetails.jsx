import PropTypes from 'prop-types';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getInfoById } from 'API_Services/moviesdbAPI';
import {
  BackLink,
  Container,
  Image,
  Text,
  Info,
  AddInfo,
  AddLink,
  Item,
} from './MovieDetails.styled';
export default function MovieDetails() {
  const location = useLocation();
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [error, setError] = useState(null);

  const imageUrl = 'https://image.tmdb.org/t/p/w300/';
  const backLinkHref = location.state?.from ?? '/';
  useEffect(() => {
    getInfoById(movieId)
      .then(info => setMovieInfo(info))
      .catch(error => setError(error));
  }, [movieId]);
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
      <BackLink to={backLinkHref}>Go back</BackLink>
      {error && <p>Something went wrong. Please, try again in few minutes</p>}
      {movieInfo && (
        <Container>
          <Image src={imageUrl + poster_path} alt={title}></Image>
          <div>
            <h1>
              {original_title} ({release_date.slice(0, 4)})
            </h1>
            {vote_average > 0 && (
              <Text>User score: {Math.round(vote_average * 10)}%</Text>
            )}

            <Text>
              Overview: <Info>{overview}</Info>
            </Text>
            <Text>
              Genres:{' '}
              <Info>
                {genres.map(({ name }, index) => (
                  <Info key={index}>{name}</Info>
                ))}
              </Info>
            </Text>
          </div>
        </Container>
      )}
      <AddInfo>
        <Info>Additional information</Info>
        <ul>
          <Item>
            <AddLink to="cast" state={{ from: location.state?.from }}>
              Cast
            </AddLink>
          </Item>
          <Item>
            <AddLink to="reviews" state={{ from: location.state?.from }}>
              Reviews
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
