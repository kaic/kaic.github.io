import './style/main.scss'

import fontawesome from '@fortawesome/fontawesome'
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'
import faGithubSquare from '@fortawesome/fontawesome-free-brands/faGithubSquare'
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope'
import faFilePdf from '@fortawesome/fontawesome-free-solid/faFilePdf'
import faArrowUp from '@fortawesome/fontawesome-free-solid/faArrowUp'

const myBirthdate = new Date(1998, 6, 12)

const calculateMyAge = birthdate => {
  var diffMs = Date.now() - birthdate.getTime()
  var ageDate = new Date(diffMs)

  return Math.abs(ageDate.getUTCFullYear() - 1970)
}

document.getElementById('age').innerText = calculateMyAge(myBirthdate)

const goTopBtn = document.querySelector('.scroll-to-top-btn')

const trackScroll = () => {
  const scrolled = window.pageYOffset
  const coords = document.documentElement.clientHeight

  if (scrolled > coords) {
    goTopBtn.classList.add('scroll-to-top-btn-show')
  }
  if (scrolled < coords) {
    goTopBtn.classList.remove('scroll-to-top-btn-show')
  }
}

const showCollapse = (divName, event) => {
  const content = document.getElementById(divName)
  const button = event.target

  if (button.classList.contains('active')) {
    closeCollapses()
    button.classList.remove('active')
    content.classList.remove('active')
  } else {
    closeCollapses()
    button.classList.add('active')
    content.classList.add('active')
  }
}

const closeCollapses = () => {
  const anchors = document.getElementsByClassName('collapse-anchor')
  const containers = document.getElementsByClassName('work-container')

  for (let i = 0; i < anchors.length; i++) {
    if (anchors[i].classList.contains('active')) {
      anchors[i].classList.remove('active')
    }
    if (containers[i].classList.contains('active')) {
      containers[i].classList.remove('active')
    }
  }
}

window.showCollapse = showCollapse

window.addEventListener('scroll', trackScroll)

window.addEventListener('load', () => {
  setTimeout(() => {
    window.scrollTo(0, 1)
  }, 0)
})

fontawesome.library.add(
  faGithubSquare,
  faFilePdf,
  faArrowUp,
  faEnvelope,
  faLinkedin
)

if (process.env.NODE_ENV === 'production') {
  if ('serviceWorker' in navigator) {
    console.log('Service worker is registrating.')
    navigator.serviceWorker.register('service-worker.js').then(
      function () {
        console.log('service worker registration complete.')
      },
      function () {
        console.log('service worker registration failure.')
      }
    )
  } else {
    console.log('service worker is not supported.')
  }
}
