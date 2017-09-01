modules.export = {
  plugins: [
    'jsx-a11y',
    'react'
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    // Enforce that all elements that require alternative text have meaningful information
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md
    'jsx-a11y/alt-text': ['error', {
      elements: ['img', 'object', 'area', 'input[type="image"]'],
      img: [],
      object: [],
      area: [],
      'input[type="image"]': [],
  }
}