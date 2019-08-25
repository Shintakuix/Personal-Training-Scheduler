import { combineReducers } from "redux";
import authReducer from "./authReducers";
import profileReducer from "./profileReducer2";
import errorReducer from "./errorReducers";
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  prof: profileReducer
});