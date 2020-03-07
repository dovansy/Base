import {
  watchHomeData,
  watchUserInfo,
  watchProduct,
} from "./NetworkSaga";

export default function* rootSaga() {
  yield watchHomeData;
  yield watchUserInfo;
  yield watchProduct;
}
