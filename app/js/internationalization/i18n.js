
import i18n from 'i18next'
import XHR from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'


const options = {
  lng: 'es-ES',  // Por defecto
  // lngs: ['es-ES', 'es-CA','es-GA'],  // Por defecto
  fallbackLng: 'es-ES',  // Si no se encuentra el lenguaje qie se pide
  backend: {
    loadPath: `./locales/{{lng}}/{{ns}}.json`
  },

  // interpolation:{
  //   prefix: "{{",
  //   suffix: "}}"
  // },

  ns: ['common'],  // espacio de nombres común utilizado en toda la aplicación
  defaultNS: 'common',
  debug: false,
  interpolation: {
    escapeValue: false // no es necesario con react!!
  }
}

i18n
  .use(XHR)
  .use(LanguageDetector)
  .init(options, (error, t) => {
    // initialized and ready to go!
    // console.info('🎉 i18n initialized!');
  })

export default i18n
