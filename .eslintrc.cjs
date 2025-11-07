const path = require('path');

module.exports = {
  root: true,
  ignorePatterns: ['node_modules', 'dist', 'babel.config.js'],
  env: {
    'react-native/react-native': true,
  },
  extends: ['@react-native/eslint-config', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: path.join(__dirname, 'tsconfig.json'),
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'react/react-in-jsx-scope': 'off',
  },
};

