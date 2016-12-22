import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import{ crashReporter} from '../middlewares/index'
import combineReducer from '../reducers/index'
import DevTools from '../../containers/DevTools'


const store = createStore( combineReducer, {},compose(
    applyMiddleware(createLogger(), crashReporter, thunk),
    DevTools.instrument() //window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  export default store;
