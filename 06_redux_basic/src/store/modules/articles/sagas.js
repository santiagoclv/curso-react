import {all, call, put, takeEvery} from "redux-saga/effects";
import axios from 'axios';
import {
    GET_LATEST,
    getLatestSuccess,
    getLatestFailure,
    GET_OTHER,
    getOtherSuccess,
    getOtherFailure,
    GET_ARTICLE_DATA,
    getArticleDataSuccess,
    getArticleDataFailure,
    HANDLE_LIKES_ARTICLE,
    handleArticleLikesSuccess,
    handleArticleLikesFailure,
} from "./actions";

const URL_ARTICLES = `${process.env.REACT_APP_URL_ARTICLES}/articles`;

export function* getLatest() {
    try {
        const { data } = yield call(axios.get, `${URL_ARTICLES}?_order=desc&_end=2`);
        yield put(getLatestSuccess(data));
    } catch (error) {
        yield put(getLatestFailure(error));
    }
}

export function* watchGetLatest() {
    yield takeEvery(GET_LATEST, getLatest);
}

export function* getOther() {
    try {
        const {data} = yield call(axios.get, `${URL_ARTICLES}?_order=desc&_start=3&_end=15`);
        yield put(getOtherSuccess(data));
    } catch (error) {
        yield put(getOtherFailure(error));
    }
}

export function* watchGetOther() {
    yield takeEvery(GET_OTHER, getOther);
}

export function* getArticleData(action) {
    const {id} = action.payload;
    try {
        const {data} = yield call(axios.get, `${URL_ARTICLES}?id=${id}`);
        if(!data[0]){
            yield put(getArticleDataFailure("Not found"));
        }
        yield put(getArticleDataSuccess(data[0]));
    } catch (error) {
        yield put(getArticleDataFailure(error));
    }
}

export function* watchGetArticleData() {
    yield takeEvery(GET_ARTICLE_DATA, getArticleData);
}

export function* handleArticleLikes(action) {
    const {newLikes, id} = action.payload;
    const config = {
        method: 'PATCH',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        }
    };
    const data = JSON.stringify({likes:newLikes});
    try {
        const {data: newData} = yield call(axios.patch, `${URL_ARTICLES}/${id}`, data, config);
        yield put(handleArticleLikesSuccess(newData));
    } catch (error) {
        yield put(handleArticleLikesFailure(error));
    }
}

export function* watchHandleArticleLikes() {
    yield takeEvery(HANDLE_LIKES_ARTICLE, handleArticleLikes);
}

export default function* rootSaga() {
    yield all([
        watchGetLatest(),
        watchGetOther(),
        watchGetArticleData(),
        watchHandleArticleLikes(),
    ]);
};