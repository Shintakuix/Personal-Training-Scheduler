import axios from "axios";
import {
  NEW_PROFILE,
  SHOW_PROFILE,
  NEW_SESSION
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

//Getting profile information

export const loadProfile = (id) => dispatch => {
  console.log("axios call working");
  axios
    .get("/api/users/information/" + id)
    .then(res => 
      dispatch({
        type: SHOW_PROFILE,
        payload: res.data
      })
    );
    

};

export const scheduleSession = (sessionData) => dispatch => {
  console.log("schedule call working: " + sessionData.id);
  axios
    .post("/api/users/schedule", sessionData)
    .then(res => 
      dispatch({
        type: NEW_SESSION,
        payload: res.data
      })
    );
  };


