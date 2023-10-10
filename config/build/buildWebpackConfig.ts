import { BuildOptions } from "./types/config";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import "webpack-dev-server";

export function buildWebpackConfig(options: BuildOptions) {
	const { mode, port } = options;

	return {
		mode,
		entry: path.resolve(__dirname, "src", "index.ts"),
		output: {
			filename: "[name].[contenthash].js",
			path: path.resolve(__dirname, "dist"),
			clean: true,
			publicPath: "/",
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, "public", "index.html"),
			}),
		],
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: "ts-loader",
					exclude: /node_modules/,
				},
			],
		},
		resolve: {
			extensions: [".tsx", ".ts", ".js"],
		},
		devServer: {
			port,
			open: true,
			historyApiFallback: true,
			hot: true,
			client: {
				overlay: false,
			},
		},
	};
}
