
import React, { Component } from 'react'
import { Link } from 'react-router'
import { AsyncRouteManager, InitialPreloader, GenericPreloader } from '../../components'
import { AppStore } from '../../stores'

class ViewTwo extends Component {

  render () {
    return(
      <div className="ViewTwo">
        <h1>ViewTwo screen</h1>
        <ul>
          <li><Link to="view-two/users/one" activeClassName="active">Subview one</Link></li>
          <li><Link to="view-two/users/two" activeClassName="active">Subview two</Link></li>
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


export default ViewTwo
