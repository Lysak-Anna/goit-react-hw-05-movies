import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { getReviewsById } from 'API_Services/moviesdbAPI';
import { Container, Text, Content } from './Reviews.styled';
import { useQuery } from 'react-query';
import useLanguageContext from 'hooks/useLanguageContext';
export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const { language } = useLanguageContext();
  const { isError } = useQuery(['reviews', movieId, language], async () => {
    const { data } = await getReviewsById(movieId, language);
    setReviews(data.results);
  });

  return (
    <Container>
      {isError &&
        toast.error('Something went wrong. Please, try again in few minutes')}
      {language === 'uk' ? (
        <p>
          Нажаль, відгуки на нашому ресурсі доступні тільки англійською мовою
        </p>
      ) : reviews.length > 0 ? (
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
