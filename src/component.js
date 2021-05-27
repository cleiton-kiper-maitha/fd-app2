import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { teste } from "./store/actors/input";
import * as actions from "./store/actions";
import { store } from "./store";

class MyComponent extends HTMLElement {
  constructor() {
    super(); 

    this.shadow = this.attachShadow({mode:"closed"})
  }

  dispatch(action) {
    store.dispatch(actions[action]());
  }

  connectedCallback() {

    const actors = [teste];
    let acting = false;
    store.subscribe(() => {
      if (!acting) {
        acting = true;
    
        actors.forEach((actor) => {
          actor.apply(this, [store.getState(), store.dispatch]);
        });

        acting = false;
      }
    });

    ReactDOM.render(<App />, this.shadow);
  }
}

customElements.define("my-component", MyComponent);

export default function getComponent(){ return document.createElement("my-component"); };