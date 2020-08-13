import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { CookiesProvider } from "react-cookie";

import App from "./components/App";
import reducers from "./reducers";

ReactDOM.render(
  <CookiesProvider>
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>
  </CookiesProvider>,
  document.querySelector("#root")
);
