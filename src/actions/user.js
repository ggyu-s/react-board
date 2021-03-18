import axios from "axios";
import {
  USER_JOIN_FAILURE,
  USER_JOIN_REQUEST,
  USER_JOIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
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
    const result = await $.post("/users/login", info.payload);
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${result.data.result.token}`;
    // window.document.cookies = `ACCESS_TOKEN=${result.data.result.reToken}; path=/`;
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: {
        id: result.data.result.id,
        nickname: result.data.result.nickname,
      },
    });
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
    const result = await $.get("/users/logout");
    axios.defaults.headers.common["Authorization"] = "";
    dispatch({ type: USER_LOGOUT_SUCCESS });
  } catch (err) {
    dispatch({
      type: USER_LOGOUT_FAILURE,
      error: err,
    });
  }
};

export const userCheck = () => async (dispatch) => {
  try {
    const result = await $.get("/users/authentication");
    // axios.defaults.headers.common[
    //   "Authorization"
    // ] = `Bearer ${result.data.result.token}`;
    console.log(result);
    dispatch({ type: USER_LOGIN_SUCCESS, payload: result.data.data });
  } catch (err) {
    dispatch({
      type: USER_LOGOUT_FAILURE,
      error: err,
    });
  }
};
