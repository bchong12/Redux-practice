import { createStore, combineReducers, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import userReducer from "./userReducer";
import valueReducer from "./valueReducer";

const rootReducer = combineReducers({
  userReducer,
  valueReducer,
});

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));
