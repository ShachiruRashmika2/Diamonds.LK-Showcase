import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { Provider } from "react-redux";
import store from "./User/store";
import { BrowserRouter as Router } from "react-router-dom";

window.store = store;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>
);