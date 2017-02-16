

import React, { Component } from 'react'
import { Link } from 'react-router'
import { AsyncRouteManager, InitialPreloader, GenericPreloader } from './components'
import { AppStore } from './stores'


class App extends Component {

  constructor (...args) {
    super(...args)
  }


  render () {
    const { children } = this.props

    return(
      <div>
        <nav>
          <ul>
            <li><Link to="/">Main</Link></li>
            <li><Link to="section">Section</Link></li>
          </ul>
        </nav>
        <br />
        <br />
        <h1>Electron® app</h1>
        <AsyncRouteManager componentDataHandlerMethod={ AppStore.componentDataHandler }
                           initialPreloader={ InitialPreloader }
                           transitionPreloader={ GenericPreloader }
                           transition={ true }
                           transitionTimeOut={ 200 } >
          { children }
        </AsyncRouteManager>
      </div>
    )
  }
}


export default App
