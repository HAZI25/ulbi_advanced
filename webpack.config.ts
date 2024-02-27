import path from 'path';
import webpack from 'webpack';
import buildWebpack from './config/build/buildWebpack';
import { BuildPaths, EnvVar } from './config/build/types/config';

export default (env: EnvVar) => {
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		output: path.resolve(__dirname, 'build'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src'),
	};

	const config: webpack.Configuration = buildWebpack({
		mode: env.mode ?? 'development',
		paths,
		port: env.port ?? 3000,
	});

	return config;
};
