import { takeLatest, call, put } from 'redux-saga/effects';
import { GET_PROFILE, PROFILE_LOADING, FETCH_PROFILE } from '../actions/types';
import axios from 'axios';
import { baseUrl, clientId, clientSecret } from '../../config/config';

const getProfile = async url => {
    const data = await axios.get(url);
    return data.data;
};

function* loadProfilesFlow(payload ) {
    try {
        yield put({ type: PROFILE_LOADING });
        const url = `${baseUrl}/${payload.payload}?client_id=${clientId}&client_secret=${clientSecret}`;
        const data = yield call(getProfile, url);
        yield put({ type: FETCH_PROFILE, payload: data });
    } catch (e) {
        console.log(e, 'the error');
    }
}

export function* getProfileWatcher() {
    yield takeLatest(GET_PROFILE, loadProfilesFlow);
}
