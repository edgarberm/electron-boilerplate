

import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import App from '../App'
import Launch from '../views/Launch'
import Section from '../views/Section'


const routes = (
  <Router history={ hashHistory } >
    <Route path="/" component={ App } >
      <IndexRoute component={ Launch } />
      <Route path="section" component={ Section } />
    </Route>
  </Router>
)

export default routes
