import { combineReducers } from 'redux';
import profileReducer from './profileReducer';

const mainReducer = combineReducers({
    profile: profileReducer,
});
export default mainReducer;
