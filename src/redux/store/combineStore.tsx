import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/mainReducer';
import { rootSaga } from '../Sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const initialState = {};
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
