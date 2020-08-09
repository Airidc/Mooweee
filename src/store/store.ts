import { combineReducers, compose } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({});

const defaultState = {};
const enhancers = compose(
  (window as any).devToolsExtension
    ? (window as any).devToolsExtension()
    : (f: any) => f
);

export const store = createStore(
  rootReducer,
  defaultState,
  applyMiddleware(thunk)
);
