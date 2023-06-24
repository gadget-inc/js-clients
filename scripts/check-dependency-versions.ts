/**
 * This script makes sure that packages in this monorepo with interdependencies depend on the latest version
 */

const targets = {
  "@gadgetinc/api-client-core": (await fs.readJSON("packages/api-client-core/package.json")).version,
  "@gadgetinc/react": (await fs.readJSON("packages/react/package.json")).version,
};

import semver from "semver";
import { fs, globby } from "zx";

for (const filepath of await globby("packages/*/package.json")) {
  const manifest = await fs.readJSON(filepath);
  if (manifest.private) continue;
  for (const key of ["dependencies", "peerDependencies"]) {
    for (const [target, requiredVersion] of Object.entries(targets)) {
      const dependencyVersion = manifest[key]?.[target];
      if (dependencyVersion) {
        if (!semver.satisfies(requiredVersion, dependencyVersion)) {
          console.error(`${manifest.name} has an invalid version for ${key} on ${target}`);
          console.error(`${dependencyVersion} does not satisfy ${requiredVersion}`);
          process.exitCode = 1;
        }
      }
    }
  }
}
