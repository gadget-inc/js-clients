import "@testing-library/jest-dom/extend-expect";
jest.setTimeout(process.env.CI == "vscode-jest-tests" ? 20 * 60 * 1000 : 5 * 1000);

export {};
