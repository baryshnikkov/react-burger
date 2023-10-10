type BuildMode = "development" | "production";

export interface BuildEnv {
	mode: BuildMode;
	port: number;
}

export interface BuildOptions {
	mode: BuildMode;
	port: number;
}
