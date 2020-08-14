import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import axios from "axios";

import { RootState } from "../store/store";
import * as actions from "../components/Movies/movies-actions";

export function usePopulateMovies() {
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

        if (response && response.results) {
          dispatch({
            type: actions.MoviesActionTypes.ADD_POPULAR_MOVIES_TO_LIST,
            payload: response.results,
          });
        }
      })();
    }

    if (!movies.trending.length) {
      (async () => {
        const response = (
          await axios.get(
            `${tmdb.apiUrl}${tmdb.endpointPaths.trendingMoviesToday}?api_key=${tmdb.apiKey}&language=en-US&page=1`
          )
        ).data;

        if (response && response.results) {
          dispatch({
            type: actions.MoviesActionTypes.ADD_TRENDING_MOVIES_TO_LIST,
            payload: response.results,
          });
        }
      })();
    }
  });
}
