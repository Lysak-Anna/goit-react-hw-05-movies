import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '531ec011205f6fc7b977a4223300a52e';

export async function getMovies(language) {
  const { data } = await axios(
    `trending/movie/day?api_key=${API_KEY}&language=${language}`
  );
  return data;
}
export async function getInfoById(id, language) {
  const data = await axios(
    `movie/${id}?api_key=${API_KEY}&language=${language}`
  );
  return data;
}
export async function getActorsById(id, language) {
  const data = await axios(
    `movie/${id}/credits?api_key=${API_KEY}&language=${language}`
  );
  return data;
}
export async function getReviewsById(id, language) {
  const data = await axios(
    `movie/${id}/reviews?api_key=${API_KEY}&language=${language}&page=1`
  );
  return data;
}
export async function getMoviesByQuery(query, language) {
  const data = await axios(
    `search/movie?api_key=${API_KEY}&language=${language}&page=1&include_adult=false&query=${query}`
  );
  return data;
}
