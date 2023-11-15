import path from 'path'
import { type Configuration } from 'webpack'
import { type BuildEnv, type BuildPaths } from './config/build/types/config'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'

export default (env: BuildEnv) => {
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		output: path.resolve(__dirname, 'dist'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src'),
	}

	const mode = env.mode || 'development'
	const port = env.port || 3000
	const isDev = mode === 'development'
	const apiUrl = 'https://norma.nomoreparties.space/api/'

	const config: Configuration = buildWebpackConfig({
		mode,
		port,
		paths,
		isDev,
		apiUrl,
	})

	return config
}
