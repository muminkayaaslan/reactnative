import { Movie } from './datainterface';

const API_URL = 'https://mongobackend-72ax.onrender.com';

export const fetchMovies = async (): Promise<Movie[]> => {
  const response = await fetch(`${API_URL}/movies`);
  const data = await response.json();
  return data;
};
