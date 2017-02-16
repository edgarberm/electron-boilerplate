
import './scss/main.scss'
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { I18nextProvider } from 'react-i18next'

import { i18n } from './js/internationalization'
import routes from './js/routes'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<I18nextProvider i18n={ i18n }>{ routes }</I18nextProvider>, document.querySelector('.application'))
  console.info('🎉 App initialized!');
})
