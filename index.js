'use strict';

module.exports = {
  extends: [
    './rules/node',
    './rules/node-test',
    './rules/react',
    './rules/react-a11y',
    './rules/react-test'
  ].map(require.resolve),
  rules: {},
};
