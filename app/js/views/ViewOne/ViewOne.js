
import React, { Component } from 'react'
import { Link } from 'react-router'
import { AsyncRouteManager, InitialPreloader, GenericPreloader } from '../../components'
import { AppStore } from '../../stores'

class ViewOne extends Component {

  render () {
    return(
      <div className="ViewOne">
        <h1>ViewOne screen</h1>
        <ul>
          <li><Link to="view-one/tasks/one" activeClassName="active">Subview one</Link></li>
          <li><Link to="view-one/tasks/two" activeClassName="active">Subview two</Link></li>
        </ul>
        <AsyncRouteManager componentDataHandlerMethod={ AppStore.componentDataHandler }
                           initialPreloader={ InitialPreloader }
                           transitionPreloader={ GenericPreloader }
                           transition={ false }
                           transitionTimeOut={ 200 } >
          { this.props.children }
        </AsyncRouteManager>
      </div>
    )
  }
}


export default ViewOne
