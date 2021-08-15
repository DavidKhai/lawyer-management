import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { AppLoading } from "components";
import { setUpApi } from "utils/api";

function generateUI() {
  ReactDOM.render(
    <Suspense fallback={<AppLoading />}>
      <App />
    </Suspense>,
    document.getElementById("root")
  );
}

function createApp() {
  setUpApi();
  generateUI();
}

// App starting at here
createApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
