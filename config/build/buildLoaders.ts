import { RuleSetRule } from "webpack";
import { BuildOptions } from "./types/config";
import { buildTsLoader } from "./loaders/buildTsLoader";
import { buildCssLoaders } from "./loaders/buildCssLoader";

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
	const { isDev } = options;

	const tsLoader = buildTsLoader();
	const cssLoader = buildCssLoaders(isDev);

	return [tsLoader, cssLoader];
}
