const API_KEY = '531ec011205f6fc7b977a4223300a52e';
const HTTPS = 'https://api.themoviedb.org/3/';
export function getMovies() {
  return fetch(`${HTTPS}trending/movie/day?api_key=${API_KEY}`).then(response =>
    response.json()
  );
}
export function getInfoById(id) {
  return fetch(`${HTTPS}movie/${id}?api_key=${API_KEY}&language=en-US`).then(
    response => response.json()
  );
}
export function getActorsById(id) {
  return fetch(
    `${HTTPS}movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  ).then(response => response.json());
}
export function getReviewsById(id) {
  return fetch(
    `${HTTPS}movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  ).then(response => response.json());
}
export function getMoviesByQuery(query) {
  return fetch(
    `${HTTPS}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
  ).then(response => response.json());
}
