import { createStore, combineReducers } from "redux";
import jwt from "./reducers/jwt";

const store = createStore(
  combineReducers({ jwt }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
