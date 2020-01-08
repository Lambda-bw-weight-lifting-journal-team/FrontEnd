import {
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL
} from "../actions/SignupAction";

// const newUserState = () => ({
//   id: Date.now(),
//   username: "",
//   password: "",
//   primaryemail: ""
// });

// const d = newDate();

const newUserState = {
  id: Date.now(),
  username: "",
  password: "",
  primaryemail: "",
  exercises: [{
    id: Date.now(),
    user_id: id,
    name: "",
    amount_lifted: null,
    units: "",
    reps_completed: null,
    date: d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear(),
    body_region: ""
  }]
};

export const signUpreducer = (state = newUserState, action) => {
  switch (action.type) {
    case CREATE_USER_START:
      return {
        ...state,
        username: action.payload,
        password: action.payload,
        primaryemail: action.payload
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
