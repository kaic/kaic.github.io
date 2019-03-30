import './style.scss';

const myBirthdate = new Date(1998, 6, 12);

const calculateMyAge = (birthdate) => {
    var diffMs = Date.now() - birthdate.getTime();
    var ageDate = new Date(diffMs);

    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

document.getElementById('age').innerText = calculateMyAge(myBirthdate);

import fontawesome from '@fortawesome/fontawesome';
import faMapPin from '@fortawesome/fontawesome-free-solid/faMapPin';
import faCircle from '@fortawesome/fontawesome-free-solid/faCircle';
import faEnvelopeSquare from '@fortawesome/fontawesome-free-solid/faEnvelopeSquare';
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin';
import faGithubSquare from '@fortawesome/fontawesome-free-brands/faGithubSquare';
import faGithubAlt from '@fortawesome/fontawesome-free-brands/faGithubAlt';
import faMedium from '@fortawesome/fontawesome-free-brands/faMedium';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';
import faFilePdf from '@fortawesome/fontawesome-free-solid/faFilePdf';
import faArrowUp from '@fortawesome/fontawesome-free-solid/faArrowUp';

fontawesome.library.add(faGithubSquare, faFilePdf, faArrowUp, faEnvelope, faLinkedin, faEnvelopeSquare, faMedium, faMapPin, faCircle);

const goTopBtn = document.querySelector('.scroll-to-top-btn');

const trackScroll = () => {
    let scrolled = window.pageYOffset;
    let coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
        goTopBtn.classList.add('scroll-to-top-btn-show');
    }
    if (scrolled < coords) {
        goTopBtn.classList.remove('scroll-to-top-btn-show');
    }
}

window.addEventListener('scroll', trackScroll);

window.addEventListener("load", () => {
    setTimeout(() => {
        window.scrollTo(0, 1);
    }, 0);
});

/*if ('serviceWorker' in navigator) {
    console.log('Service worker is registrating.');
    navigator.serviceWorker.register('service-worker.js').then(function () {
        console.log('service worker registration complete.');
    }, function () {
        console.log('service worker registration failure.');
    });
} else {
    console.log('service worker is not supported.');
}*/