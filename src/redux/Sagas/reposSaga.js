import { takeLatest, call, put } from 'redux-saga/effects';
import { FETCH_REPOS, GET_REPOS, PROFILE_LOADING } from '../actions/types';
import axios from 'axios';
import { baseUrl } from '../../config/config';

const getRepos = async url => {
    const data = await axios.get(url);
    return data.data;
};

function* loadReposFlow( payload ) {
    try {
        yield put({ type: PROFILE_LOADING });
        const url = `${baseUrl}/${payload.payload}/repos?per_page=50`;
        const data = yield call(getRepos, url);
        yield put({ type: FETCH_REPOS, payload: data });
    } catch (e) {
        console.log(e, 'the error');
    }
}

export function* getRepoWatcher() {
    yield takeLatest(GET_REPOS, loadReposFlow);
}
