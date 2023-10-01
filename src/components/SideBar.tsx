import GenreResponse from "../interfaces/GenreResponse";
import { Button } from "./Button";
import { useEffect, useState } from 'react';
import { api } from "../services/api";

interface SideBarProps {
  selectedGenreId: number
  handleClickButton: (id: number) => void
}

export function SideBar({ handleClickButton, selectedGenreId }: SideBarProps) {
  const [genres, setGenres] = useState<GenreResponse[]>([]);

  useEffect(() => {
    api.get<GenreResponse[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}