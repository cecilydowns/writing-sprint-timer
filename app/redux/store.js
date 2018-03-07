import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'remote-redux-devtools'

import devToolsEnhancer from 'remote-redux-devtools'

import reducers from './rootReducer'; //Import the root reducer

const enhancer = composeWithDevTools(applyMiddleware(thunk));


// Connect our store to the reducers
export default createStore(reducers, enhancer);