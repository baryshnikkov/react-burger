import { WebpackPluginInstance } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from "./types/config";

export function buildPlugins(options: BuildOptions): WebpackPluginInstance[] {
	const { paths } = options;

	const plugins = [
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
	];

	return plugins;
}
