import { CLEAR_ERRORS, GET_ERRORS, GET_DATA } from "./types";
import axios from "../../axios/instance.js";

export const clearErrors = () => {
  {
    type: CLEAR_ERRORS;
  }
};

export const getData = () => {
  const request = axios.get('/')
  .then(function(response){
    console.log(response.data);
  }).catch(function(error) {
    console.log(error)
  });
};
