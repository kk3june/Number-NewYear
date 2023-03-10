module.exports = {
  env: { es6: true },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    indent: ['error', 4],
    semi: ['error', 'always'],
    'no-console': 'error',
  },
};
