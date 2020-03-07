import { REQUEST_USERINFO, REQUEST_USERINFO_FAIL, REQUEST_USERINFO_SUCCES } from "../actions/type";

const initState = {
  isLoading: false,
  error: null,
  data: {}
}

export default function (state = initState, action) {
  switch (action.type) {
    case REQUEST_USERINFO:
      return {
        ...state,
        isLoading: true
      }
    case REQUEST_USERINFO_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    case REQUEST_USERINFO_SUCCES:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }
    default:
      return state;
  }
}
