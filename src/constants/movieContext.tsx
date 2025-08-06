import React, { createContext, useContext, useEffect, useState } from 'react';
import { Movie } from '../services/datainterface';
import { fetchMovies } from '../services/api';

interface MovieContextType {
  movies: Movie[];
  loading: boolean;
  error: string | null;
  refresh: () => void;
}

const MovieContext = createContext<MovieContextType | null>(null);

export function MovieProvider({ children }: { children: React.ReactNode }) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const loadMovies = async () => {
    setLoading(true);
    try {
      const data = await fetchMovies();
      setMovies(data);
      setError(null);
    } catch (e: any) {
      setError('Filmler yüklenirken hata oldu.');
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadMovies();
  }, []);
  return (
    <MovieContext.Provider
      value={{ movies, loading, error, refresh: loadMovies }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export function useMovies() {
  const context = useContext(MovieContext);
  if (!context)
    throw new Error('useMovies must be used within a movieProvider');
  return context;
}
