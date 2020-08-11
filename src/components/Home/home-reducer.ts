import { IAction } from "../../store/store";
import { HomeActionTypes } from "./home-actions";

export interface HomeState {
  movies: Movie[];
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

const initialState: HomeState = {
  movies: [],
};

export const homeReducer = (
  state: HomeState = initialState,
  action: IAction<HomeActionTypes, any>
): HomeState => {
  switch (action.type) {
    case HomeActionTypes.ADD_MOVIES_TO_LIST:
      return {
        ...state,
        movies: action.payload as Movie[],
      } as HomeState;
    default:
      return state;
  }
};
