import {
  BOARD_LISTS_FAILURE,
  BOARD_LISTS_REQUEST,
  BOARD_LISTS_SUCCESS,
  BOARD_LIST_FAILURE,
  BOARD_LIST_REQUEST,
  BOARD_WRITE_FAILURE,
  BOARD_WRITE_REQUEST,
} from "../reducers/board";

export const boardLists = () => async (dispatch) => {
  try {
    dispatch({ type: BOARD_LISTS_REQUEST });
    setTimeout(() => {
      dispatch({ type: BOARD_LISTS_SUCCESS });
    }, 2000);
  } catch (err) {
    dispatch({ type: BOARD_LISTS_FAILURE, error: err });
  }
};

export const boardWrite = (info) => async (dispatch) => {
  try {
    dispatch({ type: BOARD_WRITE_REQUEST });
    setTimeout(() => {
      dispatch(info);
    }, 3000);
  } catch (err) {
    dispatch({ type: BOARD_WRITE_FAILURE, error: err });
  }
};

export const boardListItem = (id) => async (dispatch) => {
  try {
    dispatch({ type: BOARD_LIST_REQUEST });
    console.log(id);
    setTimeout(() => {
      dispatch(id);
    }, 3000);
  } catch (err) {
    dispatch({ type: BOARD_LIST_FAILURE, error: err });
  }
};
