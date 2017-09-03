module.exports = {
  extends: './non-rules-config.js',
  rules: {
    'import/max-dependencies': [2, { max: 14 }],
    'import/no-anonymous-default-export': 'off',
    'import/no-deprecated': 1, // this is an in progress rule
    'import/no-dynamic-require': 1, // sometimes it can be handy, shouldn't break a build
    'global-require': 0, // disable because no need to have both!
    'import/no-internal-modules': 0,
    'import/no-restricted-paths': 0,
    'import/no-unassigned-import': 2,
    'import/prefer-default-export': 1,
    'import/unambiguous': 0, // not sure I understand this rule well enough right now...
  },
};
