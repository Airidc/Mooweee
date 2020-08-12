import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store/store";

import Header from "./shared/Header";
import Home from "./Movies/Movies";
import MovieInfoPage from "./MovieInfo/MovieInfoPage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header></Header>
        <div className="content">
          <Route exact path="/" component={Home}></Route>
          <Route
            exact
            path="/movie/:id"
            component={MovieInfoPage}
            // render={(props: RouteComponentProps) => <Movie {...props}></Movie>}
          ></Route>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
