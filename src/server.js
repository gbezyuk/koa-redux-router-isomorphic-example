import routes from './routes'
import koa from 'koa'
var serve = require('koa-static-folder');
import createLocation from 'history/lib/createLocation'
import { RoutingContext, match } from 'react-router'
import { renderToString } from 'react-dom/server'
import React from 'react'
import NotFound from './components/handlers/NotFound'
import pkg from '../package'

var app = koa();

app.use(serve('./dist'))

app.use(function *(){
  let location = createLocation(this.req.url)

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      this.redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (error) {
      this.throw(500, error.message)
    } else if (renderProps == null) {
      this.throw(404, 'Not Found')
    } else {
      // set proper HTTP code for if matched route wasn't found
      if (renderProps.components.indexOf(NotFound) != -1) {
        this.status = 404
      }
      this.response.body = '<html><head><title>Example Koa + React-Router App</title><script src="/dist/bundle.js"></script></head><body>' +
        renderToString(<RoutingContext {...renderProps}/>)
        + '</body></html>'
    }
  })
});

app.listen(3000, () => { console.log(pkg.name + ' is listening on port 3000') } )
