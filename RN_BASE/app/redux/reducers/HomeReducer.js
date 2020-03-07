import { REQUEST_HOME_SUCCES, REQUEST_HOME_FAIL, REQUEST_HOME } from "../actions/type";

const initState = {
  isLoading: false,
  error: null,
  data: {}
}

export default function (state = initState, action) {
  switch (action.type) {
    case REQUEST_HOME:
      return {
        ...state,
        isLoading: true
      }
    case REQUEST_HOME_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    case REQUEST_HOME_SUCCES:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }
    default:
      return state;
  }
}