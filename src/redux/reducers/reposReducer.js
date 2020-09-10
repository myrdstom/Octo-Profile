import { FETCH_REPOS, PROFILE_LOADING } from '../actions/types';

const initialState = {
    repos:null,
    loading: false
};

const reposReducer = (state = initialState, action) =>{
    switch(action.type) {
        case PROFILE_LOADING:
            return {
                ...state,
                loading: true,
            };
        case FETCH_REPOS:
            return {
                ...state,
                repos: action.payload,
                loading: false,
            };
        default:
            return state;
    }

};

export  default reposReducer;