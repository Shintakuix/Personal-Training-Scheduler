import axios from "axios";
import {
  GET_ERRORS,
} from "./types";

// Updating Profile
export const updateProfile = (userData, history) => dispatch => {
  axios
    .post("/api/users/profile", userData)
    .then(res => history.push("/dashboard"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
