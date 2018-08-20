import { CLEAR_ERRORS, GET_ERRORS, GET_DATA, UPDATE_DATA } from "./types";
import axios from "../../axios/instance.js";

export const clearErrors = () => {
  {
    type: CLEAR_ERRORS;
  }
};

export const getData = () => async dispatch => {
  try {
  const res = axios.get('/')
  dispatch({
    type: UPDATE_DATA,
    payload: res.data
  });
} catch (err) {
  dispatch({
    type: GET_ERRORS,
    payload: err.response.data
  })
}
};
