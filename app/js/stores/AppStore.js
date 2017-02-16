
/*****************************************************************************
 * @class: AppStore
 *
 * @description: Este store es el encargado de manejar la lógica de datos de la
 * aplicación. El estado de los datos de la aplicación se ha de encargar el store
 * y los componentes no necesitan conocer el estado de los datos que consumen,
 * ellos tan solo saben que necesitan ciertos datos y los piden.
 *
 *****************************************************************************/

import { observable, computed, action, reaction } from 'mobx'
import { asyncLoop, getDataAsync } from '../utils'

class AppStore {

  @observable varname



   /**
    * @func: componentDataHandler
    * @param  {[Object]} request - Objeto que contiene el Array con los datos a gestionar
    * @param {[Function]} callback
    * @return {[Function]} callback
    *
    * @description: Este método se encarga de manejar los datos que requieren los
    * componentes que maneja el contenedor 'AsyncRouteManager'.
    *
    * TODO: comprobar si los datos están disponibles antes de pedirlos.
    */
  componentDataHandler = (request, callback) => {
    return asyncLoop(request.length, loop => {
      let i = loop.index()
      console.log(`Iterando el loop: ${i}`)

      // Comprobamos el estado de los datos solicitados.
      // Si disponemos de ellos saltamos a la siguiente iteración.
      if (this[request[i]]) {
        console.info(`No necesitamos pedir los datos para: ${request[i]}`);
        loop.next()
        return
      }

      // Si aún no disponemos de los datos componemos el nombre del método que
      // necesitamos para solicitarlos
      let name = request[i].charAt(0).toUpperCase() + request[i].slice(1)
      let fn = `_get${ name }`

      // Ejecutamos la llamada asíncrona a la API
      this[fn]().then((data) => {
        this[request[i]] = data.data
        // Ejecutamos la siguiente iteración
        loop.next()
      }).catch(error => { throw error })
    },
    () => {
      callback()
    })
  }



  /*****************************************************************************
   * Llamadas a los métodos de la API ilusia®
   *
   * TODO: necesitamos extraer (de la URL en ciertos casos) el 'countryname',
   * el 'postalcode' y el 'providername' antes de pedir los demás datos!
   *****************************************************************************/

}

export default new AppStore()
