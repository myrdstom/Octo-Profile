import { combineReducers } from 'redux';
import profileReducer from './profileReducer';
import reposReducer from './reposReducer';


const mainReducer = combineReducers({
    profile: profileReducer,
    repos:reposReducer,
});
export default mainReducer;
