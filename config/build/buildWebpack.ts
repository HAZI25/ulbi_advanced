import buildLoaders from './buildLoaders';
import buildResolvers from './buildResolvers';
import { BuildOptions } from './types/config';
import buildPlugins from './buildPlugins';
import webpack from 'webpack';
import buildDevServer from './buildDevServer';

function buildWebpack(options: BuildOptions): webpack.Configuration {
	const { mode, paths } = options;

	const isDev = mode === 'development';
	const isProd = !isDev;

	return {
		mode,
		entry: paths.entry,
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolvers(options),
		output: {
			path: paths.output,
			filename: '[name].[contenthash].js',
			clean: true,
		},
		plugins: buildPlugins(options),
		devtool: isDev ? 'inline-source-map' : undefined,
		devServer: isDev ? buildDevServer(options) : undefined,
	};
}

export default buildWebpack;
