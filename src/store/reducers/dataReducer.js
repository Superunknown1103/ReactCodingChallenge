import { GET_DATA, UPDATE_DATA } from "../actions/types";

const initialState = {
  data: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        data: action.payload
      };
    case UPDATE_DATA:
      return {
        ...state,
        data: action.payload
      }
    default:
      return state;
  }
  console.log(state, action);
}
