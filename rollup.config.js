import {getBabelOutputPlugin} from '@rollup/plugin-babel';

const config = [
	{
		input: 'src/browser.js',
		output: [
			{
				file: 'dist/browser.js',
				format: 'cjs',
				plugins: [
					getBabelOutputPlugin({
						presets: ['@babel/preset-env'],
					}),
				],
			},
		],
	},
	{
		input: 'src/index.js',
		external: ['node:buffer', 'node:worker_threads', 'node:crypto'],
		output: [
			{
				file: 'dist/index.js',
				format: 'es',
			},
		],
	},
	{
		input: 'src/thread.js',
		external: ['node:buffer', 'node:worker_threads', 'node:crypto'],
		output: [
			{
				file: 'dist/thread.js',
				format: 'es',
			},
		],
	},
];

export default config;
