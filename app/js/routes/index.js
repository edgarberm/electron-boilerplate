

import React from 'react'
import { Router, Route, Redirect, hashHistory, IndexRoute } from 'react-router'

import App from '../App'
import { ViewOne, ViewTwo, SubviewOne, SubviewTwo, Launch } from '../views'


const routes = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Launch } />
      <Route path="view-one" component={ ViewOne }>
        <IndexRoute component={ Launch } />
        <Route path="tasks/one" component={ SubviewOne } />
        <Route path="tasks/two" component={ SubviewTwo } />
      </Route>

      <Route path="view-two" component={ ViewTwo }>
        <IndexRoute component={ Launch } />
        <Route path="users/one" component={ SubviewOne } />
        <Route path="users/two" component={ SubviewTwo } />
      </Route>
    </Route>
  </Router>
)

export default routes
