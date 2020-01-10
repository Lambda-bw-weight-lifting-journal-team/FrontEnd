import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from "../actions/LoginAction";
import {
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL
} from "../actions/SignupAction";

const d = new Date();

const newUserState = () => ({
  id: Date.now(),
  username: "",
  password: "",
  exercises: [{
    id: Date.now(),
    // user_id: newUserState.id,
    name: "",
    amount_lifted: null,
    units: "",
    reps_completed: null,
    date: d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear(),
    body_region: ""
  }]
});

export const signUpreducer = (state = newUserState, action) => {
  switch (action.type) {
    case CREATE_USER_START:
      return {
        ...state,
        username: action.payload,
        password: action.payload,
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state
      };
    case CREATE_USER_FAIL:
      return {
        ...state,
        error: action.payload.error
      };
    default:
      return state;
  }
};
const userState = () => ({
  username: "",
  password: ""
});
export const loginReducer = (state = userState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        username: action.payload,
        password: action.payload
      };
    case LOGIN_SUCCESS:
      return {
        ...state
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
