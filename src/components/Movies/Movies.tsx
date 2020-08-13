import React, { ReactElement, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import * as actions from "./movies-actions";
import { RootState } from "../../store/store";
import MovieCard from "../shared/MovieCard";
import FilterWidget from "../shared/FilterWidget";
import MovieScroll from "../shared/MovieScroll";

export default function Movies(): ReactElement {
  const tmdb = useSelector((state: RootState) => state.tmdb);
  const movies = useSelector((state: RootState) => state.movies);
  // const [filteredGenre, setFilteredGenre] = useState({ id: -1, name: "" });
  const dispatch = useDispatch();

  useEffect(() => {
    if (tmdb.apiKey && !movies.popular.length) {
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

    if (tmdb.apiKey && !movies.trending.length) {
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
      <MovieScroll section="Popular" movies={movies.popular}></MovieScroll>
      <MovieScroll section="Trending" movies={movies.trending}></MovieScroll>
    </>
  );
}
