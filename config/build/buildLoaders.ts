import { RuleSetRule } from "webpack";
import { BuildOptions } from "./types/config";
import { buildTsLoader } from "./loaders/buildTsLoader";
import { buildCssLoaders } from "./loaders/buildCssLoader";
import { buildSvgLoader } from "./loaders/buildSvgLoader";

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
	const { isDev } = options;

	const tsLoader = buildTsLoader();
	const cssLoader = buildCssLoaders(isDev);
	const svgLoader = buildSvgLoader();

	return [tsLoader, cssLoader, svgLoader];
}
