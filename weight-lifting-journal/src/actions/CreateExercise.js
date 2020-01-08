import { axiosWithAuth } from "../utils/PrivateRoute";
import axios from "axios";
export const POST_EXERCISE_START = "POST_EXERCISE_START";
export const POST_EXERCISE_SUCCESS = "POST_EXERCISE_SUCCESS";
export const POST_EXERCISE_FAIL = "POST_EXERCISE_FAIL";

export const postexerciseStart = exercise => ({
  type: POST_EXERCISE_START,
  payload: exercise
});

export const postExerciseSuccess = exercise => ({
  type: POST_EXERCISE_SUCCESS,
  payload: {
    ...exercise
  }
});

export const postExerciseFail = error => ({
  type: POST_Exercise_FAIL,
  payload: error
});

export const postExercise = exercise => dispatch => {
  const username = localStorage.getItem("username");
  console.log("POST EXERCISE", exercise);
  const authAxios = axiosWithAuth;
  axios
    .get(
      `https://bw-weight-lifting.herokuapp.com/api/users/:id/exercises/${user}`
    )
    .then(response => {
      const userID = response.data;
      dispatch(postExerciseStart());
      authAxios()
        .post(`/exercise/${userID}`, exercise)
        .then(response => {
          dispatch(postExerciseSuccess(response.data));
          console.log("POST EXERCISE SUCCESS", response.data);
        })
        .catch(error => {
          dispatch(postExerciseFail(error.response));
          console.log("POST EXERCISE FAIL", error);
        });
    })
    .catch(error => {
      console.log("POST ERROR", error);
    });
};
