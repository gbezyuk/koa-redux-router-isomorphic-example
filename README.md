# Koa-Redux-Router-Isomorphic-Example
(https://github.com/gbezyuk/koa-redux-router-isomorphic-example)
A simple example of a isomorphic (universal) javascript application using Koa, React-Router, Redux and Redux-Router.
For version without redux and redux-router see (https://github.com/gbezyuk/koa-react-router-isomorphic-example).

## Example
http://koa-redux-router-isomorphic-example.gbezyuk.ru:3031

## Development Setup
```
# npm install -g webpack
npm install
webpack
babel-node src/server.js
# and go to localhost:3000
```

## Features
* Three routes: index, about, 404
* Server-side rendering using Koa
* Asset bundling using WebPack
* ES6 with Babel
* Redux-based state management
* Redux-Router for linking Redux and React-Router

## Known Issues
* Home link is always active. IndexLink usage is causing application failure, see [Navigation.js](src/components/elements/Navigation.js)
