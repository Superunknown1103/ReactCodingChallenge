import { ERROR, CLEAR_ERRORS } from "../actions/types";

const initialState = { errorMsg: "" };

export default function(state = initialState, action) {
  switch (action.type) {
    case ERROR:
      return { ...state, errorMsg: action.error };
    case CLEAR_ERRORS:
      return { ...state };
    default:
      return state;
  }
}
