import { combineReducers } from "redux";

import { inputReducer } from "./inputReducer";

export const reducers = combineReducers({
  inputState: inputReducer
});