export const VAR_INIT = "VAR_INIT";

export const USER_JOIN_REQUEST = "USER_JOIN_REQUEST";
export const USER_JOIN_SUCCESS = "USER_JOIN_SUCCESS";
export const USER_JOIN_FAILURE = "USER_JOIN_FAILURE";

export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";

export const USER_LOGOUT_REQUEST = "USER_LOGOUT_REQUEST";
export const USER_LOGOUT_SUCCESS = "USER_LOGOUT_SUCCESS";
export const USER_LOGOUT_FAILURE = "USER_LOGOUT_FAILURE";

const initialState = {
  userJoinLoading: false,
  userJoinDone: false,
  userJoinError: false,
  isLogInUser: null,
  isLogInLoading: false,
  isLogInDone: false,
  isLogInError: false,
  isLogOutLoading: false,
  isLogOutDone: false,
  isLogOutError: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case VAR_INIT:
      return {
        ...state,
        userJoinDone: false,
        isLogInDone: false,
        isLogOutDone: false,
      };
    case USER_JOIN_REQUEST:
      return {
        ...state,
        userJoinLoading: true,
        userJoinDone: false,
        userJoinError: false,
      };
    case USER_JOIN_SUCCESS:
      return {
        ...state,
        userJoinLoading: false,
        userJoinDone: true,
      };
    case USER_JOIN_FAILURE:
      return {
        ...state,
        userJoinLoading: false,
        userJoinError: true,
      };
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        isLogInLoading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLogInLoading: false,
        isLogInUser: action.payload,
        isLogInDone: true,
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        isLogInLoading: false,
        isLogInError: action.error,
      };
    case USER_LOGOUT_REQUEST:
      return {
        ...state,
        isLogOutLoading: true,
      };
    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        isLogOutLoading: false,
        isLogInUser: null,
        isLogOutDone: true,
      };
    case USER_LOGOUT_FAILURE:
      return {
        ...state,
        isLogOutLoading: false,
        isLogOutError: action.error,
      };
    default:
      return state;
  }
};

export default user;
