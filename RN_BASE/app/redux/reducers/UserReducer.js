import { USERNAME_CHANGED, PASSWORD_CHANGED, LOGIN_SUCCES } from "../actions/type";

const initState = {
  username: '0123456789',
  password: '0123456789'
}

export default function (state = initState, action) {
  switch (action.type) {
    case USERNAME_CHANGED:
      return {
        ...state,
        username: action.payload
      }
    case PASSWORD_CHANGED:
      return {
        ...state,
        password: action.payload
      }
    case LOGIN_SUCCES:
      return {
        ...state,
        password: '',
        username: '',
        userInfo: action.payload
      }
    default:
      return state;
  }
}