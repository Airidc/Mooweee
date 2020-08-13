import React, { ReactElement, useState, useEffect } from "react";
import { RouteComponentProps, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";

import axios from "axios";
import MovieCard from "../shared/MovieCard";
import * as actions from "./../Movies/movies-actions";
import { Genre } from "../../store/initial-state";
import { Movie } from "../Movies/movies-reducer";
import MovieGenre from "../shared/MovieGenre";

export default function GenresPage({
  location,
}: RouteComponentProps): ReactElement {
  const tmdb = useSelector((state: RootState) => state.tmdb);
  const moviesFromState = useSelector((state: RootState) => state.movies);
  const [genreFromQuery, setGenreFromQuery] = useState<Genre>({
    id: -1,
    name: "",
  });
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([] as Movie[]);

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

    console.log("movies from state:", moviesFromState);
    if (!moviesFromState.popular.length || !moviesFromState.trending.length) {
      (async () => {
        const response = (
          await axios.get(
            `${tmdb.apiUrl}${tmdb.endpointPaths.popularMovies}?api_key=${tmdb.apiKey}&language=en-US&page=1`
          )
        ).data;

        dispatch({
          type: actions.MoviesActionTypes.ADD_POPULAR_MOVIES_TO_LIST,
          payload: response.results,
        });

        (async () => {
          const response = (
            await axios.get(
              `${tmdb.apiUrl}${tmdb.endpointPaths.trendingMoviesToday}?api_key=${tmdb.apiKey}&language=en-US&page=1`
            )
          ).data;
          dispatch({
            type: actions.MoviesActionTypes.ADD_TRENDING_MOVIES_TO_LIST,
            payload: response.results,
          });
        })();
      })();
    }

    const concatinatedMovies = [
      ...moviesFromState.popular.filter((movie) =>
        movie.genre_ids.some((id) => id === genreFromQuery.id)
      ),
      ...moviesFromState.trending.filter((movie) =>
        movie.genre_ids.some((id) => id === genreFromQuery.id)
      ),
    ];

    const filteredMovies = concatinatedMovies.filter(
      (m, index) => concatinatedMovies.indexOf(m) === index
    );
    setMovies(filteredMovies);
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
                  Awwww, that's embarrassing... Try picking other genre:
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
