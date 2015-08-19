// Mocha should not try to import scss or css
require.extensions['.scss'] = () => '';

require.extensions['.css'] = () => '';
