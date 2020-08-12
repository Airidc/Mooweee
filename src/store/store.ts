import { combineReducers, compose } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { tmdbInitialState, TmdbState } from "./initial-state";
import { moviesReducer } from "../components/Movies/movies-reducer";
import { movieInfoReducer } from "../components/MovieInfo/movieInfo-reducer";

export interface IAction<A, P> {
  type: A;
  payload: P;
}

export const tmdbReducer = (
  state = tmdbInitialState,
  action: IAction<any, TmdbState>
): TmdbState => {
  switch (action.type) {
    // case ADD_NEW_MOVIES
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  tmdb: tmdbReducer,
  movies: moviesReducer,
  movieInfo: movieInfoReducer,
});

const enhancers = compose(
  applyMiddleware(thunk),
  (window as any).devToolsExtension
    ? (window as any).devToolsExtension()
    : (f: any) => f
);

export const store = createStore(rootReducer, enhancers);
export type RootState = ReturnType<typeof rootReducer>;
