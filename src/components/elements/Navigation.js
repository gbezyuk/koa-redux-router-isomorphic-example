import React from 'react'
import {Link, IndexLink} from 'react-router'
if (process.env.IS_BUNDLING_FOR_BROWSER) {
  require('../../stylesheets/navigation.styl')
}

export default class Navigation extends React.Component {
  render () {
    return <div id="navigation">
      {/*
        there should be IndexLink for Home instead, but it causes a bug
        <IndexLink to='/' activeClassName="active">Home</IndexLink>
       */}
      <Link to='/' activeClassName="active">Home</Link>
      <Link to='/about/' activeClassName="active">About Us</Link>
    </div>
  }
}
