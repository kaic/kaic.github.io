import './style/main.scss'

import './scripts/date.js'
import { loadHeaderTexts, loadTranslateBtn } from './scripts/header.js'
import './scripts/skillset.js'
import './scripts/career.js'
import './scripts/google-analitycs.js'
import { initI18n } from './scripts/i18n.js'

window.addEventListener('load', async () => {
  await initI18n();
  await loadHeaderTexts();
  await loadTranslateBtn();

  setTimeout(() => {
    window.scrollTo(0, 1)
  }, 1000)

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
