import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { GET_PROFILE, PROFILE_LOADING, FETCH_PROFILE } from '../actions/types';
import { baseUrl, clientId, clientSecret } from '../../config/config';
import { ResponseGenerator } from '../../helpers/globalInterfaces';

interface Payload {
    payload: object;
}

const getProfile = async (url: string) => {
    const data = await axios.get(url);
    return data.data;
};

function* loadProfilesFlow(payload: Payload) {
    try {
        yield put({ type: PROFILE_LOADING });
        const url = `${baseUrl}/${payload.payload}?client_id=${clientId}&client_secret=${clientSecret}`;
        const profileData: ResponseGenerator = yield call(getProfile, url);
        yield put({ type: FETCH_PROFILE, payload: profileData });
    } catch (e) {
        console.warn(e, 'the error');
    }
}

export function* getProfileWatcher() {
    yield takeLatest(GET_PROFILE as any, loadProfilesFlow);
}
