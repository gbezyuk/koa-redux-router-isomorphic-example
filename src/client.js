import React from 'react'
import Router from 'react-router'
import createHistory from 'history/lib/createBrowserHistory'
import { render } from 'react-dom'
import routes from './routes'

window.initApp = function () {
  var history = createHistory()
  render(<Router history={history}>{routes}</Router>, document.getElementById('root'))
}
