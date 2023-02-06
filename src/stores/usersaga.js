import { take, takeEvery, takeLatest, put, all, delay, fork, call } from "redux-saga/effects"

import { createUserError, createUserSuccess, deleteUserError, deleteUserSuccess, loadUserError, loadUserSuccess, updateUserError, updateUserSuccess } from "./actions/actions"
import * as types from "./actions/actionType"

import { createUsersApi, loadUsersApi, deteteUsersApi, updateUsersApi } from "./api"
//loading
export function* onLoadUsersStartAsync() {
    try {
        const response = yield call(loadUsersApi);
        if (response.status === 200) {
            yield delay(500);
            yield put(loadUserSuccess(response.data.users))
        }
    } catch (error) {
        yield put(loadUserError(error.response.data.users))
    }
}

export function* onLoadUsers() {
    yield takeEvery(types.LOAD_USERS_START, onLoadUsersStartAsync);
}

//ADD
export function* onCreateUsersStartAsync({ payload }) {
    try {
        const response = yield call(createUsersApi, payload);
        if (response.status === 200) {
            yield put(createUserSuccess(response.data.users))
        }
    } catch (error) {
        yield put(createUserError(error.response.data.users))
    }
}

export function* onCreateUsers() {
    yield takeLatest(types.CREATE_USERS_START, onCreateUsersStartAsync);
}
//Delate
function* onDeleteUsersStartAsync(userId) {
    try {
        const response = yield call(deteteUsersApi, userId);
        if (response.status === 200) {
            yield put(deleteUserSuccess(userId))
        }
    } catch (error) {
        yield put(deleteUserError(error.response.data.users))
    }
}

function* onDeleteUsers() {
    while (true) {
        const { payload: userId } = yield take(types.DELETE_USERS_START);
        yield call(onDeleteUsersStartAsync, userId);
    }
}
//Update
export function* onUpdateUsersStartAsync({ payload }) {
    try {
        const response = yield call(updateUsersApi, payload);
        if (response.status === 200) {
            yield put(updateUserSuccess(response.data.users))
        }
    } catch (error) {
        yield put(updateUserError(error.response.data.users))
    }
}

export function* onUpdateUsers() {
    yield takeLatest(types.UPDATE_USERS_START, onUpdateUsersStartAsync);
}

const userSaga = [
    fork(onLoadUsers),
    fork(onCreateUsers),
    fork(onDeleteUsers),
    fork(onUpdateUsers),
];

export default function* rootSaga() {
    yield all([...userSaga]);
}