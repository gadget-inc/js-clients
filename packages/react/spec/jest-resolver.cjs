/**
 *
 * @param {string} path
 * @param {import("jest-resolve").ResolverOptions} options
 */
module.exports = (path, options) => {
  // Call the defaultResolver, so we leverage its cache, error handling, etc.
  return options.defaultResolver(path, {
    ...options,
    // Use packageFilter to process parsed `package.json` before the resolution (see https://www.npmjs.com/package/resolve#resolveid-opts-cb)
    packageFilter: (pkg) => {
      // This is a workaround for https://github.com/uuidjs/uuid/pull/616
      //
      // jest-environment-jsdom 28+ tries to use browser exports instead of default exports, but these packages only offer an ESM browser export and not a CommonJS one. Jest does not yet
      // support ESM modules natively, so this causes a Jest error related to trying to parse "export" syntax.
      //
      // This workaround prevents Jest from considering uuid's module-based exports at all; it falls back to uuid's CommonJS+node "main" property.
      //
      // See https://github.com/microsoft/accessibility-insights-web/pull/5421#issuecomment-1109168149
      // See https://github.com/jestjs/jest/issues/12770
      if (
        pkg.name === "@react-hook/intersection-observer" ||
        pkg.name === "@react-hook/passive-layout-effect" ||
        pkg.name == "uuid" ||
        pkg.name == "nanoid"
      ) {
        delete pkg["exports"];
        delete pkg["module"];
      }
      return pkg;
    },
  });
};
