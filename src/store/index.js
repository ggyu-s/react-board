import { combineReducers } from "redux";
import user from "../reducers/user";
import board from "../reducers/board";
const rootReducer = combineReducers({
  user,
  board,
});
export default rootReducer;
