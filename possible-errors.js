module.exports = {
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'no-console': 2,
    'no-constant-condition': 2,
    'no-extra-boolean-cast': 0,
    'no-extra-parens': 0,
    'no-negated-in-lhs': 2,
    'no-prototype-builtins': 0,
    'no-use-before-define': [
      2,
      { functions: false, classes: true, variables: true },
    ],
    'valid-jsdoc': [2, { requireReturn: false }],
  },
};
