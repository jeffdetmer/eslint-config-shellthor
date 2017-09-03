module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: { experimentalObjectRestSpread: true },
  },
  plugins: ['babel'],
};
