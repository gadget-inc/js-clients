import semver from "semver";
import { fs, globby } from "zx";

/**
 * This script makes sure that packages depending on @gadgetinc/api-client-core
 * specify a version range that includes the current version.
 */
void (async () => {
  const { version } = await fs.readJSON("packages/api-client-core/package.json");

  for (const filepath of await globby("packages/!(api-client-core)*/package.json")) {
    const { name, dependencies } = await fs.readJSON(filepath);
    const dependencyVersion = dependencies["@gadgetinc/api-client-core"];

    if (!semver.satisfies(version, dependencyVersion)) {
      console.error(`${name} has an invalid version for dependency @gadgetinc/api-client-core`);
      console.error(`${dependencyVersion} does not satisfy ${version}`);
      process.exit(1);
    }
  }
})();
