export const BOARD_LISTS_REQUEST = "BOARD_LISTS_REQUEST";
export const BOARD_LISTS_SUCCESS = "BOARD_LISTS_SUCCESS";
export const BOARD_LISTS_FAILURE = "BOARD_LISTS_FAILURE";

export const BOARD_WRITE_REQUEST = "BOARD_WRITE_REQUEST";
export const BOARD_WRITE_SUCCESS = "BOARD_WRITE_SUCCESS";
export const BOARD_WRITE_FAILURE = "BOARD_WRITE_FAILURE";

export const BOARD_LIST_REQUEST = "BOARD_LIST_REQUEST";
export const BOARD_LIST_SUCCESS = "BOARD_LIST_SUCCESS";
export const BOARD_LIST_FAILURE = "BOARD_LIST_FAILURE";

export const BOARD_REMOVE_REQUEST = "BOARD_REMOVE_REQUEST";
export const BOARD_REMOVE_SUCCESS = "BOARD_REMOVE_SUCCESS";
export const BOARD_REMOVE_FAILURE = "BOARD_REMOVE_FAILURE";

export const BOARD_UPDATE_REQUEST = "BOARD_UPDATE_REQUEST";
export const BOARD_UPDATE_SUCCESS = "BOARD_UPDATE_SUCCESS";
export const BOARD_UPDATE_FAILURE = "BOARD_UPDATE_FAILURE";

const initialState = {
  boardLists: [],
  isBoardListLoading: false,
  isBoardListDone: false,
  isBoardListError: false,
  isBoardWriteLoading: false,
  isBoardWriteDone: false,
  isBoardWriteError: false,
  isBoardListOneLoading: false,
  isBoardListOneDone: false,
  isBoardListOneError: false,
  isBoardRemoveLoading: false,
  isBoardRemoveDone: false,
  isBoardRemoveError: false,
  isBoardUpdateLoading: false,
  isBoardUpdateDone: false,
  isBoardUpdateError: false,
  boardList: [],
};

const board = (state = initialState, action) => {
  switch (action.type) {
    case BOARD_LISTS_REQUEST:
      return {
        ...state,
        isBoardListLoading: true,
        isBoardListDone: false,
        isBoardListError: false,
        isBoardWriteDone: false,
        isBoardListRemoveDone: false,
      };
    case BOARD_LISTS_SUCCESS:
      return {
        ...state,
        isBoardListLoading: false,
        isBoardListDone: true,
        boardLists: [...action.payload],
      };
    case BOARD_LISTS_FAILURE:
      return {
        ...state,
        isBoardListLoading: false,
        isBoardListError: action.error,
      };
    case BOARD_WRITE_REQUEST:
      return {
        ...state,
        isBoardWriteLoading: true,
        isBoardWriteDone: false,
        isBoardWriteError: false,
      };
    case BOARD_WRITE_SUCCESS:
      return {
        ...state,
        isBoardWriteLoading: false,
        isBoardWriteDone: true,
        boardLists: [...state.boardLists, action.payload],
      };
    case BOARD_WRITE_FAILURE:
      return {
        ...state,
        isBoardWriteLoading: false,
        isBoardWriteError: action.error,
      };
    case BOARD_LIST_REQUEST:
      return {
        ...state,
        isBoardListOneLoading: true,
        isBoardListOneDone: false,
        isBoardListOneError: false,
        isBoardListUpdateDone: false,
      };
    case BOARD_LIST_SUCCESS:
      return {
        ...state,
        isBoardListOneLoading: false,
        isBoardListOneDone: true,
        boardList: action.payload,
      };
    case BOARD_LIST_FAILURE:
      return {
        ...state,
        isBoardListOneLoading: false,
        isBoardListOneError: action.error,
      };
    case BOARD_REMOVE_REQUEST:
      return {
        ...state,
        isBoardListRemoveLoading: true,
        isBoardListRemoveDone: false,
        isBoardListRemoveError: false,
      };
    case BOARD_REMOVE_SUCCESS:
      return {
        ...state,
        isBoardListRemoveLoading: false,
        isBoardListRemoveDone: true,
        boardList: [],
      };
    case BOARD_REMOVE_FAILURE:
      return {
        ...state,
        isBoardListRemoveLoading: false,
        isBoardListRemoveError: action.error,
      };
    case BOARD_UPDATE_REQUEST:
      return {
        ...state,
        isBoardListUpdateLoading: true,
        isBoardListUpdateDone: false,
        isBoardListUpdateError: false,
      };
    case BOARD_UPDATE_SUCCESS:
      return {
        ...state,
        isBoardListUpdateLoading: false,
        isBoardListUpdateDone: true,
        boardLists: [],
      };
    case BOARD_UPDATE_FAILURE:
      return {
        ...state,
        isBoardListUpdateLoading: false,
        isBoardListUpdateError: action.error,
      };
    default:
      return state;
  }
};

export default board;
