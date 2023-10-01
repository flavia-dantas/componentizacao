
import { api } from "../services/api";
import { MovieCard } from "./MovieCard";
import { useEffect, useState } from 'react';
import { Movie } from "../interfaces";

interface ContentProps {
  selectedGenreId: number
}

export function Content({ selectedGenreId }: ContentProps) {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    api.get<Movie[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });
  }, [selectedGenreId]);
  return (
    <div className="movies-list">
      {movies.map(movie => (
        <MovieCard
          key={movie.imdbID}
          title={movie.Title}
          poster={movie.Poster}
          runtime={movie.Runtime}
          rating={movie.Ratings[0].Value}
        />
      ))}
    </div>
  )
}