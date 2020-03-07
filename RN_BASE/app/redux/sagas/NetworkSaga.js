import { put, takeEvery, call } from "redux-saga/effects";
import {
  REQUEST_HOME,
  REQUEST_HOME_SUCCES,
  REQUEST_HOME_FAIL,
  REQUEST_USERINFO,
  REQUEST_USERINFO_SUCCES,
  REQUEST_USERINFO_FAIL,
  REQUEST_PRODUCT,
  REQUEST_PRODUCT_FAIL,
  REQUEST_PRODUCT_SUCCES
} from "../actions/type";

import { requestHomeData, requestUserInfor, requestProductCategory } from '@api';

//gethomedata
export function* getHomeData(payload) {
  try {
    const res = yield call (requestHomeData, payload.payload);
    yield put ({
      type: REQUEST_HOME_SUCCES,
      payload: res
    });
  } catch (error) {
    yield put ({
      type: REQUEST_HOME_FAIL,
      payload: error
    });
  }
}

//get user info
export function* getUserInfo (payload) {
  try {
    const res = yield call (requestUserInfor, payload.payload)
    yield put ({
      type: REQUEST_USERINFO_SUCCES,
      payload: res
    });
  } catch (error) {
    yield put ({
      type: REQUEST_USERINFO_FAIL,
      payload: error
    });
  }
}

// get category product
export function* getProduct (payload){
  try {
    const res = yield call (requestProductCategory, payload.payload)
    yield put ({
      type: REQUEST_PRODUCT_SUCCES,
      payload: res
    });
  } catch (error) {
    yield put ({
      type: REQUEST_PRODUCT_FAIL,
      payload: error
    });
  }
}

export const watchHomeData = takeEvery(REQUEST_HOME, getHomeData);
export const watchUserInfo = takeEvery(REQUEST_USERINFO, getUserInfo);
export const watchProduct = takeEvery(REQUEST_PRODUCT, getProduct);


