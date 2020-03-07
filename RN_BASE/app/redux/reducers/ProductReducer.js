import { REQUEST_PRODUCT, REQUEST_PRODUCT_FAIL, REQUEST_PRODUCT_SUCCES } from "../actions/type";

const initState = {
  isLoading: false,
  error: null,
  data: {}
}

export default function (state = initState, action) {
  switch (action.type) {
    case REQUEST_PRODUCT:
      return {
        ...state,
        isLoading: true
      }
    case REQUEST_PRODUCT_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    case REQUEST_PRODUCT_SUCCES:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }
    default:
      return state;
  }
}