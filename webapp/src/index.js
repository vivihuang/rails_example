import 'babel-polyfill'
import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import appStore from './stores/index'
import routes from './routes/index'

const history = syncHistoryWithStore(browserHistory, appStore)

ReactDom.render(
  <Provider store={appStore}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
)
