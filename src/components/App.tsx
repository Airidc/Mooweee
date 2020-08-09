import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <header className="header">
          <ul className="header--list">
            <li className="header--list--item">Home</li>
            <li className="header--list--item">Categories</li>
            <li className="header--list--item">Home</li>
            <li className="header--list--item">Home</li>
          </ul>
        </header>
        <div className="content"></div>
      </Router>
    </Provider>
  );
}

export default App;
