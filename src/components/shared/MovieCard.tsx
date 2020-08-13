import React, { ReactElement } from "react";
import { Movie } from "../Movies/movies-reducer";
import { TmdbState } from "../../store/initial-state";
import { useHistory } from "react-router-dom";
import MovieGenre from "./MovieGenre";
import MovieRatings from "./MovieRatings";

interface Props {
  movie: Movie;
  tmdb: TmdbState;
}

export default function MovieCard({ movie, tmdb }: Props): ReactElement {
  const browserHistory = useHistory();

  const style: React.CSSProperties = {
    backgroundImage: `linear-gradient(
            180deg,rgba(0, 0, 0, 0.1) 0.03%,
            rgba(0, 0, 0, 0.7) 46.25%,
            rgba(0, 0, 0, 0.9) 65%),
            url("${tmdb.imageUrl}${movie.backdrop_path}")`,
  };

  const goToMoviePage = () => {
    browserHistory.push(`/movie/${movie.id}`);
  };

  return (
    <>
      <div className="movie--card" style={style} onClick={goToMoviePage}>
        <div className="movie--card--row ">
          <h1 className="movie--card--title">{movie.original_title}</h1>
          <div className="movie--card--row movie--card--row--genre">
            {movie.genre_ids.map((genreId) => {
              let genre = tmdb.genres.find((genre) => genre.id === genreId);
              return genre ? <MovieGenre genre={genre} key={genre.id} /> : "";
            })}
          </div>
        </div>

        <div className="movie--card--row">
          <p className="movie--card--description">
            {movie.overview.slice(0, 100)}...
          </p>
          <MovieRatings rating={movie.vote_average} votes={movie.vote_count} />
        </div>
      </div>
    </>
  );
}
