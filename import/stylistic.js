module.exports = {
  extends: './non-rules-config.js',
  rules: {
    'import/no-commonjs': 0,
    'import/no-namespace': 0,
    'import/no-nodejs-modules': 0,
    'import/order': [
      1,
      {
        groups: [
          'builtin',
          ['external', 'internal'],
          'parent',
          ['sibling', 'index'],
        ],
      },
    ],
  },
};
