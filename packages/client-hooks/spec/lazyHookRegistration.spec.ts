import { jest } from "@jest/globals";
import globby from "globby";
import { createHooks, createHookStub } from "../src/createHooks.js";
import { createMockAdapter, createMockApiClient, createMockConnection } from "./mockAdapter.js";

describe("lazy hook registration", () => {
  it("should register hooks that are loaded after createHooks is called", () => {
    // Setup: Create adapter and initialize hooks
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    // Simulate initial module loading - hooks system is initialized
    createHooks(adapter);

    // Simulate lazy loading a chunk with a new hook after initialization
    // This simulates what happens when a code-split chunk containing a hook is imported
    const mockRegistrationFn = jest.fn();
    createHookStub("useLazyLoadedHook", mockRegistrationFn);

    // The registration function should have been called immediately
    // because createHooks was already called with an adapter
    expect(mockRegistrationFn).toHaveBeenCalledWith(adapter, expect.anything());
  });

  it("should have a lazy loading test spec file for every hook exported from index.ts", async () => {
    // Import the index module to get all exported hooks
    const indexModule = await import("../src/index.js");

    // Get all hook names that start with "use"
    const hookNames = Object.keys(indexModule).filter(
      (key) =>
        key.startsWith("use") &&
        !["useApi", "useConnection", "useCoreImplementation", "useMutation", "useQuery"].includes(key) &&
        typeof indexModule[key as keyof typeof indexModule] === "function"
    );

    // Get all lazy loading test files
    const testFiles = await globby("spec/lazyHookRegistration-*.spec.ts", {
      cwd: new URL("../", import.meta.url).pathname,
    });

    // Extract hook names from test file names
    const testedHooks = testFiles
      .map((file) => {
        const match = file.match(/lazyHookRegistration-(\w+)\.spec\.ts$/);
        return match ? match[1] : null;
      })
      .filter(Boolean);

    // Check that every hook has a corresponding test file
    const missingTests = hookNames.filter((hookName) => !testedHooks.includes(hookName));

    expect(missingTests).toEqual([]);

    if (missingTests.length > 0) {
      throw new Error(
        `Missing lazy loading test files for hooks: ${missingTests.join(", ")}\n` +
          `Please create test files named: ${missingTests.map((h) => `spec/lazyHookRegistration-${h}.spec.ts`).join(", ")}`
      );
    }
  });
});
