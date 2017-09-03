module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    './stylistic.js',
    './best-practices.js',
    './possible-errors.js',
    './import/index.js',
    './es6/index.js',
  ],
  rules: {},
};
