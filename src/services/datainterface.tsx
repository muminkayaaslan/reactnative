export interface Movie {
  _id: string;
  title: string;
  plot?: string;
  fullplot?: string;
  genres?: string[];
  runtime: number;
  cast?: string[];
  poster?: string;
  languages?: string[];
  released?: string;
  directors?: string[];
  rated?: string;
  awards?: {
    wins?: number;
    nominations?: number;
    text?: string;
  };
  lastupdated: string;
  year?: number;
  countries: string[];
  type?: string[];
  imdb?: {
    rating?: number;
    votes: number;
    id?: number;
  };
  tomatoes?: {
    viewer?: {
      rating?: number;
      numReviews?: number;
      meter?: number;
    };
    critic?: {
      rating?: number;
      numReviews?: number;
      meter?: number;
    };
    lastupdated?: string;
  };
  num_mflix_comments?: number;
}

export interface Comments {
  _id: string;
  name: string;
  email: string;
  movie_id: string;
  text: string;
  date: string;
}
