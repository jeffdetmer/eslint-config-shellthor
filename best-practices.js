module.exports = {
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'accessor-pairs': 2,
    complexity: [2, 5],
    'default-case': 2,
    'no-alert': 2,
    'no-div-regex': 2,
    'no-else-return': 0,
    'no-empty-function': 0, // we're all grown ups here...
    'no-eq-null': 2,
    'no-implicit-coercion': 0,
    'no-implicit-globals': 2,
    'no-invalid-this': 2,
    'no-magic-numbers': 0, // sometimes this is ok (foo.length - 1 == index of last one)
    'no-mixed-operators': 0,
    'no-multi-spaces': 2,
    'no-native-reassign': 2,
    'no-param-reassign': 0,
    'no-restricted-properties': 0, // no ideas of what to disallow right now...
    'no-unmodified-loop-condition': 2,
    'no-unused-expressions': 0,
    'no-useless-call': 2,
    'no-warning-comments': [2, { terms: ['fixme'], location: 'anywhere' }],
    'no-with': 0,
    'prefer-promise-reject-errors': 0, // maybe one day... Not sure I'm in...
    'require-await': 2, // if you don't need async, don't use async or return Promise.resolve...
    'wrap-iife': [2, 'inside'],

    // variables
    'no-catch-shadow': 2,
    'no-undefined': 0,

    // CommonJS
    'callback-return': 0, // see known limitations: http://eslint.org/docs/rules/callback-return it's just annoying...
    'global-require': 1, // sometimes this is ok. We shouldn't break a build
    'handle-callback-err': 2,
    'no-mixed-requires': [2, { grouping: true, allowCall: false }],
    'no-process-env': 0,
    'no-process-exit': 2,
    'no-restricted-modules': 0,
    'no-sync': 0,
  },
};
