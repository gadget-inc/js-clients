import "@testing-library/jest-dom/extend-expect";
jest.setTimeout(process.env.CI == "vscode-jest-tests" ? 20 * 60 * 1000 : 5 * 1000);

// nock's fetch support is forthcoming and still broken, so we mock the global fetch to use cross-fetch, which nock supports mocking just fine
global.fetch = require("cross-fetch");

export {};
