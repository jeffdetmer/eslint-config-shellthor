module.exports = {
  extends: './non-rules-config.js',
  rules: {
    'class-methods-use-this': 0, // three words: "componentDidMount" :)
    'no-duplicate-imports': 2,
    // not applicable for a config preset (should be configured only in projects)
    'no-restricted-imports': 0,
    'prefer-reflect': 0, // maybe one day

    // babel plugin
    //   no eslint version
    'babel/no-await-in-loop': 0, // this is deprecated
  },
};
