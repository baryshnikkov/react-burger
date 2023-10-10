import { BuildEnv } from "./config/build/types/config";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";

export default (env: BuildEnv) => {
	const mode = env.mode || "development";
	const port = env.port || 3000;

	const config = buildWebpackConfig({
		mode,
		port,
	});

	return config;
};
