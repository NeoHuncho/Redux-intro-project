import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'// dont need to put ./reducers/index.js as it assumes it bc it is index

const initialState={};

const middleware = [thunk];

const store= createStore(rootReducer, initialState, applyMiddleware(...middleware));

export default store;