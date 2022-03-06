module.exports = {
  env: {
    browser: true,
    // node: true,
    'vue/setup-compiler-macros': true,
  },

  extends: [
    '@vue/typescript/recommended',
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    // 'eslint:recommended',
    'prettier'
  ],

  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 13,
    sourceType: 'module',
  },
  globals: {
    NodeJS: true,
  },
  rules: {
    'max-len': [
      'error',
      {
        code: 120,
        ignoreUrls: true,
      },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/prefer-default-export': 'off',
    'accessibility/click-events-have-key-events': 'off',
    'vuejs-accessibility/click-events-have-key-events': 'off'
  },

  root: true,
};
