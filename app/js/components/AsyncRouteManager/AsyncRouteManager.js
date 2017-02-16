
/*****************************************************************************
 * @class: AsyncRouteManager
 * @description: La idea tras este componente (add-on) es facilitar la precarga
 * de datos para los componentes de react-router de la manera más sencilla posible.
 * Intercepta las rutas de react-router y gestiona los datos para los componentes
 * de dichas rutas.
 *
 * @usage:
 *
 * const testConfig = {data: ['users', 'countries']}
 * const testConfig2 = {data: ['users']}
 *
 * const routes = (
 *  <Router history={ appHistory }>
 *    <Route path="/" component={ App }>
 *      <IndexRoute component={ ZoneSelection } />  // componente sin config. No se mostrará el precargador.
 *      <Route path="section" component={ Section } config={ testConfig2 } />  // Se mostrará el precargador genérico.
 *      <Route path="shop" component={ Shop } config={ testConfig } preloader={ ShopPreloader } />  // Se mostrará el precargador ShopPreloader (Stateless component).
 *    </Route>
 *  </Router>
 * )
 *
 *
 * // Se utiliza como cualquier otro HOC o add-on.
 * <AsyncRouteManager componentDataHandlerMethod={ AppStore.componentDataHandler }
 *                    initialPreloader={ InitialPreloader }
 *                    transitionPreloader={ GenericPreloader }
 *                    transition={ true }
 *                    transitionTimeOut={ 200 | @default: 600 } >
 *   { this.props.children }
 * </AsyncRouteManager>
 *****************************************************************************/

import React, { Component } from 'react'
import ReactDom from 'react-dom'
// import 'whatwg-fetch'
import { getDataAsync } from '../../utils'


class AsyncRouteManager extends Component {

  static defaultProps = {
    children: null,
    componentDataHandlerMethod: null,
    initialPreloader: null,
    transitionPreloader: null,
    transition: true,
    transitionTimeOut: 600
  }

  static propTypes = {
    children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.node),
      React.PropTypes.node,
      React.PropTypes.element
    ]),
    componentDataHandlerMethod: React.PropTypes.func.isRequired,
    initialPreloader: React.PropTypes.oneOfType([
      React.PropTypes.node,
      React.PropTypes.func
    ]),
    transitionPreloader: React.PropTypes.oneOfType([
      React.PropTypes.node,
      React.PropTypes.func
    ]),
    transition: React.PropTypes.bool,
    transitionTimeOut: React.PropTypes.number
  }

  constructor (...args) {
    super(...args)

    this.initialFetch = true
    this.fetchingData = false
    this.prevChildren = null
    this.nextChildren = null
    this.preloader = null
    this.dom = null
    this.transitioning = false
  }


  componentWillMount () {
    console.log(this.props);
    this.nextChildren = this.props.children
    // Precargador custom para cada ruta, se especifica como propiedad en el componente
    // Route preloader={ Component }
    // Si no se especifica en la ruta se utilizará el precargador inicial de AsyncRouteManager
    this.preloader = (this.nextChildren.props.route.preloader)
                      ? this.nextChildren.props.route.preloader
                      : this.props.initialPreloader

    this.checkChildrenConfigProps()
  }


  componentWillReceiveProps (nextProps) {
    // Si la nueva vista es la misma que la actual no renderizamos
    if (this.props.children.props.location.pathname === nextProps.children.props.location.pathname)
      return false

    this.prevChildren = this.nextChildren
    this.nextChildren = nextProps.children

    // Precargador custom para cada ruta, se especifica como propiedad en el componente
    // Route preloader={ Component }
    // Si no se especifica en la ruta se utilizará el precargador generico de AsyncRouteManager
    this.preloader = (this.nextChildren.props.route.preloader)
                      ? this.nextChildren.props.route.preloader
                      : this.props.transitionPreloader

    this.checkChildrenConfigProps()
  }


  async checkChildrenConfigProps () {
    let componentConfig = this.nextChildren.props.route.config
    if (componentConfig) {
      this.fetchingData = true
      // NOTE: si queremos publicar/compartir este componente debería incluir
      // el método 'getDataAsync' en el propio componente.
      await getDataAsync(this.props.componentDataHandlerMethod, componentConfig.data, this.fetchAsyncCallback.bind(this))
    } else {
      this.checkTransition()
    }
  }


  fetchAsyncCallback () {
    this.fetchingData = false
    this.checkTransition()
  }


  checkTransition () {
    if (this.initialFetch) this.initialFetch = false
    if (this.props.transition === true) {
      this.initializeTransition()
    } else {
      this.forceUpdate()
    }
  }


  initializeTransition () {
    this.transitioning = true

    this.forceUpdate(_ => {
      this.dom = ReactDom.findDOMNode(this.refs.child)
      if (this.prevChildren) {
        this.transition('out')
      } else {
        this.transition('enter')
      }
    })
  }


  transition (type) {
    // NOTE: aquí deberíamos lanzar el cambio de fondo con la misma
    // duración que la transición entre secciones en el caso de
    // finalmente controlarla desde este container.
    this.dom.classList.add(`transition-${type}`)
    const st0 = window.setTimeout(_ => {
      this.dom.classList.add(`transition-${type}-active`)
      window.clearTimeout(st0)
    }, 20)
    const st1 = window.setTimeout(_ => {
      // NOTE: reseteamos la posición del scroll antes de renderizar
      // el nuevo componente e iniciar la transición.
      // TODO: parametrizar esto en las props del componente.
      window.scrollTo(0, 0)

      this.transitioning = false
      this.dom.classList.remove(`transition-${type}`, `transition-${type}-active`)
      this.forceUpdate(_ => {
        this.dom = ReactDom.findDOMNode(this.refs.child)
        if (type === 'out') this.transition('enter')
        window.clearTimeout(st1)
      })
    }, this.props.transitionTimeOut + 20)
  }


  render() {
    const prevComponent = (this.prevChildren)
                        ? this.prevChildren.props.route.component
                        : this.nextChildren.props.route.component
    const nextComponent = this.nextChildren.props.route.component
    const ChildrenComponent = (this.fetchingData || this.transitioning) ? prevComponent : nextComponent

    const prevProps = (this.prevChildren)
                        ? this.prevChildren.props
                        : this.nextChildren.props
    const nextProps = this.nextChildren.props
    const childProps = (this.fetchingData || this.transitioning) ? prevProps : nextProps

    return (
      <div className="container-manager">
        { (this.initialFetch) ? null : (this.fetchingData) ? this.preloader() : null }
        { (!this.initialFetch) ? <ChildrenComponent { ...childProps } ref="child" /> : this.preloader() }
      </div>
    )
  }

}

export default AsyncRouteManager
