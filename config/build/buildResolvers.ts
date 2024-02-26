import { Configuration } from 'webpack';

function buildResolvers(): Configuration['resolve'] {
	return {
		extensions: ['.tsx', '.ts', '.js'], // расш. для файлов с иход. кодом, для них не надо будет указывать расш.
	};
}
export default buildResolvers;
