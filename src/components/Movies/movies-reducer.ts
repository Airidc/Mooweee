import { IAction } from "../../store/store";
import { MoviesActionTypes } from "./movies-actions";

export interface MoviesState {
  popular: Movie[];
  trending: Movie[];
}

export interface Movie {
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string;
  id: number;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
}

const initialState: MoviesState = {
  popular: [],
  trending: [],
};

export const moviesReducer = (
  state: MoviesState = initialState,
  action: IAction<MoviesActionTypes, any>
): MoviesState => {
  switch (action.type) {
    case MoviesActionTypes.ADD_POPULAR_MOVIES_TO_LIST:
      return {
        ...state,
        popular: action.payload as Movie[],
      } as MoviesState;

    case MoviesActionTypes.ADD_TRENDING_MOVIES_TO_LIST:
      return {
        ...state,
        trending: action.payload as Movie[],
      } as MoviesState;
    default:
      return state;
  }
};
