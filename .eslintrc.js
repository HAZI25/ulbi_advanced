module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:prettier/recommended',
		'plugin:i18next/recommended',
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'react', 'i18next'],
	rules: {
		'prettier/prettier': [
			'warn',
			{
				endOfLine: 'auto',
			},
		],
		'no-unused-vars': 'warn',
		'@typescript-eslint/no-unused-vars': 'warn',
		'@typescript-eslint/ban-ts-comment': 'warn',
	},
};
