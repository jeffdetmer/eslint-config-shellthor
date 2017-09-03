module.exports = {
  env: {
    browser: true,
    node: true,
  },
  rules: {
    camelcase: [2, { properties: 'always' }],
    'capitalized-comments': 0, // wHO CaRes?
    'comma-dangle': [
      2,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'consistent-this': 0, // Too many use-cases for reassigning "this" to different values
    'func-names': 2,
    'func-name-matching': 2,
    'func-style': [2, 'declaration'],
    'id-blacklist': 2,
    'init-declarations': 0,
    'id-length': 0, // when using short composable functions, using single-letter variables is fine
    'id-match': [
      2,
      // camelCase, PascalCase, __filename, CONST_VALUE, stream$, $el
      '^\\$?(__)?(([A-Z]|[a-z]|[0-9]+)|([A-Z_]))*\\$?$',
    ],
    'jsx-quotes': [2, 'prefer-double'],
    'line-comment-position': 0,
    'lines-around-comment': 0,
    'lines-around-directive': 0,
    'max-depth': [2, 4],
    'max-len': [
      'error',
      120,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'max-lines': [2, { max: 500, skipBlankLines: false, skipComments: false }],
    'max-nested-callbacks': [2, 5],
    'max-params': [2, 5],
    'max-statements-per-line': [2, { max: 1 }],
    'max-statements': [2, 30],
    'multiline-ternary': 0,
    'new-cap': 2,
    'newline-after-var': 0,
    'newline-before-return': 0,
    'newline-per-chained-call': 0,
    'no-inline-comments': 0,
    'no-multiple-empty-lines': 0,
    'no-negated-condition': 2,
    'no-plusplus': 0,
    'no-ternary': 0,
    'no-underscore-dangle': 0,
    'nonblock-statement-body-position': 0,
    'object-curly-newline': 0, // couldn't figure out how to configure it the way I want :-(
    'object-curly-spacing': 0, // babel/object-curly-spacing
    'object-property-newline': 0,
    'one-var': [2, { uninitialized: 'always', initialized: 'never' }],
    'operator-assignment': 0, // readability on a case-by-case basis
    'operator-linebreak': [2, 'after'],
    'padded-blocks': 0,
    'prefer-destructuring': 0, // nah, I like it, but not that much...
    quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'require-jsdoc': 0,
    'sort-keys': 0,
    'sort-vars': 0,
    'space-before-blocks': [2, 'always'],
    'spaced-comment': 0,
    'wrap-regex': 0,
  },
};
