module.exports = {
  extends: "@gadgetinc/eslint-config",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: [
      "./packages/*/tsconfig.json",
      "./packages/react/cypress/tsconfig.json",
      "./scripts/tsconfig.json",
      "./packages/blog-example/tsconfig.node.json",
    ],
  },
  settings: {
    "import/extensions": [".js", ".jsx"],
  },
  rules: {
    "lodash/import-scope": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/require-await": "off",
    "import/extensions": ["error", "ignorePackages"],
  },
};
