import 'webpack-dev-server'
import { type Configuration } from 'webpack'

import { buildDevServer } from './buildDevServer'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { type BuildOptions } from './types/config'

export function buildWebpackConfig (options: BuildOptions): Configuration {
	const { mode, paths, isDev } = options

	return {
		mode,
		entry: paths.entry,
		output: {
			filename: '[name].[contenthash].js',
			path: paths.output,
			clean: true,
			publicPath: '/',
		},
		plugins: buildPlugins(options),
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolvers(options),
		devServer: buildDevServer(options),
		devtool: isDev ? 'eval-cheap-module-source-map' : undefined,
	}
}
