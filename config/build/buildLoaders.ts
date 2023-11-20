import { type RuleSetRule } from 'webpack'

import { buildCssLoaders } from './loaders/buildCssLoader'
import { buildSvgLoader } from './loaders/buildSvgLoader'
import { buildTsLoader } from './loaders/buildTsLoader'
import { type BuildOptions } from './types/config'

export function buildLoaders (options: BuildOptions): RuleSetRule[] {
	const { isDev } = options

	const tsLoader = buildTsLoader()
	const cssLoader = buildCssLoaders(isDev)
	const svgLoader = buildSvgLoader()

	return [tsLoader, cssLoader, svgLoader]
}
