import {
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL
} from "../actions/SignupAction";

const newUserState = () => ({
  username: "",
  password: "",
  primaryemail: ""
});

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
