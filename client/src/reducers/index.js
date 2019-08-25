import { combineReducers } from "redux";
import authReducer from "./authReducers";
import profileReducer from "./profileReducer2";
import errorReducer from "./errorReducers";
import sessionReducer from "./sessionReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  prof: profileReducer,
  sess: sessionReducer
});