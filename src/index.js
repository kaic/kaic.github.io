import './style.scss';

import fontawesome from '@fortawesome/fontawesome';
import faEnvelopeSquare from '@fortawesome/fontawesome-free-solid/faEnvelopeSquare';
import faLinkedinIn from '@fortawesome/fontawesome-free-brands/faLinkedinIn';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';

fontawesome.library.add(faGithub, faLinkedinIn, faEnvelopeSquare);

window.addEventListener("load",function() {
    setTimeout(function(){
        window.scrollTo(0, 1);
    }, 0);
})

if ('serviceWorker' in navigator) {
    console.log('Service worker is registrating.');
    navigator.serviceWorker.register('service-worker.js').then(function () {
        console.log('service worker registration complete.');
    }, function () {
        console.log('service worker registration failure.');
    });
} else {
    console.log('service worker is not supported.');
}