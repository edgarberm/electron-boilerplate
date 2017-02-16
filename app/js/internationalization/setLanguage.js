
import i18n from 'i18next'

/**
 * @func: setLanguage
 * @param {[String]} lan - acrónimo del lenguaje
 *
 * NOTE: Tener en cuenta que guarda el acronimo en localStorage!
 */

const setLanguage = (lan) => {
  i18n.changeLanguage(lan, (err, t) => {
    console.info(`Se ha cambiado el idioma de la app a: ${ lan }`)
  })
}

export default setLanguage
