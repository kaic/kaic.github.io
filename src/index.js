import './style.scss';

import fontawesome from '@fortawesome/fontawesome';
import faEnvelopeSquare from '@fortawesome/fontawesome-free-solid/faEnvelopeSquare';
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin';
import faGithubSquare from '@fortawesome/fontawesome-free-brands/faGithubSquare';
import faGithubAlt from '@fortawesome/fontawesome-free-brands/faGithubAlt';
import faMedium from '@fortawesome/fontawesome-free-brands/faMedium';

fontawesome.library.add(faGithubSquare, faLinkedin, faEnvelopeSquare, faMedium, faGithubAlt);

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