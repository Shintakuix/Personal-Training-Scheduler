import axios from "axios";
import {
  NEW_PROFILE,
} from "./types";

// Updating Profile
export const updateProfile = (userData,history) => dispatch => {
  console.log("this data5:" + userData.id);
  axios
    .post("/api/users/profile", userData)
    .then(res => history.push("/dashboard"))
    .then(post => 
      dispatch({
        type: NEW_PROFILE,
        payload: post
      })
    );
};
