import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, { Configuration } from 'webpack';
import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

function buildPlugins(options: BuildOptions): Configuration['plugins'] {
	const { paths, mode } = options;

	const isDev = mode === 'development';
	const isProd = !isDev;

	const plugins: Configuration['plugins'] = [
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		new webpack.ProgressPlugin(),
	];

	if (isProd) {
		plugins.push(
			new MiniCssExtractPlugin({
				filename: 'css/[name].[contenthash:8].css',
				chunkFilename: 'css/[name].[contenthash:8].css',
			})
		);
	}

	if (isDev) {
	}

	return plugins;
}

export default buildPlugins;
