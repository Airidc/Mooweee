import React, { ReactElement } from "react";
import { Movie } from "../Home/home-reducer";
import { TmdbState } from "../../store/initial-state";
import { Link } from "react-router-dom";

interface Props {
  movie: Movie;
  tmdb: TmdbState;
}

export default function MovieCard({ movie, tmdb }: Props): ReactElement {
  const style: React.CSSProperties = {
    backgroundImage: `linear-gradient(
            180deg,rgba(0, 0, 0, 0.1) 0.03%,
            rgba(0, 0, 0, 0.7) 46.25%,
            rgba(0, 0, 0, 0.9) 65%),
            url("${tmdb.imageUrl}${movie.backdrop_path}")`,
  };

  return (
    <Link to={`home/${movie.id}`}>
      <div className="movie--card" style={style}>
        <div className="movie--card--row ">
          <h1 className="movie--card--title">{movie.original_title}</h1>
          <div className="movie--card--row movie--card--row--genre">
            {movie.genre_ids.map((genreId) => (
              <p className="movie--card--genre" key={genreId}>
                {tmdb.genres.find((genre) => genre.id == genreId)?.name}
              </p>
            ))}
          </div>
        </div>

        <div className="movie--card--row">
          <p className="movie--card--description">
            {movie.overview.slice(0, 100)}
            <a href="#">
              <i>...more</i>
            </a>
          </p>
          <div className="movie--card--ratings">
            <h4>
              {/* {movie.vote_average} / 10 ⭐ ({movie.vote_count} votes) */}
              {movie.vote_average} / 10 🐮 ({movie.vote_count} votes)
            </h4>
          </div>
        </div>
      </div>
    </Link>
  );
}