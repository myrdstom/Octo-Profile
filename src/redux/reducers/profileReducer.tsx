import { FETCH_PROFILE, PROFILE_LOADING } from '../actions/types';
import { BaseAction } from './baseAction';

export const initialState = {
    profile: null,
    loading: false
};

const profileReducer = (state = initialState, action: BaseAction) => {
    switch (action.type) {
        case PROFILE_LOADING:
            return {
                ...state,
                loading: true
            };
        case FETCH_PROFILE:
            return {
                ...state,
                profile: action.payload,
                loading: false
            };

        default:
            return state;
    }
};

export default profileReducer;
