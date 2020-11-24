import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_REPOS, GET_REPOS, PROFILE_LOADING } from '../actions/types';
import { baseUrl } from '../../config/config';
import { ResponseGenerator } from '../../helpers/globalInterfaces';

interface Payload {
    payload: object;
}

const getRepos = async (url: string) => {
    const data = await axios.get(url);
    return data.data;
};

function* loadReposFlow(payload: Payload) {
    try {
        yield put({ type: PROFILE_LOADING });
        const url = `${baseUrl}/${payload.payload}/repos?per_page=50`;
        const repoData: ResponseGenerator = yield call(getRepos, url);
        yield put({ type: FETCH_REPOS, payload: repoData });
    } catch (e) {
        console.warn(e, 'the error');
    }
}

export function* getRepoWatcher() {
    yield takeLatest(GET_REPOS as any, loadReposFlow);
}
