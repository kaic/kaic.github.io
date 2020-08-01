if (process.env.NODE_ENV === 'production') {
    console.log('Analitycs')
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'UA-149445691-1');
}