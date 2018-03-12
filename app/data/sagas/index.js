import { all } from 'redux-saga/effects';
import loginFlow from './flows/login';

export default function* rootSaga() {
    yield all([
        loginFlow()
    ]);
}