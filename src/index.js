import './style/main.scss'

import './scripts/date.js'
import './scripts/skillset.js'
import './scripts/career.js'

window.addEventListener('load', () => {
  setTimeout(() => {
    window.scrollTo(0, 1)
  }, 0)
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
