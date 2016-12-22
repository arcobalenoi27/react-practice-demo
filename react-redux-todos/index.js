import App from './components/App'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store/config'
import React from 'react'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
