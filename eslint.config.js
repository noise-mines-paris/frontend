import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginStorybook from 'eslint-plugin-storybook';
import eslintConfigPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
	{
		languageOptions: { globals: globals.browser },
		settings: {
			// Specify a react version just to disable a eslint-plugin-react warning about
			// missing react version
			react: {
				version: '19.0.0',
			},
		},
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	...pluginStorybook.configs['flat/recommended'],
	eslintConfigPrettier, // Disable some eslint rules to prevent conflicts with prettier
	{
		files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
		rules: {
			// Disable the following line as we can't import React (we are using preact)
			'react/react-in-jsx-scope': 'off',
			'react/prop-types': 'off',
		},
	},
	{
		// Ignore the following folders and files when running eslint
		ignores: ['node_modules/', 'dist', 'build', 'storybook-static'],
	},
];
