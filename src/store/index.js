import { createStore } from "redux";
 
import { reducers } from "./reducers";
import { teste } from "./actors/input";

const actors = [teste];

const store = createStore(reducers);

// let acting = false;
// store.subscribe(() => {
//   if (!acting) {
//     acting = true;
    
//     actors.forEach((actor) => {
//       actor(store.getState(), store.dispatch);
//     });

//     acting = false;
//   }
// });

export {store};
