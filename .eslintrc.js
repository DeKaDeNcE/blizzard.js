module.exports = {
  'extends': 'eslint:recommended',
  'env': {
    'es6': true,
    'node': true,
    'browser': false
  },
  'rules': {
    'array-bracket-spacing': [2, 'never'],
    'block-scoped-var': 2,
    'brace-style': [2, '1tbs', { 'allowSingleLine': false }],
    'comma-dangle': [2, {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'never'
    }],
    'comma-style': [2, 'last'],
    'computed-property-spacing': [2, 'never'],
    'curly': [2, 'all'],
    'eol-last': 2,
    'eqeqeq': [2, 'smart'],
    'guard-for-in': 2,
    'indent': [2, 2, { 'SwitchCase': 1 }],
    'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }],
    'linebreak-style': [2, 'unix'],
    'lines-around-comment': [2, { 'beforeBlockComment': true, 'afterBlockComment': false }],
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-caller': 2,
    'no-catch-shadow': 2,
    'no-dupe-keys': 2,
    'no-empty': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-parens': [2, 'functions'],
    'no-implied-eval': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-native-reassign': 2,
    'no-nested-ternary': 2,
    'no-new-func': 2,
    'no-new-object': 2,
    'no-new-wrappers': 2,
    'no-octal-escape': 2,
    'no-process-exit': 2,
    'no-proto': 2,
    'no-return-assign': 2,
    'no-script-url': 2,
    'no-sequences': 2,
    'no-shadow-restricted-names': 2,
    'no-spaced-func': 2,
    'no-trailing-spaces': 2,
    'no-undef-init': 2,
    'no-undefined': 2,
    'no-unused-vars': [2, { 'vars': 'all', 'args': 'none' }],
    'no-with': 2,
    'object-curly-spacing': [2, 'always'],
    'one-var': [2, 'never'],
    'quote-props': [2, 'consistent-as-needed'],
    'quotes': [2, 'single', 'avoid-escape'],
    'semi': [2, 'always'],
    'semi-spacing': [2, { 'before': false, 'after': true }],
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, { 'anonymous': 'always', 'named': 'always' }],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [2, { 'words': true, 'nonwords': false }],
    'spaced-comment': [2, 'always'],
    'strict': [2, 'never'],
    'yoda': [2, 'never'],
    'max-nested-callbacks': [1, 5],
    'valid-jsdoc': [1, {
      'prefer': {
        'arg': 'param',
        'argument': 'param',
        'class': 'constructor',
        'property': 'prop',
        'returns': 'return'
      }
    }]
  }
};
