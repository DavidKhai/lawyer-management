import React from "react";
import { store } from "./app/store";
import { Provider } from "react-redux";

import "./App.css";
import Routes from "./routes";

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
