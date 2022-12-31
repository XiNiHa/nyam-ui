/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    'universe',
    'universe/shared/typescript-analysis'
  ],
  env: {
    node: true,
    es6: true
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
      }
    ],
  }
}
