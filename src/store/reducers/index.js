import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import dataReducer from "./dataReducer";

export default combineReducers({
  data: dataReducer,
  errors: errorsReducer
});
