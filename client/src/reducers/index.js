import { combineReducers } from "redux";
import authReducer from "./authReducers";
/* import profileReducer from "./profileReducer"; */
import errorReducer from "./errorReducers";
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
/*   profile: profileReducer */
});