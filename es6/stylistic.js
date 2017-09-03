module.exports = {
  extends: './non-rules-config.js',
  rules: {
    'arrow-body-style': 0, // this is nice, but not useful all the time.
    'sort-imports': 0,

    // babel version fixes the eslint version
    'object-curly-spacing': 0,
    'babel/object-curly-spacing': [2, 'always'],
    'babel/semi': 2,

    'no-invalid-this': 0,
    'babel/no-invalid-this': 2,

    'new-cap': 0,
    'babel/new-cap': [
      2,
      {
        newIsCap: true,
        capIsNew: true,
      },
    ],

    //   no eslint version
    'babel/flow-object-type': 0, // no opinion
  },
};
