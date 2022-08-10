import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/';
const API_KEY = '9b627b5c13f01f3f3d8206e8b910ae85';
export const getTrending = async () => {
  try {
    const response = await axios.get(`3/trending/all/day?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export function getMovieById(id) {
  try {
    const response = axios.get(
      `3/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}
export function getCast(id) {
  try {
    const response = axios.get(
      `3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}
export function getReview(id) {
  try {
    const response = axios.get(
      `3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}
export function SearchedMovie(query) {
  try {
    const response = axios.get(
      `3/search/movie?&language=en-US&page=1&api_key=${API_KEY}&query=${query}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}
