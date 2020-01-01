import {all} from "redux-saga/effects";

import articles from "./articles/sagas";

export default function* rootSaga() {
    yield all([
        articles(),
    ]);
};