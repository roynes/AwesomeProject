import { takeLatest, all, call, select, takeEvery } from 'redux-saga/effects';
import { actionTypes } from './loginForm';

const { SAVE_EMAIL, SAVE_PASSWORD } = actionTypes;

function* handleUpdate(comment, action) {
  yield console.log(comment, action);
}

function* handleEmailUpdates() {
  yield takeLatest(SAVE_EMAIL, handleUpdate, 'SAGA_EMAIL_UPDATE');
}

function* handlePasswordUpdates() {
  yield takeLatest(SAVE_PASSWORD, handleUpdate, 'SAGA_PASSWORD_UPDATE');
}

const mainSaga = function* mainSaga() {
  // yield all([
  //   call(handleEmailUpdates),
  //   call(handlePasswordUpdates)
  // ])

  //TODO: edit saga here

  yield takeEvery('*', function* logger(action) {
    const state = yield select();

    console.log('SAGA')
    console.log('action', action)
    console.log('state after', state)
  });
}

export default mainSaga;