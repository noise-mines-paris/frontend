import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
	plugins: [preact(), tailwindcss()],
	resolve: {
		alias: {
			'#src': path.resolve(__dirname, './src'),
			'#pages': path.resolve(__dirname, './src/pages'),
			'#components': path.resolve(__dirname, './src/components'),
			'#features': path.resolve(__dirname, './src/features'),
			'#libs': path.resolve(__dirname, './src/libs'),
			'#hooks': path.resolve(__dirname, './src/hooks'),
		},
	},
});
