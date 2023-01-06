import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getActorsById } from 'API_Services/moviesdbAPI';
import defaultImage from '../../images/defaultImage.png';
import { Container, List, Item, Image, Text, Descr } from './Cast.styled';
export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const imageUrl = `https://image.tmdb.org/t/p/w300/`;
  useEffect(() => {
    getActorsById(movieId)
      .then(({ cast }) => setCast(cast))
      .catch(error => setError(error));
  }, [movieId]);
  return (
    <Container>
      {error && <p>Something went wrong. Please, try again in few minutes</p>}
      {cast.length > 0 && (
        <List>
          {cast.map(({ id, profile_path, original_name, character }) => (
            <Item key={id}>
              <Image
                src={profile_path ? imageUrl + profile_path : defaultImage}
                alt={original_name}
              ></Image>
              <Text>{original_name}</Text>
              <Descr>Character: {character}</Descr>
            </Item>
          ))}
        </List>
      )}
    </Container>
  );
}
Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      profile_path: PropTypes.string,
      original_name: PropTypes.string,
      character: PropTypes.string,
    })
  ),
};
