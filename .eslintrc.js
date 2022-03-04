module.exports = {
    env: {
		browser: true,
		node: true,
		'vue/setup-compiler-macros': true
	},

    extends: [
		'eslint:recommended',
		'prettier',
		'plugin:vue/vue3-essential'
	],

	parser: "vue-eslint-parser",
	parserOptions: {
		parser: "@typescript-eslint/parser",
		ecmaVersion: 2022
	},
    rules: {
      'max-len': [
        'error',
        {
          code: 120,
          ignoreUrls: true
        }
      ],
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    },

    root: true,
}
