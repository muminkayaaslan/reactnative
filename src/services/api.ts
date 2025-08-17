import { Comments, Movie } from './datainterface';

const API_URL = 'https://mongobackend-72ax.onrender.com';

export const fetchMovies = async (): Promise<Movie[]> => {
  const response = await fetch(`${API_URL}/movies`);
  const data = await response.json();
  return data;
};

export const fetchMovieWithId = async (movieId: string): Promise<Movie[]> => {
  const response = await fetch(`${API_URL}/movies/${movieId}`);
  if (!response.ok) {
    throw new Error(`Film Bulunamadı: ${movieId} `);
  }

  const data = await response.json();
  return data;
};

export const fetchCommentsByMovieId = async (
  movieId: string
): Promise<Comments[]> => {
  const response = await fetch(`${API_URL}/comments/${movieId}`);
  if (!response.ok) {
    throw new Error(`Yorumlar alınamadı: ${movieId}`);
  }
  return await response.json();
};
