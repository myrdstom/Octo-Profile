import axios from 'axios';

import { GET_PROFILE, PROFILE_LOADING } from './types';

import { baseUrl, clientId, clientSecret } from '../../config/config';

export const getProfile = user => dispatch => {
    dispatch(setProfileLoading());
    axios
        .get(
            `${baseUrl}/myrdstom?client_id=${clientId}&client_secret=${clientSecret}`,
        )
        .then(res =>
            dispatch({
                type: GET_PROFILE,
                payload: res.data,
            }),
        )
        .catch(err =>
            dispatch({
                type: GET_PROFILE,
                payload: {},
            }),
        );
};

/**
 * @desc Profile Loading
 */

export const setProfileLoading = () => {
    return {
        type: PROFILE_LOADING,
    };
};
