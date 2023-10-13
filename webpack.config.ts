import path from "path";
import { Configuration } from "webpack";
import { BuildEnv, BuildPaths } from "./config/build/types/config";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";

export default (env: BuildEnv) => {
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, "src", "index.tsx"),
		output: path.resolve(__dirname, "dist"),
		html: path.resolve(__dirname, "public", "index.html"),
		src: path.resolve(__dirname, "src"),
	};

	const mode = env.mode || "development";
	const port = env.port || 3000;
	const isDev = mode === "development";

	const config: Configuration = buildWebpackConfig({
		mode,
		port,
		paths,
		isDev,
	});

	return config;
};
