import { combineReducers, compose } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const tmdbInitialState = {
  imageUrl: "https://image.tmdb.org/t/p/original",
  apiUrl: "https://api.themoviedb.org/3",
  apiKey: process.env.REACT_APP_API_KEY,
};

export const tmdbReducer = (state = tmdbInitialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({ tmdbReducer });

const enhancers = compose(
  applyMiddleware(thunk),
  (window as any).devToolsExtension
    ? (window as any).devToolsExtension()
    : (f: any) => f
);

export const store = createStore(rootReducer, enhancers);
