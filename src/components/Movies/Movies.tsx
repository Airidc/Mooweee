import React, { ReactElement, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import * as actions from "./movies-actions";
import { RootState } from "../../store/store";
import MovieCard from "../shared/MovieCard";

export default function Movies(): ReactElement {
  const tmdb = useSelector((state: RootState) => state.tmdb);
  const movies = useSelector((state: RootState) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movies.popular.length) {
      (async () => {
        const response = (
          await axios.get(
            `${tmdb.apiUrl}${tmdb.endpointPaths.popularMovies}?api_key=${tmdb.apiKey}&language=en-US&page=1`
          )
        ).data;
        console.log("reponse", response);
        dispatch({
          type: actions.MoviesActionTypes.ADD_POPULAR_MOVIES_TO_LIST,
          payload: response.results,
        });
      })();
    }

    if (!movies.trending.length) {
      (async () => {
        const response = (
          await axios.get(
            `${tmdb.apiUrl}${tmdb.endpointPaths.trendingMoviesToday}?api_key=${tmdb.apiKey}&language=en-US&page=1`
          )
        ).data;
        console.log("reponse", response);
        dispatch({
          type: actions.MoviesActionTypes.ADD_TRENDING_MOVIES_TO_LIST,
          payload: response.results,
        });
      })();
    }
  });

  return (
    <>
      <div className="headline">
        <h1>Popular Movies</h1>
        <h3>Filter by genre:</h3>
        <input type="text" />
      </div>
      <div className="movie--cards--wrapper scrollable">
        <div className="movie--cards--container">
          {movies.popular.map((movie) => {
            if (!movie.backdrop_path) movie.backdrop_path = movie.poster_path;

            return (
              <MovieCard tmdb={tmdb} movie={movie} key={movie.id}></MovieCard>
            );
          })}
        </div>
      </div>
      <div className="headline">
        <h1>Trending today</h1>
        <h3>Filter by genre:</h3>
        <input type="text" />
      </div>
      <div className="movie--cards--wrapper scrollable">
        <div className="movie--cards--container">
          {movies.trending.map((movie) => {
            if (!movie.backdrop_path) movie.backdrop_path = movie.poster_path;

            return (
              <MovieCard tmdb={tmdb} movie={movie} key={movie.id}></MovieCard>
            );
          })}
        </div>
      </div>
    </>
  );
}
