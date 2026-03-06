
// Visitor number logic (localStorage-based)
let visitorNumber = localStorage.getItem('visitorNumber');
if (!visitorNumber) {
    visitorNumber = 1;
} else {
    visitorNumber = parseInt(visitorNumber) + 1;
}
localStorage.setItem('visitorNumber', visitorNumber);

// Display it
document.getElementById('visitor-number').textContent = `#${visitorNumber}`;


// <!-- ✅ Enhanced Scripts -->
// Enhanced redirect with performance tracking
setTimeout(() => {
    // Track redirect for analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'redirect_to_home', {
            'event_category': 'navigation',
            'event_label': 'home_page_redirect'
        });
    }
    window.location.href = "home.html";
}, 3500);

// Register service worker for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/service-worker.js')
            .then(function (registration) {
                console.log('✅ Service Worker Registered:', registration);
            })
            .catch(function (error) {
                console.error('⚠️ Service Worker Failed:', error);
            });
    });
}

// Performance monitoring
window.addEventListener('load', function () {
    // Report page load time
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    if (typeof gtag !== 'undefined') {
        gtag('event', 'timing_complete', {
            'name': 'page_load',
            'value': loadTime,
            'event_category': 'Load Time'
        });
    }
});


// <!-- ✅ Enhanced Google Analytics -->
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX', {
    'page_title': 'SusheelCoder - Full Stack Developer',
    'page_location': 'https://susheelcoder.netlify.app/'
});


// < !--Google Tag Manager-- >
(function (w, d, s, l, i) {
    w[l] = w[l] || []; w[l].push({
        'gtm.start':
            new Date().getTime(), event: 'gtm.js'
    }); var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
            'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-58S7CD9P');


// ===