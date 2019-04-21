import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import { eslint } from 'rollup-plugin-eslint';
import pkg from './package.json';

let removeConsole = (process.env.NODE_ENV === 'production') ? ["transform-remove-console"]: []
console.log(process.env.NODE_ENV);

export default [
	// browser-friendly UMD build
	{
		input: 'libs/index.js',
		output: {
			name: 'VueFbCustomerchat',
			file: pkg.browser,
			format: 'umd'
		},
		plugins: [
			resolve(), // so Rollup can find `ms`
			commonjs(), // so Rollup can convert `ms` to an ES module
			eslint(),
			babel({
				plugins: [...removeConsole]
			}), // to ES5
			uglify() // minify
		]
	},

	// CommonJS (for Node) and ES module (for bundlers) build.
	{
		input: 'libs/index.js',
		external: ['ms'],
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' }
		]
	}
];
