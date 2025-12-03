import { createHooks } from "../src/createHooks.js";
import { createMockAdapter, createMockApiClient, createMockConnection } from "./mockAdapter.js";

describe("lazy hook registration - useGet", () => {
  it("should allow importing useGet after createHooks has been called", async () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    // The hook should be importable without throwing "Cannot access before initialization"
    const module = await import("../src/useGet.js");
    expect(module).toBeDefined();
    expect(module.useGet).toBeDefined();
    expect(typeof module.useGet).toBe("function");
  });
});
