module.exports = {
  env: { es6: true },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'no-console': 'error',
    indent: ['error', 4],
    semi: ['error', 'always'],
  },
};
