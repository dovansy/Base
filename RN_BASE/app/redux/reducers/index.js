import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import { RESET } from "../actions/type";
import HomeReducer from "./HomeReducer";
import UserInfoReducer from "./UserInfoReducer";
import ProductReducer from "./ProductReducer";

appReducer = combineReducers({
  userReducer: UserReducer,
  homeReducer: HomeReducer,
  userInfoReducer: UserInfoReducer,
  productReducer: ProductReducer
});

const initialState = appReducer({}, {})

export default rootReducer = (state, action) => {
  if (action.type === RESET) {
    state = initialState
  }

  return appReducer(state, action)
}
