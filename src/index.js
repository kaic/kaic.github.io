import './style/main.scss'

import './scripts/date'
import './scripts/about'
import './scripts/google-analitycs'
import { loadTexts, addScrollListener } from './scripts/view'
import { initI18n } from './scripts/i18n'
import './scripts/career'
import { loadTranslateBtn } from './scripts/header'

window.addEventListener('load', async () => {
  await initI18n()
  await loadTexts()
  await loadTranslateBtn()
  addScrollListener()
})

if (process.env.NODE_ENV === 'production') {
  if ('serviceWorker' in navigator) {
    console.log('Service worker is registrating.')
    navigator.serviceWorker.register('service-worker.js').then(
      function () {
        console.log('Service worker registration complete.')
      },
      function () {
        console.log('Service worker registration failure.')
      }
    )
  } else {
    console.log('Service worker is not supported.')
  }
}
