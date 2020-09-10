export const GET_PROFILE = 'GET_PROFILE';
export const GET_REPOS = 'GET_REPOS';
export const PROFILE_LOADING = 'PROFILE_LOADING';
export const FETCH_PROFILE = 'FETCH_PROFILE';
export const FETCH_REPOS = 'FETCH_REPOS';


export const setProfile = (username) => ({
    type: GET_PROFILE,
    payload: username
});

export const setRepos = (username) => ({
    type: GET_REPOS,
    payload: username
});

