import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import {crashReporter} from '../middlewares/index'
import combineReducers from '../reducers/index'

const store = createStore( combineReducers, {}, compose(
    applyMiddleware(createLogger(), crashReporter, thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))

export default store;
