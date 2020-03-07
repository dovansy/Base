import {
  GET_USER, USERNAME_CHANGED, PASSWORD_CHANGED, LOGIN_SUCCES,
  GET_NAMEUSER, NAMEINFO_CHANGED, REQUEST_HOME, REQUEST_HOME_FAIL,
  REQUEST_HOME_SUCCES, REQUEST_USERINFO_SUCCES, REQUEST_USERINFO_FAIL,
  REQUEST_USERINFO, UPDATE_USERINFO, UPDATE_USERINFO_FAIL, UPDATE_USERINFO_SUCCES,
  REQUEST_PRODUCT_SUCCES, REQUEST_PRODUCT_FAIL, REQUEST_PRODUCT
} from "./type";

export const getUserInfoAction = () => ({
  type: GET_USER,
  payload: {}
});

export const userNameChange = (text) => ({
  type: USERNAME_CHANGED,
  payload: text
});

export const passWordChange = (text) => ({
  type: PASSWORD_CHANGED,
  payload: text
});

export const loginSucces = (userInfo) => ({
  type: LOGIN_SUCCES,
  payload: userInfo
});

export const getNameUser = (text) => ({
  type: GET_NAMEUSER,
  payload: text
});

export const nameInfoChange = (text) => ({
  type: NAMEINFO_CHANGED,
  payload: text
});


// home 
export const requestHome = (payload) => ({
  type: REQUEST_HOME,
  payload: payload
});

export const requestHomeFail = (error) => ({
  type: REQUEST_HOME_FAIL,
  payload: error
});

export const requestHomeSucces = (payload) => ({
  type: REQUEST_HOME_SUCCES,
  payload: payload
});

// user info
export const requestUser = (payload) => ({
  type: REQUEST_USERINFO,
  payload: payload
});

export const requestUserInfoFail = (error) => ({
  type: REQUEST_USERINFO_FAIL,
  payload: error
});

export const requestUserInfoSucces = (payload) => ({
  type: REQUEST_USERINFO_SUCCES,
  payload: payload
});

// update user info
export const updateUserInfo = (payload) => ({
  type: UPDATE_USERINFO,
  payload: payload
});

export const updateUserInfoFail = (error) => ({
  type: UPDATE_USERINFO_FAIL,
  payload: error
});

export const updateUserInfoSucces = (payload) => ({
  type: UPDATE_USERINFO_SUCCES,
  payload: payload
});

// category product
export const requestProduct = (payload) => ({
  type: REQUEST_PRODUCT,
  payload: payload
});

export const requestProductFail = (error) => ({
  type: REQUEST_PRODUCT_FAIL,
  payload: error
});

export const requestProductSucces = (payload) => ({
  type: REQUEST_PRODUCT_SUCCES,
  payload: payload
});



