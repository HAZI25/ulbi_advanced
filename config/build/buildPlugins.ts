import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, { Configuration } from 'webpack';
import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

function buildPlugins(options: BuildOptions): Configuration['plugins'] {
	const { paths, mode, analyzer } = options;

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
			}),
		);
	}

	if (analyzer) {
		plugins.push(new BundleAnalyzerPlugin());
	}

	if (isDev) {
		plugins.push(
			new ReactRefreshWebpackPlugin(),
			new ForkTsCheckerWebpackPlugin(),
		);
	}

	return plugins;
}

export default buildPlugins;
