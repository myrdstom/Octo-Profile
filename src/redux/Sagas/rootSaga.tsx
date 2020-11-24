import { all, fork } from 'redux-saga/effects';
import { getProfileWatcher } from './profileSaga';
import { getRepoWatcher } from './reposSaga';

export function* rootSaga() {
    yield all([
        fork(getProfileWatcher),
        fork(getRepoWatcher),
    ]);
}
