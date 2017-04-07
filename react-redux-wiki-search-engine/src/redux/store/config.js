import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import combineReducers from '../reducers/index'
import {crashReporter} from '../middlewares/index'


const store = createStore( combineReducers, {}, compose(
      applyMiddleware( createLogger(), crashReporter, thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

export default store;
