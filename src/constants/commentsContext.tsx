import React, { createContext, useContext, useEffect, useState } from 'react';
import { Comments } from '../services/datainterface';
import { fetchCommentsByMovieId } from '../services/api';

interface CommentContextType {
  comments: Comments[];
  loading: boolean;
  error: string | null;
  refresh: (movieId: string) => void;
}

const CommentContext = createContext<CommentContextType | null>(null);

export function CommentProvider({
  movieId,
  children,
}: {
  movieId: string;
  children: React.ReactNode;
}) {
  const [comments, setComments] = useState<Comments[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadComments = async (id: string) => {
    setLoading(true);
    try {
      const data = await fetchCommentsByMovieId(id);
      setComments(data);
      setError(null);
    } catch (e) {
      setError('Yorumlar yüklenirken hata oldu.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadComments(movieId);
  }, [movieId]);

  return (
    <CommentContext.Provider
      value={{ comments, loading, error, refresh: loadComments }}
    >
      {children}
    </CommentContext.Provider>
  );
}

export function useComments() {
  const context = useContext(CommentContext);
  if (!context) {
    throw new Error('useComments must be used within a CommentProvider');
  }
  return context;
}
