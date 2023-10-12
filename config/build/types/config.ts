type BuildMode = "development" | "production";

export interface BuildEnv {
	mode: BuildMode;
	port: number;
}

export interface BuildPaths {
	entry: string;
	output: string;
	html: string;
}

export interface BuildOptions {
	mode: BuildMode;
	port: number;
	paths: BuildPaths;
	isDev: boolean;
}
