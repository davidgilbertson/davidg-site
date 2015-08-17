module.exports = (function() {
    if (typeof document !== 'undefined') return;
    var jsdom = require('jsdom').jsdom;
    global.document = jsdom('<html><body></body></html>');
    global.window = document.parentWindow;
    global.navigator = {
        userAgent: 'node.js'
    };
})();
