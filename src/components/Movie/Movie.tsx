import React, { ReactElement, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Router, RouteComponentProps } from "react-router-dom";

import axios from "axios";

import { RootState } from "../../store/store";
import * as actions from "./movie-actions";
import { MovieInfo } from "./movie-reducer";
import MovieGenre from "../shared/MovieGenre";
import MovieRatings from "../shared/MovieRatings";

type IdSlug = { id: string };

export default function Movie({
  match,
}: RouteComponentProps<IdSlug>): ReactElement {
  const tmdb = useSelector((state: RootState) => state.tmdb);
  const movies = useSelector((state: RootState) => state.movies.movies);
  const movieInfo: MovieInfo | null =
    movies.find(
      (movie: MovieInfo) => movie && movie.id === parseInt(match.params.id)
    ) ?? null;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieInfo) {
      (async () => {
        const movieResp = (
          await axios.get(
            `${tmdb.apiUrl}${tmdb.endpointPaths.searchMovieById}${match.params.id}?api_key=${tmdb.apiKey}&language=en-US`
          )
        ).data as MovieInfo;
        console.log("Movie:", movieResp);
        const castResp = (
          await axios.get(
            `${tmdb.apiUrl}${tmdb.endpointPaths.cast}?api_key=${tmdb.apiKey}&language=en-US`.replace(
              "%ID%",
              match.params.id
            )
          )
        ).data;
        console.log("Cast:", castResp);

        movieResp.cast = castResp.cast;

        dispatch({
          type: actions.MovieActionTypes.ADD_MOVIE,
          payload: movieResp,
        });
      })();
    }
  }, []);

  return (
    <>
      {movieInfo ? (
        <div className="movie--wrapper">
          <div className="movie--section movie--section--details">
            <img
              className="movie--poster"
              src={`${tmdb.imageUrl}${movieInfo.poster_path}`}
              alt="movie poster"
            />
            <div className="movie--section--info">
              <h1 className="movie--card--title">{movieInfo.original_title}</h1>
              <div className="movie--section--genre--wrap">
                {movieInfo.genres.map((genre) => (
                  <MovieGenre genre={genre} key={genre.id} />
                ))}
              </div>
              <p className="movie--text--info">
                Released: {movieInfo.release_date}
              </p>
              <p className="movie--text--info">
                Runtime: {movieInfo.runtime}mins
              </p>
              <MovieRatings
                rating={movieInfo.vote_average}
                votes={movieInfo.vote_count}
              />
            </div>
          </div>
          <div className="movie--section">
            <h3 className="movie--section--title">Description</h3>
            <p className="movie--description">{movieInfo.overview}</p>
          </div>
          <div className="movie--section">
            <h3 className="movie--section--title">Actors</h3>
            {movieInfo.cast.map((member) => (
              <div className="actor-row">
                {member.profile_path ? (
                  <img
                    className="actor--profile-picture"
                    src={`${tmdb.imageUrl}${member.profile_path}`}
                    alt=""
                  />
                ) : (
                  <p className="actor--profile-picture--none">No Photo</p>
                )}
                <div className="actor--info">
                  <h4>
                    {member.name} - <i>{member.character}</i>
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        "Loading ..."
      )}
    </>
  );
}
