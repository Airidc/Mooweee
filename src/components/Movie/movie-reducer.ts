import { IAction } from "../../store/store";
import { MovieActionTypes } from "./movie-actions";
import { Genre } from "../../store/initial-state";

export interface MovieState {
  movies: MovieInfo[];
}

export interface MovieInfo {
  adult: boolean;
  backdrop_path: string;
  budget: 0;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: MovieCompany[];
  production_countries: CountryInfo[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: CountryInfo[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  cast: Cast[];
}

export interface Cast {
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  name: string;
  order: number;
  profile_path: string;
}

export interface MovieCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface CountryInfo {
  iso_3166_1: string;
  name: string;
}

const initialState: MovieState = {
  movies: [],
};

export const movieReducer = (
  state: MovieState = initialState,
  action: IAction<MovieActionTypes, any>
): MovieState => {
  switch (action.type) {
    case MovieActionTypes.ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload as MovieInfo],
      } as MovieState;

    //   case MovieActionTypes.ADD_CAST:
    //     let movieId = action.payload.id;
    //       return {
    //           ...state,
    //             movies: [...state.movies, state.find(movie => movie.id === movieId)]
    //       }
    default:
      return state;
  }
};
