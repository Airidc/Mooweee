import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="content">content</div>
      </Router>
    </Provider>
  );
}

export default App;
