import axios from "axios";
import {
  NEW_PROFILE,
} from "./types";

// Updating Profile
export const updateProfile = (userData) => dispatch => {
  axios
    .post("/api/users/profile", userData)
    .then(res => res.json())
    .then(post => 
      dispatch({
        type: NEW_PROFILE,
        payload: post
      })
    );
};
