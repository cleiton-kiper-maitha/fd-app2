import React from "react";
import { Provider } from "react-redux";

import { store } from "./store";

import Hello from "./Hello";

const App = () => {
  return (
    <Provider store={store}>
      <Hello />
    </Provider>
  );
};

export default App;