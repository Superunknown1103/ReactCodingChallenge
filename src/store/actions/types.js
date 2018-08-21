export const ERROR = "ERROR";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const GET_DATA = "GET_DATA";
export const UPDATE_DATA = "UPDATE_DATA";
export const LOADING = "LOADING";

const createRequestType = (type) => ({
    request: `REQUEST_${type}`,
    success: "SUCCESS",
    failure: "FAILURE",
});
