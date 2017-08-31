'use strict';
/* ESLint Config for shared node / browser environments that include React / JSX */

module.exports = {
  extends: './browser.js',

  plugins: ['react'],

  env: {
    'shared-node-browser': true,
  },

  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  globals: {
    // TODO: Shouldn't module support take care of this?
    module: false,
  },

  rules: {
    'new-cap': [0],
    // React plugin rules
    // https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
    'react/jsx-pascal-case': [2],
    'react/jsx-tag-spacing': [2, {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
    }],
    'react/jsx-boolean-value': [2, 'always'],
    'react/jsx-wrap-multilines': [2],
    'react/jsx-closing-bracket-location': [2],
    'react/jsx-no-bind': [2],
    'react/jsx-curly-spacing': [2, 'never', {
      allowMultiline: false,
      spacing: { objectLiterals: 'never' },
    }],
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-filename-extension': [2],
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-handler-names': [2, {
      eventHandlerPrefix: 'handle',
      eventHandlerPropPrefix: 'on',
    }],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-key': [2],
    'react/jsx-max-props-per-line': [2, { maximum: 4 }],
    'react/jsx-no-duplicate-props': [2],
    'react/jsx-no-target-blank': [2],
    'react/jsx-no-undef': [2],
    'react/jsx-sort-props': [0],
    'react/jsx-uses-react': [2],
    'react/jsx-uses-vars': [2],
    'react/jsx-no-comment-textnodes': [2],
    'react/jsx-no-literals': [2],
    'react/no-array-index-key': [2],
    'react/no-multi-comp': [2],
    'react/prefer-es6-class': [2, 'always'],
    'react/prefer-stateless-function': [2, { ignorePureComponents: true }],
    'react/require-default-props': [2],
    'jsx-a11y/img-has-alt': [2],
    'react/no-string-refs': [1],
    'react/self-closing-comp': [2],
    'react/require-render-return': [2],
    'react/sort-comp': [2],
    'react/no-is-mounted': [2],
    // style
    'react/forbid-prop-types': [2, { forbid: ['any', 'array', 'object'] }],
    'react/no-deprecated': [2],
    'react/no-did-mount-set-state': [2],
    'react/no-did-update-set-state': [2],
    'react/no-direct-mutation-state': [2],
    'react/no-unknown-property': [2],
    'react/prop-types': [2],
    'react/react-in-jsx-scope': [2],
    'react/sort-prop-types': [2, { ignoreCase: true }],
    'react/no-render-return-value': [2],
  },
};
