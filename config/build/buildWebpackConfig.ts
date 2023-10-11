import "webpack-dev-server";
import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from "./types/config";
import { buildDevServer } from "./buildDevServer";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";

export function buildWebpackConfig(options: BuildOptions): Configuration {
	const { mode, paths } = options;

	return {
		mode,
		entry: paths.entry,
		output: {
			filename: "[name].[contenthash].js",
			path: paths.output,
			clean: true,
			publicPath: "/",
		},
		plugins: buildPlugins(options),
		module: {
			rules: buildLoaders(),
		},
		resolve: buildResolvers(),
		devServer: buildDevServer(options),
	};
}
