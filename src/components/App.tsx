import React from "react";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouterProps,
  RouteComponentProps,
  Link,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store/store";

import Header from "./shared/Header";
import Home from "./Home/Home";
import Movie from "./Movie/Movie";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Link to="/">
          <Header></Header>
        </Link>
        <div className="content">
          <Route exact path="/" component={Home}></Route>
          <Route
            exact
            path="/movie/:id"
            component={Movie}
            // render={(props: RouteComponentProps) => <Movie {...props}></Movie>}
          ></Route>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
