import React, { ReactElement, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Router, RouteComponentProps } from "react-router-dom";

type IdSlug = { id: string };

export default function Movie({
  match,
}: RouteComponentProps<IdSlug>): ReactElement {
  const tmdb = useSelector((state: RootState) => state.tmdb);
  const movies = useSelector((state: RootState) => state.home.movies);

  return <div>{JSON.stringify(match.params.id)}</div>;
}
