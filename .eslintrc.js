module.exports = {
  extends: "@gadgetinc/eslint-config",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./packages/*/tsconfig.json", "./scripts/tsconfig.json", "./packages/blog-example/tsconfig.node.json"],
  },
  rules: {
    "lodash/import-scope": "off",
    "react/react-in-jsx-scope": "off",
  },
};
