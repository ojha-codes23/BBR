import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import store from "./redux/store";

import "bootstrap/dist/css/bootstrap.min.css";
import QueryProvider from "./providers/QueryProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryProvider>
         <App />
      </QueryProvider>
    </Provider>
  </React.StrictMode>
);