// import axios from "axios";
import {
  USER_JOIN_FAILURE,
  USER_JOIN_REQUEST,
  USER_JOIN_SUCCESS,
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
    await $.post("/users", info.payload);
    dispatch({
      type: USER_JOIN_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: USER_JOIN_FAILURE,
      error: error.message.response.data.data,
    });
  }
};

export const login = (info) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    await $.post("/users/login", info.payload);
    dispatch(info);
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAILURE,
      error: error.message.response.data.data,
    });
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
