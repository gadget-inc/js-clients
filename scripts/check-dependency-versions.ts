#!/usr/bin/env -S node_modules/.bin/tsx
import semver from "semver";
import { fs, globby } from "zx";

/**
 * This script makes sure that packages in this monorepo with interdependencies depend on the latest version
 */

const targets = {
  "@gadgetinc/core": (await fs.readJSON("packages/core/package.json")).version,
  "@gadgetinc/react": (await fs.readJSON("packages/react/package.json")).version,
};

for (const filepath of await globby("packages/*/package.json")) {
  const manifest = await fs.readJSON(filepath);
  if (manifest.private) continue;
  for (const key of ["dependencies", "peerDependencies"]) {
    for (const [target, requiredVersion] of Object.entries(targets)) {
      const dependencyVersion = manifest[key]?.[target];
      if (dependencyVersion) {
        // Parse the version range to handle pre-release versions
        const range = semver.validRange(dependencyVersion);
        if (!range || !semver.satisfies(requiredVersion, range, { includePrerelease: true })) {
          console.error(`${manifest.name} has an invalid version for ${key} on ${target}`);
          console.error(`${dependencyVersion} does not satisfy ${requiredVersion}`);
          process.exitCode = 1;
        }
      }
    }
  }
}
