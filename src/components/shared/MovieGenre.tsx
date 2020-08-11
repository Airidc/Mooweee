import React, { ReactElement } from "react";
import { Genre } from "../../store/initial-state";

interface Props {
  genre: Genre;
}

export default function MovieGenre({ genre }: Props): ReactElement {
  return (
    <p className="movie--genre" key={genre.id}>
      {genre.name}
    </p>
  );
}
