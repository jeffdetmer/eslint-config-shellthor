module.exports = {
  plugins: ['import'],
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: { experimentalObjectRestSpread: true },
  },
  settings: {
    'import/ignore': ['node_modules', '.json$', '.(scss|less|css|styl)$'],
  },
};
