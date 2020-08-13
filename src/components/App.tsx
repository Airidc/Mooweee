import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store/store";

import Header from "./shared/Header";
import Home from "./Movies/Movies";
import MovieInfoPage from "./MovieInfo/MovieInfoPage";
import SearchPage from "./SearchPage/SearchPage";
import GenresPage from "./GenresPage/GenresPage";

function App() {
  const closeMenu = (e: React.MouseEvent) => {
    e.persist();
    if (e.currentTarget.classList.contains("nav--hamburger")) {
      return;
    }

    let menuElem = document.querySelector(".nav");

    if (menuElem && !menuElem.classList.contains("hide-mobile")) {
      console.log("it's open!");
      // close menu
      menuElem.classList.add("hide-mobile");
      e.preventDefault();
    }
  };

  return (
    <Provider store={store}>
      <Router>
        <Header></Header>
        <div className="content" onClick={closeMenu}>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/movie/:id" component={MovieInfoPage}></Route>
          <Route path="/search/:query" component={SearchPage}></Route>
          <Route path="/genres" component={GenresPage}></Route>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
