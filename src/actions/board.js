import {
  BOARD_LISTS_FAILURE,
  BOARD_LISTS_REQUEST,
  BOARD_LISTS_SUCCESS,
  BOARD_LIST_FAILURE,
  BOARD_LIST_REQUEST,
  BOARD_REMOVE_FAILURE,
  BOARD_REMOVE_REQUEST,
  BOARD_UPDATE_FAILURE,
  BOARD_UPDATE_REQUEST,
  BOARD_WRITE_FAILURE,
  BOARD_WRITE_REQUEST,
} from "../reducers/board";
import ApiManager from "../utils/APIManager";
const $ = new ApiManager();

export const boardLists = () => async (dispatch) => {
  try {
    dispatch({ type: BOARD_LISTS_REQUEST });
    const result = await $.get("/board");
    console.log(result);
    dispatch({ type: BOARD_LISTS_SUCCESS, payload: result.data.data });
  } catch (err) {
    dispatch({ type: BOARD_LISTS_FAILURE, error: err });
  }
};

export const boardWrite = (info) => async (dispatch) => {
  try {
    dispatch({ type: BOARD_WRITE_REQUEST });
    await $.post("/board/write", info.payload);
    dispatch(info);
  } catch (err) {
    dispatch({ type: BOARD_WRITE_FAILURE, error: err });
  }
};

export const boardListItem = (id) => async (dispatch) => {
  try {
    dispatch({ type: BOARD_LIST_REQUEST });
    setTimeout(() => {
      dispatch(id);
    }, 3000);
  } catch (err) {
    dispatch({ type: BOARD_LIST_FAILURE, error: err });
  }
};

export const boardListRemove = (id) => async (dispatch) => {
  try {
    dispatch({ type: BOARD_REMOVE_REQUEST });
    setTimeout(() => {
      dispatch(id);
    }, 3000);
  } catch (err) {
    dispatch({ type: BOARD_REMOVE_FAILURE, error: err });
  }
};

export const boardListUpdate = (board) => async (dispatch) => {
  try {
    dispatch({ type: BOARD_UPDATE_REQUEST });
    setTimeout(() => {
      dispatch(board);
    }, 3000);
  } catch (err) {
    dispatch({ type: BOARD_UPDATE_FAILURE, error: err });
  }
};
