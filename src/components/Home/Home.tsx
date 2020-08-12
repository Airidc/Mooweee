import React, { ReactElement, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import * as actions from "./home-actions";
import { RootState } from "../../store/store";
import MovieCard from "../shared/MovieCard";

export default function Home(): ReactElement {
  const tmdb = useSelector((state: RootState) => state.tmdb);
  const movies = useSelector((state: RootState) => state.home.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movies.length) {
      (async () => {
        const response = (
          await axios.get(
            `${tmdb.apiUrl}${tmdb.endpointPaths.trendingMoviesToday}?api_key=${tmdb.apiKey}&language=en-US&page=1`
          )
        ).data;
        console.log("reponse", response);
        dispatch({
          type: actions.HomeActionTypes.ADD_MOVIES_TO_LIST,
          payload: response.results,
        });
      })();
    }
  });

  return (
    <>
      <h1>Popular today</h1>
      {movies.map((movie) => {
        if (!movie.backdrop_path) movie.backdrop_path = movie.poster_path;

        return <MovieCard tmdb={tmdb} movie={movie} key={movie.id}></MovieCard>;
      })}
    </>
  );
}
