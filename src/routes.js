import {Route, IndexRoute} from 'react-router'
import App from './components/handlers/App'
import Home from './components/handlers/Home'
import About from './components/handlers/About'
import NotFound from './components/handlers/NotFound'
import React from 'react'

module.exports = <Route path="/" component={App}>
  <IndexRoute component={Home}/>
  <Route path="about" component={About}/>
  <Route path="*" component={NotFound}/>
</Route>
