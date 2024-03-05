import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, { Configuration } from 'webpack';
import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

function buildPlugins(options: BuildOptions): Configuration['plugins'] {
	const { paths, mode } = options;

	const isDev = mode === 'development';
	const isProd = !isDev;

	const plugins: Configuration['plugins'] = [
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		new webpack.ProgressPlugin(),
		new webpack.DefinePlugin({
			IS_DEV: JSON.stringify(isDev),
		}),
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
		plugins.push(new ReactRefreshWebpackPlugin());
	}

	return plugins;
}

export default buildPlugins;
