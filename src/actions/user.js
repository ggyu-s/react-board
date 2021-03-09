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

export const init = () => (dispatch) => {
  dispatch({ type: VAR_INIT });
};

export const addUser = (info) => async (dispatch) => {
  dispatch({ type: USER_JOIN_REQUEST });
  try {
    //   const result = await axios.post();
    setTimeout(() => {
      dispatch(info);
      console.log(info);
    }, 3000);
  } catch (err) {
    console.error(err);
    dispatch({
      type: USER_JOIN_FAILURE,
      error: err,
    });
  }
};

export const login = (info) => async (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST });
  try {
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
