module.exports = {
    extends: 'airbnb',
    parser: 'babel-eslint',
    plugins: [
        'react'
    ],
    env: {
        mocha: true,
        browser: true,
        node: true
    },
    ecmaFeatures: {
        arrowFunctions: true,
        blockBindings: true,
        classes: true,
        defaultParams: true,
        destructuring: true,
        forOf: true,
        generators: false,
        modules: true,
        objectLiteralComputedProperties: true,
        objectLiteralDuplicateProperties: false,
        objectLiteralShorthandMethods: true,
        objectLiteralShorthandProperties: true,
        spread: true,
        superInFunctions: true,
        templateStrings: true,
        jsx: true
    },
    rules: {
        indent: [2, 4, {'SwitchCase': 1}],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-indent': [2, 4],
        'react/forbid-prop-types': 0,
        'react/no-unescaped-entities': 0,
        'new-cap': 0,
        'no-alert': 0,
        'global-require': 0,
        'no-console': 0,
        'no-return-assign': 0,
        'no-underscore-dangle': 0,
        'no-unused-expressions': 0,
        'no-use-before-define': 0,
        'max-len': 0,
        'space-before-function-paren': 0,
        'object-curly-spacing': [2, 'never']
    },
    globals: {
        expect: true,
        sinon: true,
        fetch: true,
        performance: true,
        ga: true
    }
}
