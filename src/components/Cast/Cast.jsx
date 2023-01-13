import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { getActorsById } from 'API_Services/moviesdbAPI';
import defaultImage from '../../images/defaultImage.png';
import { Container, List, Item, Image, Text, Descr } from './Cast.styled';
import { useQuery } from 'react-query';
import useLanguageContext from 'hooks/useLanguageContext';
export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const { language } = useLanguageContext();
  const imageUrl = `https://image.tmdb.org/t/p/w300/`;
  const { isError } = useQuery(['cast', movieId, language], async () => {
    const { data } = await getActorsById(movieId, language);
    setCast(data.cast);
  });

  return (
    <Container>
      {isError &&
        toast.error('Something went wrong. Please, try again in few minutes')}
      {cast.length > 0 && (
        <List>
          {cast.map(({ id, profile_path, original_name, character }) => (
            <Item key={id}>
              <Image
                src={profile_path ? imageUrl + profile_path : defaultImage}
                alt={original_name}
              ></Image>
              <Text>{original_name}</Text>
              <Descr>
                {language === 'uk' ? 'У ролі' : 'Character'}: {character}
              </Descr>
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
