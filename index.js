'use strict';

module.exports = {
  extends: [
    './rules/node',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
  rules: {},
};
