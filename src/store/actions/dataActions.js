import { CLEAR_ERRORS, ERROR, GET_DATA, UPDATE_DATA, LOADING } from "./types";
import axios from "../../axios/instance.js";
import store from "../../store";

export const clearErrors = () => {
  {
    type: CLEAR_ERRORS;
  }
};

const changeTask = (newValue, id) => ({
  type: 'CHANGE_VALUE',
  payload: {
    newValue,
    id,
  }
})

const filterItems = (value) => ({
  type: 'FILTER_ITEMS',
  payload: value,
});

export const getData = () => async dispatch => {
  dispatch({
    type: LOADING,
  });
  const res = await axios.get('/');
  console.log(res);

  if (res.err) {
    dispatch({
      type: ERROR,
      error: res.err
    })
  } else {
    dispatch({
      type: GET_DATA,
      payload: res.data
    });
  }
};

export const checkData = () => async dispatch => {
  store.getState();
}
