// import prettierConfig from './prettier.config.js';
const pret = require('./prettier.config.js');
module.exports = {
  'root': true,
  'ignorePatterns': ['.eslintrc.js', 'projects/**/*'],
  'env': {
    'browser': true,
    'commonjs': true,
    'es2021': true,
    'node': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:prettier/recommended', // TODO:  CHECK
    'prettier',
  ],
  'overrides': [
    {
      'files': ['*.ts'],
      'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
        'prettier',
      ],
      'rules': {
        '@angular-eslint/directive-selector': [
          'error',
          {
            'type': 'attribute',
            'prefix': 'app',
            'style': 'camelCase',
          },
        ],
        '@angular-eslint/component-selector': [
          'error',
          {
            'type': 'element',
            'prefix': 'app',
            'style': 'kebab-case',
          },
        ],
      },
    },

    {
      'files': ['*.html'],
      'extends': [
        'plugin:@angular-eslint/template/recommended',
        'plugin:@angular-eslint/template/accessibility',
      ],
      'rules': {},
    },
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
  },
  'plugins': ['@typescript-eslint', '@typescript-eslint/eslint-plugin'],
  'rules': {
    'prettier/prettier': ['error', pret],
  },
};
