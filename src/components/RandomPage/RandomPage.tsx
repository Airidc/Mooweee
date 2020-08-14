import React, { ReactElement, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useHistory } from "react-router-dom";

export default function RandomPage(): ReactElement {
  const movies = useSelector((state: RootState) => state.movies);
  const browserHistory = useHistory();

  useEffect(() => {
    const movieList = [...movies.popular, ...movies.trending];
    const randomNum = Math.floor(Math.random() * movieList.length);

    browserHistory.push(`/movie/${movieList[randomNum].id}`);
  });

  return <h1>Picking random movie for you!</h1>;
}
