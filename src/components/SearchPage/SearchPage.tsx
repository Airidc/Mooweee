import React, { ReactElement, useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";

import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { Movie } from "../Movies/movies-reducer";
import MovieScroll from "../shared/MovieScroll";

type SearchSlug = { query: string };

export default function SearchPage({
  match,
}: RouteComponentProps<SearchSlug>): ReactElement {
  const tmdb = useSelector((state: RootState) => state.tmdb);
  const [searchResults, setSearchResults] = useState<Movie[]>([]);

  useEffect(() => {
    (async () => {
      const response = (
        await axios.get(
          `${tmdb.apiUrl}${tmdb.endpointPaths.searchMovie}?api_key=${tmdb.apiKey}&query=${match.params.query}&include_adult=flse&page=1`
        )
      ).data;
      console.log("Search response:", response);

      setSearchResults(response.results as Movie[]);
    })();
  }, [match]);
  return (
    <>
      <MovieScroll movies={searchResults} section="search"></MovieScroll>
    </>
  );
}
