const path = require('node:path')

module.exports = {
  extends: '@carousel',
  overrides: [
    {
      files: ['*?(.d).?({m,c})ts?(x)'],
      parserOptions: {
        project: path.join(__dirname, 'tsconfig.json'),
      },
    },
  ],
}
