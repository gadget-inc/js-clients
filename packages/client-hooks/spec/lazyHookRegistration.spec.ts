import { jest } from "@jest/globals";
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
});
