import React from 'react'
import Navigation from '../elements/Navigation'
if (process.env.IS_BUNDLING_FOR_BROWSER) {
  require('../../stylesheets/app.styl')
}

export default class App extends React.Component {
  render () {
    return <div id="app">
      <Navigation />
      <div id="content">
        {this.props.children}
      </div>
    </div>
  }
}
