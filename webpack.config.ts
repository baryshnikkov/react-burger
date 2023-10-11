import path from "path";
import { Configuration } from "webpack";
import { BuildEnv, BuildPaths } from "./config/build/types/config";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";

export default (env: BuildEnv) => {
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, "src", "index.ts"),
		output: path.resolve(__dirname, "dist"),
		html: path.resolve(__dirname, "public", "index.html"),
	};

	const mode = env.mode || "development";
	const port = env.port || 3000;

	const config: Configuration = buildWebpackConfig({
		mode,
		port,
		paths,
	});

	return config;
};
