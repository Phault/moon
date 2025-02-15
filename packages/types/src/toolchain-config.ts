// Automatically generated by schematic. DO NOT MODIFY!

/* eslint-disable */

export type NodeVersionFormat =
	| 'file'
	| 'link'
	| 'star'
	| 'version'
	| 'version-caret'
	| 'version-tilde'
	| 'workspace'
	| 'workspace-caret'
	| 'workspace-tilde';

/**
 * Configures and enables the Bun platform.
 * Docs: https://moonrepo.dev/docs/config/toolchain#bun
 */
export interface BunConfig {
	/**
	 * The dependency version format to use when syncing projects
	 * as dependencies.
	 *
	 * @default 'workspace'
	 */
	dependencyVersionFormat: NodeVersionFormat;
	/** Automatically infer moon tasks from `package.json` scripts. */
	inferTasksFromScripts: boolean;
	/** Location of the WASM plugin to use for Bun support. */
	plugin: string | null;
	/**
	 * Assumes only the root `package.json` is used for dependencies.
	 * Can be used to support the "one version policy" pattern.
	 */
	rootPackageOnly: boolean;
	/**
	 * Automatically syncs moon project-to-project relationships as
	 * dependencies for each `package.json` in the workspace.
	 *
	 * @default true
	 */
	syncProjectWorkspaceDependencies: boolean;
	/**
	 * The version of Bun to download, install, and run `bun` tasks with.
	 *
	 * @envvar MOON_BUN_VERSION
	 */
	version: string | null;
}

/** Configures to a tool-specific binary to install. */
export interface BinConfig {
	/** Name of the binary, with optional version separated by `@`. */
	bin: string;
	/** Force install the binary if it already exists. */
	force: boolean;
	/** Only install the binary locally, and not within CI. */
	local: boolean;
	/** For supported tools, a custom name to use. */
	name: string | null;
}

export type BinEntry = string | BinConfig;

/**
 * Configures and enables the Deno platform.
 * Docs: https://moonrepo.dev/docs/config/toolchain#deno
 */
export interface DenoConfig {
	/** List of binaries to install into the environment using `deno install`. */
	bins: BinEntry[];
	/**
	 * Relative path to a dependency management file. Used for content hashing.
	 *
	 * @default 'deps.ts'
	 */
	depsFile: string;
	/** Requires and forces the use of `deno.lock` files. */
	lockfile: boolean;
	/** Location of the WASM plugin to use for Deno support. */
	plugin: string | null;
	/**
	 * The version of Deno to download, install, and run `deno` tasks with.
	 *
	 * @envvar MOON_DENO_VERSION
	 */
	version: string | null;
}

/** Options for Bun, when used as a package manager. */
export interface BunpmConfig {
	/** Location of the WASM plugin to use for Bun support. */
	plugin: string | null;
	/**
	 * The version of Bun to download, install, and run `bun` tasks with.
	 *
	 * @envvar MOON_BUN_VERSION
	 */
	version: string | null;
}

/** Options for npm, when used as a package manager. */
export interface NpmConfig {
	/** Location of the WASM plugin to use for npm support. */
	plugin: string | null;
	/**
	 * The version of npm to download, install, and run `npm` tasks with.
	 *
	 * @envvar MOON_NPM_VERSION
	 */
	version: string | null;
}

export type NodePackageManager = 'bun' | 'npm' | 'pnpm' | 'yarn';

/** Options for pnpm, when used as a package manager. */
export interface PnpmConfig {
	/** Location of the WASM plugin to use for pnpm support. */
	plugin: string | null;
	/**
	 * The version of pnpm to download, install, and run `pnpm` tasks with.
	 *
	 * @envvar MOON_PNPM_VERSION
	 */
	version: string | null;
}

export type NodeVersionManager = 'nodenv' | 'nvm';

/** Options for Yarn, when used as a package manager. */
export interface YarnConfig {
	/** Location of the WASM plugin to use for Yarn support. */
	plugin: string | null;
	/** Plugins to automatically install for Yarn v2 and above. */
	plugins: string[];
	/**
	 * The version of Yarn to download, install, and run `yarn` tasks with.
	 *
	 * @envvar MOON_YARN_VERSION
	 */
	version: string | null;
}

/**
 * Configures and enables the Node.js platform.
 * Docs: https://moonrepo.dev/docs/config/toolchain#node
 */
export interface NodeConfig {
	/**
	 * When `version` is defined, syncs the version as a constraint to
	 * `package.json` engines.
	 *
	 * @default true
	 */
	addEnginesConstraint: boolean;
	/**
	 * Arguments to automatically pass to all tasks that execute the
	 * `node` binary.
	 */
	binExecArgs: string[];
	/** Options for Bun, when used as a package manager. */
	bun: BunpmConfig | null;
	/**
	 * Automatically dedupes the lockfile when dependencies have changed.
	 *
	 * @default true
	 */
	dedupeOnLockfileChange: boolean;
	/**
	 * The dependency version format to use when syncing projects
	 * as dependencies.
	 *
	 * @default 'workspace'
	 */
	dependencyVersionFormat: NodeVersionFormat;
	/** Automatically infer moon tasks from `package.json` scripts. */
	inferTasksFromScripts: boolean;
	/** Options for npm, when used as a package manager. */
	npm: NpmConfig;
	/**
	 * The package manager to use for installing dependencies.
	 *
	 * @default 'npm'
	 */
	packageManager: NodePackageManager;
	/** Location of the WASM plugin to use for Node.js support. */
	plugin: string | null;
	/** Options for pnpm, when used as a package manager. */
	pnpm: PnpmConfig | null;
	/**
	 * Assumes only the root `package.json` is used for dependencies.
	 * Can be used to support the "one version policy" pattern.
	 */
	rootPackageOnly: boolean;
	/**
	 * Automatically syncs moon project-to-project relationships as
	 * dependencies for each `package.json` in the workspace.
	 *
	 * @default true
	 */
	syncProjectWorkspaceDependencies: boolean;
	/**
	 * When `version` is defined, syncs the version to the chosen config.
	 *
	 * @default 'nvm'
	 */
	syncVersionManagerConfig: NodeVersionManager | null;
	/**
	 * The version of Node.js to download, install, and run `node` tasks with.
	 *
	 * @envvar MOON_NODE_VERSION
	 */
	version: string | null;
	/** Options for Yarn, when used as a package manager. */
	yarn: YarnConfig | null;
}

/**
 * Configures and enables the Rust platform.
 * Docs: https://moonrepo.dev/docs/config/toolchain#rust
 */
export interface RustConfig {
	/** List of binaries to install into the environment using `cargo install`. */
	bins: BinEntry[];
	/** Rust components to automatically install. */
	components: string[];
	/** Location of the WASM plugin to use for Rust support. */
	plugin: string | null;
	/** When `version` is defined, syncs the version to `rust-toolchain.toml`. */
	syncToolchainConfig: boolean;
	/** Rust targets to automatically install. */
	targets: string[];
	/**
	 * The version of Rust to download, install, and run `cargo` tasks with.
	 *
	 * @envvar MOON_RUST_VERSION
	 */
	version: string | null;
}

/**
 * Configures and enables the TypeScript platform.
 * Docs: https://moonrepo.dev/docs/config/toolchain#typescript
 */
export interface TypeScriptConfig {
	/**
	 * When `syncProjectReferences` is enabled, will create a `tsconfig.json`
	 * in referenced projects if it does not exist.
	 *
	 * @default true
	 */
	createMissingConfig: boolean;
	/**
	 * Appends sources of project reference to `include` in `tsconfig.json`,
	 * for each project.
	 */
	includeProjectReferenceSources: boolean;
	/** Appends shared types to `include` in `tsconfig.json`, for each project. */
	includeSharedTypes: boolean;
	/**
	 * Name of the `tsconfig.json` file within each project.
	 *
	 * @default 'tsconfig.json'
	 */
	projectConfigFileName: string;
	/**
	 * The relative root to the TypeScript root. Primarily used for
	 * resolving project references.
	 *
	 * @default '.'
	 */
	root: string;
	/**
	 * Name of the `tsconfig.json` file at the workspace root.
	 *
	 * @default 'tsconfig.json'
	 */
	rootConfigFileName: string;
	/**
	 * Name of the shared compiler options `tsconfig.json` file
	 * at the workspace root.
	 *
	 * @default 'tsconfig.options.json'
	 */
	rootOptionsConfigFileName: string;
	/**
	 * Updates and routes `outDir` in `tsconfig.json` to moon's cache,
	 * for each project.
	 */
	routeOutDirToCache: boolean;
	/**
	 * Syncs all project dependencies as `references` in `tsconfig.json`,
	 * for each project.
	 *
	 * @default true
	 */
	syncProjectReferences: boolean;
	/**
	 * Syncs all project dependencies as `paths` in `tsconfig.json`,
	 * for each project.
	 */
	syncProjectReferencesToPaths: boolean;
}

/**
 * Configures all tools and platforms required for tasks.
 * Docs: https://moonrepo.dev/docs/config/toolchain
 */
export interface ToolchainConfig {
	/** @default 'https://moonrepo.dev/schemas/toolchain.json' */
	$schema: string;
	/** Configures and enables the Bun platform. */
	bun: BunConfig | null;
	/** Configures and enables the Deno platform. */
	deno: DenoConfig | null;
	/**
	 * Extends another toolchain configuration file. Supports a relative
	 * file path or a secure URL.
	 */
	extends: string | null;
	/** Configures and enables the Node.js platform. */
	node: NodeConfig | null;
	/** Configures and enables the Rust platform. */
	rust: RustConfig | null;
	/** Configures and enables the TypeScript platform. */
	typescript: TypeScriptConfig | null;
}

/**
 * Configures and enables the Bun platform.
 * Docs: https://moonrepo.dev/docs/config/toolchain#bun
 */
export interface PartialBunConfig {
	/**
	 * The dependency version format to use when syncing projects
	 * as dependencies.
	 *
	 * @default 'workspace'
	 */
	dependencyVersionFormat?: NodeVersionFormat | null;
	/** Automatically infer moon tasks from `package.json` scripts. */
	inferTasksFromScripts?: boolean | null;
	/** Location of the WASM plugin to use for Bun support. */
	plugin?: string | null;
	/**
	 * Assumes only the root `package.json` is used for dependencies.
	 * Can be used to support the "one version policy" pattern.
	 */
	rootPackageOnly?: boolean | null;
	/**
	 * Automatically syncs moon project-to-project relationships as
	 * dependencies for each `package.json` in the workspace.
	 *
	 * @default true
	 */
	syncProjectWorkspaceDependencies?: boolean | null;
	/**
	 * The version of Bun to download, install, and run `bun` tasks with.
	 *
	 * @envvar MOON_BUN_VERSION
	 */
	version?: string | null;
}

/** Configures to a tool-specific binary to install. */
export interface PartialBinConfig {
	/** Name of the binary, with optional version separated by `@`. */
	bin?: string | null;
	/** Force install the binary if it already exists. */
	force?: boolean | null;
	/** Only install the binary locally, and not within CI. */
	local?: boolean | null;
	/** For supported tools, a custom name to use. */
	name?: string | null;
}

export type PartialBinEntry = string | PartialBinConfig;

/**
 * Configures and enables the Deno platform.
 * Docs: https://moonrepo.dev/docs/config/toolchain#deno
 */
export interface PartialDenoConfig {
	/** List of binaries to install into the environment using `deno install`. */
	bins?: PartialBinEntry[] | null;
	/**
	 * Relative path to a dependency management file. Used for content hashing.
	 *
	 * @default 'deps.ts'
	 */
	depsFile?: string | null;
	/** Requires and forces the use of `deno.lock` files. */
	lockfile?: boolean | null;
	/** Location of the WASM plugin to use for Deno support. */
	plugin?: string | null;
	/**
	 * The version of Deno to download, install, and run `deno` tasks with.
	 *
	 * @envvar MOON_DENO_VERSION
	 */
	version?: string | null;
}

/** Options for Bun, when used as a package manager. */
export interface PartialBunpmConfig {
	/** Location of the WASM plugin to use for Bun support. */
	plugin?: string | null;
	/**
	 * The version of Bun to download, install, and run `bun` tasks with.
	 *
	 * @envvar MOON_BUN_VERSION
	 */
	version?: string | null;
}

/** Options for npm, when used as a package manager. */
export interface PartialNpmConfig {
	/** Location of the WASM plugin to use for npm support. */
	plugin?: string | null;
	/**
	 * The version of npm to download, install, and run `npm` tasks with.
	 *
	 * @envvar MOON_NPM_VERSION
	 */
	version?: string | null;
}

/** Options for pnpm, when used as a package manager. */
export interface PartialPnpmConfig {
	/** Location of the WASM plugin to use for pnpm support. */
	plugin?: string | null;
	/**
	 * The version of pnpm to download, install, and run `pnpm` tasks with.
	 *
	 * @envvar MOON_PNPM_VERSION
	 */
	version?: string | null;
}

/** Options for Yarn, when used as a package manager. */
export interface PartialYarnConfig {
	/** Location of the WASM plugin to use for Yarn support. */
	plugin?: string | null;
	/** Plugins to automatically install for Yarn v2 and above. */
	plugins?: string[] | null;
	/**
	 * The version of Yarn to download, install, and run `yarn` tasks with.
	 *
	 * @envvar MOON_YARN_VERSION
	 */
	version?: string | null;
}

/**
 * Configures and enables the Node.js platform.
 * Docs: https://moonrepo.dev/docs/config/toolchain#node
 */
export interface PartialNodeConfig {
	/**
	 * When `version` is defined, syncs the version as a constraint to
	 * `package.json` engines.
	 *
	 * @default true
	 */
	addEnginesConstraint?: boolean | null;
	/**
	 * Arguments to automatically pass to all tasks that execute the
	 * `node` binary.
	 */
	binExecArgs?: string[] | null;
	/** Options for Bun, when used as a package manager. */
	bun?: PartialBunpmConfig | null;
	/**
	 * Automatically dedupes the lockfile when dependencies have changed.
	 *
	 * @default true
	 */
	dedupeOnLockfileChange?: boolean | null;
	/**
	 * The dependency version format to use when syncing projects
	 * as dependencies.
	 *
	 * @default 'workspace'
	 */
	dependencyVersionFormat?: NodeVersionFormat | null;
	/** Automatically infer moon tasks from `package.json` scripts. */
	inferTasksFromScripts?: boolean | null;
	/** Options for npm, when used as a package manager. */
	npm?: PartialNpmConfig | null;
	/**
	 * The package manager to use for installing dependencies.
	 *
	 * @default 'npm'
	 */
	packageManager?: NodePackageManager | null;
	/** Location of the WASM plugin to use for Node.js support. */
	plugin?: string | null;
	/** Options for pnpm, when used as a package manager. */
	pnpm?: PartialPnpmConfig | null;
	/**
	 * Assumes only the root `package.json` is used for dependencies.
	 * Can be used to support the "one version policy" pattern.
	 */
	rootPackageOnly?: boolean | null;
	/**
	 * Automatically syncs moon project-to-project relationships as
	 * dependencies for each `package.json` in the workspace.
	 *
	 * @default true
	 */
	syncProjectWorkspaceDependencies?: boolean | null;
	/**
	 * When `version` is defined, syncs the version to the chosen config.
	 *
	 * @default 'nvm'
	 */
	syncVersionManagerConfig?: NodeVersionManager | null;
	/**
	 * The version of Node.js to download, install, and run `node` tasks with.
	 *
	 * @envvar MOON_NODE_VERSION
	 */
	version?: string | null;
	/** Options for Yarn, when used as a package manager. */
	yarn?: PartialYarnConfig | null;
}

/**
 * Configures and enables the Rust platform.
 * Docs: https://moonrepo.dev/docs/config/toolchain#rust
 */
export interface PartialRustConfig {
	/** List of binaries to install into the environment using `cargo install`. */
	bins?: PartialBinEntry[] | null;
	/** Rust components to automatically install. */
	components?: string[] | null;
	/** Location of the WASM plugin to use for Rust support. */
	plugin?: string | null;
	/** When `version` is defined, syncs the version to `rust-toolchain.toml`. */
	syncToolchainConfig?: boolean | null;
	/** Rust targets to automatically install. */
	targets?: string[] | null;
	/**
	 * The version of Rust to download, install, and run `cargo` tasks with.
	 *
	 * @envvar MOON_RUST_VERSION
	 */
	version?: string | null;
}

/**
 * Configures and enables the TypeScript platform.
 * Docs: https://moonrepo.dev/docs/config/toolchain#typescript
 */
export interface PartialTypeScriptConfig {
	/**
	 * When `syncProjectReferences` is enabled, will create a `tsconfig.json`
	 * in referenced projects if it does not exist.
	 *
	 * @default true
	 */
	createMissingConfig?: boolean | null;
	/**
	 * Appends sources of project reference to `include` in `tsconfig.json`,
	 * for each project.
	 */
	includeProjectReferenceSources?: boolean | null;
	/** Appends shared types to `include` in `tsconfig.json`, for each project. */
	includeSharedTypes?: boolean | null;
	/**
	 * Name of the `tsconfig.json` file within each project.
	 *
	 * @default 'tsconfig.json'
	 */
	projectConfigFileName?: string | null;
	/**
	 * The relative root to the TypeScript root. Primarily used for
	 * resolving project references.
	 *
	 * @default '.'
	 */
	root?: string | null;
	/**
	 * Name of the `tsconfig.json` file at the workspace root.
	 *
	 * @default 'tsconfig.json'
	 */
	rootConfigFileName?: string | null;
	/**
	 * Name of the shared compiler options `tsconfig.json` file
	 * at the workspace root.
	 *
	 * @default 'tsconfig.options.json'
	 */
	rootOptionsConfigFileName?: string | null;
	/**
	 * Updates and routes `outDir` in `tsconfig.json` to moon's cache,
	 * for each project.
	 */
	routeOutDirToCache?: boolean | null;
	/**
	 * Syncs all project dependencies as `references` in `tsconfig.json`,
	 * for each project.
	 *
	 * @default true
	 */
	syncProjectReferences?: boolean | null;
	/**
	 * Syncs all project dependencies as `paths` in `tsconfig.json`,
	 * for each project.
	 */
	syncProjectReferencesToPaths?: boolean | null;
}

/**
 * Configures all tools and platforms required for tasks.
 * Docs: https://moonrepo.dev/docs/config/toolchain
 */
export interface PartialToolchainConfig {
	/** @default 'https://moonrepo.dev/schemas/toolchain.json' */
	$schema?: string | null;
	/** Configures and enables the Bun platform. */
	bun?: PartialBunConfig | null;
	/** Configures and enables the Deno platform. */
	deno?: PartialDenoConfig | null;
	/**
	 * Extends another toolchain configuration file. Supports a relative
	 * file path or a secure URL.
	 */
	extends?: string | null;
	/** Configures and enables the Node.js platform. */
	node?: PartialNodeConfig | null;
	/** Configures and enables the Rust platform. */
	rust?: PartialRustConfig | null;
	/** Configures and enables the TypeScript platform. */
	typescript?: PartialTypeScriptConfig | null;
}
