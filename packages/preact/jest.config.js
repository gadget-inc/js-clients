// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

export default {
  displayName: "preact",
  clearMocks: true,
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
    "^preact(/(.*)|$)": "preact$1",
    "^react$": "preact/compat",
    "^react-dom/test-utils$": "preact/test-utils",
    "^react-dom$": "preact/compat",
    "^react/jsx-runtime$": "preact/jsx-runtime",
    "^.+\\.(css|sass|scss|less)$": "identity-obj-proxy",
  },
  restoreMocks: true,
  roots: ["<rootDir>"],
  setupFilesAfterEnv: ["<rootDir>/spec/jest.setup.ts"],
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/"],
  testRunner: "jest-circus/runner",
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        configFile: false,
        env: { targets: { node: 20 } },
        jsc: {
          parser: { syntax: "typescript", tsx: true },
          transform: {
            react: {
              runtime: "automatic",
              importSource: "preact",
            },
          },
        },
        module: { type: "es6" },
        sourceMaps: true,
      },
    ],
  },
};
