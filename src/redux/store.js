import { createStore, combineReducers } from "redux";
import jwt from "./reducers/jwt";

const store = createStore(combineReducers({ jwt }));

export default store;
