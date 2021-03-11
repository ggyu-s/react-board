// import axios from "axios";
import {
  USER_JOIN_FAILURE,
  USER_JOIN_REQUEST,
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGOUT_FAILURE,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  VAR_INIT,
} from "../reducers/user";
import ApiManager from "../utils/APIManager";
const $ = new ApiManager();

export const init = () => (dispatch) => {
  dispatch({ type: VAR_INIT });
};

export const addUser = (info) => async (dispatch) => {
  try {
    dispatch({ type: USER_JOIN_REQUEST });
    const result = await $.post("/user/join", info.payload);
    if (result.status === 500) {
      console.log(result);
      dispatch({
        type: USER_JOIN_FAILURE,
        error: result.message.response.data,
      });
    } else {
      dispatch(info);
    }
  } catch (err) {
    console.error(err);
    dispatch({
      type: USER_JOIN_FAILURE,
      error: err,
    });
  }
};

export const login = (info) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    setTimeout(() => dispatch(info), 3000);
  } catch (err) {
    dispatch({ type: USER_LOGIN_FAILURE, error: err });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: USER_LOGOUT_REQUEST });
  try {
    dispatch({ type: USER_LOGOUT_SUCCESS });
  } catch (err) {
    dispatch({
      type: USER_LOGOUT_FAILURE,
      error: err,
    });
  }
};
