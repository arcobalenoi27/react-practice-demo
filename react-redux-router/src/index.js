import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import store from './redux/store/config'
import App from './components/App'
import Examples from './components/Examples'
import Examples02 from './components/Examples02'
import Todos from './components/Todos'
import Youtube from './components/Youtube'


// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Examples}/>
        <Route path="/ex02" component={Examples02}/>
        <Route path="/ex02/:name" component={Examples02}/>
        <Route path="/todos" component={Todos}/>
        <Route path="/youtube" component={Youtube}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
