import React, { ReactElement } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../store/store";
import MovieScroll, { MovieScrollSection } from "../shared/MovieScroll";
import { usePopulateMovies } from "../../hooks/UsePopulateMovies";

export default function Movies(): ReactElement {
  const movies = useSelector((state: RootState) => state.movies);

  usePopulateMovies();

  return (
    <>
      <MovieScroll
        section={MovieScrollSection.popular}
        movies={movies.popular}
      ></MovieScroll>
      <MovieScroll
        section={MovieScrollSection.trending}
        movies={movies.trending}
      ></MovieScroll>
    </>
  );
}
