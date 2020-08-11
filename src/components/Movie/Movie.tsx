import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Router, RouteComponentProps } from "react-router-dom";

export default function Movie(router: RouteComponentProps): ReactElement {
  const tmdb = useSelector((state: RootState) => state.tmdb);
  const movies = useSelector((state: RootState) => state.home.movies);

  return <div></div>;
}
