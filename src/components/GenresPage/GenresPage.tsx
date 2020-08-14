import React, { ReactElement, useState, useEffect } from "react";
import { RouteComponentProps, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import MovieCard from "../shared/MovieCard";
import { Genre } from "../../store/initial-state";
import { Movie } from "../Movies/movies-reducer";
import MovieGenre from "../shared/MovieGenre";
import { usePopulateMovies } from "../../hooks/UsePopulateMovies";

export default function GenresPage({
  location,
}: RouteComponentProps): ReactElement {
  const tmdb = useSelector((state: RootState) => state.tmdb);
  const moviesFromState = useSelector((state: RootState) => state.movies);
  const [genreFromQuery, setGenreFromQuery] = useState<Genre>({
    id: -1,
    name: "",
  });
  const [movies, setMovies] = useState([] as Movie[]);

  usePopulateMovies();

  useEffect(() => {
    const genreValueFromQuery = decodeURI(
      location.search.replace("?genre=", "")
    );
    const genreMatched = tmdb.genres.find(
      (genre) => genre.name.toLowerCase() === genreValueFromQuery.toLowerCase()
    );

    if (genreMatched) {
      setGenreFromQuery(genreMatched);
    }

    const concatinatedMovies = [
      ...moviesFromState.popular.filter((movie) =>
        movie.genre_ids.some((id) => id === genreFromQuery.id)
      ),
    ];

    moviesFromState.trending.forEach((movie) => {
      if (
        concatinatedMovies.some((m) => m.id === movie.id) ||
        movie.genre_ids.some((id) => id !== genreFromQuery.id)
      ) {
        // Skipping dupliciate movie
        return;
      }

      concatinatedMovies.push(movie);
    });

    setMovies(concatinatedMovies);
  }, [
    location,
    moviesFromState.popular,
    moviesFromState.trending,
    genreFromQuery,
  ]);

  return (
    <>
      {genreFromQuery.id !== -1 ? (
        <>
          <h1 className="headline--genre">{genreFromQuery.name} movies:</h1>
          <div className="genre--movies--wrapper">
            {movies.length ? (
              movies.map((movie) => (
                <MovieCard tmdb={tmdb} movie={movie} key={movie.id}></MovieCard>
              ))
            ) : (
              <>
                <h1 className="headline--genre">
                  Ahh, that's embarrassing... Try picking other genre:
                </h1>
                <div className="genre--genres-wrapper">
                  {tmdb.genres.map(
                    (genre) =>
                      genre.id !== -1 && (
                        <Link to={`/genres?genre=${genre.name}`} key={genre.id}>
                          <MovieGenre genre={genre}></MovieGenre>
                        </Link>
                      )
                  )}
                </div>
              </>
            )}
          </div>
        </>
      ) : (
        <>
          <h1 className="headline--genre">Genre to choose:</h1>
          <div className="genre--genres-wrapper">
            {tmdb.genres.map(
              (genre) =>
                genre.id !== -1 && (
                  <Link to={`/genres?genre=${genre.name}`} key={genre.id}>
                    <MovieGenre genre={genre}></MovieGenre>
                  </Link>
                )
            )}
          </div>
        </>
      )}
    </>
  );
}
