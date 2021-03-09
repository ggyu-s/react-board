export const BOARD_LISTS_REQUEST = "BOARD_LISTS_REQUEST";
export const BOARD_LISTS_SUCCESS = "BOARD_LISTS_SUCCESS";
export const BOARD_LISTS_FAILURE = "BOARD_LISTS_FAILURE";

export const BOARD_WRITE_REQUEST = "BOARD_WRITE_REQUEST";
export const BOARD_WRITE_SUCCESS = "BOARD_WRITE_SUCCESS";
export const BOARD_WRITE_FAILURE = "BOARD_WRITE_FAILURE";

export const BOARD_LIST_REQUEST = "BOARD_LIST_REQUEST";
export const BOARD_LIST_SUCCESS = "BOARD_LIST_SUCCESS";
export const BOARD_LIST_FAILURE = "BOARD_LIST_FAILURE";

const initialState = {
  boardLists: [
    {
      id: 1,
      nickname: "ggyu",
      subject: "test",
      content: "testcontent",
      count: 0,
      date: "2021-02-26",
    },
    {
      id: 2,
      nickname: "ggyu",
      subject: "test2",
      content: "testcontent",
      count: 0,
      date: "2021-02-26",
    },
    {
      id: 3,
      nickname: "ggyu",
      subject: "test3",
      content: "testcontent",
      count: 2,
      date: "2021-02-26",
    },
  ],
  isBoardListLoading: false,
  isBoardListDone: false,
  isBoardListError: false,
  isBoardWriteLoading: false,
  isBoardWriteDone: false,
  isBoardWriteError: false,
  isBoardListOneLoading: false,
  isBoardListOneDone: false,
  isBoardListOneError: false,
  boardList: null,
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
      };
    case BOARD_LISTS_SUCCESS:
      return {
        ...state,
        isBoardListLoading: false,
        isBoardListDone: true,
        boardLists: [...state.boardLists],
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
      };
    case BOARD_LIST_SUCCESS:
      return {
        ...state,
        isBoardListOneLoading: false,
        isBoardListOneDone: true,
        boardList: state.boardLists.filter(
          (v) => v.id === Number(action.payload.id)
        ),
      };
    case BOARD_LIST_FAILURE:
      return {
        ...state,
        isBoardListOneLoading: false,
        isBoardListOneError: action.error,
      };
    default:
      return state;
  }
};

export default board;
