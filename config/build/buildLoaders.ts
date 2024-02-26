import { ModuleOptions } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
	const { mode } = options;

	const isDev = mode === 'development';
	const isProd = !isDev;

	const typeScriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	const cssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: /\.module\./,
						localIdentName: isDev
							? '[path][name]__[local]--[hash:base64:5]'
							: '[hash:base64:8]',
					},
				},
			},
			'sass-loader',
		],
	};

	return [typeScriptLoader, cssLoader];
}

export default buildLoaders;