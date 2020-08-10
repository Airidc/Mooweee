import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store/store";

import Header from "./shared/Header";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header></Header>
        <div className="content"></div>
      </Router>
    </Provider>
  );
}

export default App;
