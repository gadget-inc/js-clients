import { createHooks } from "../src/createHooks.js";
import { createMockAdapter, createMockApiClient, createMockConnection } from "./mockAdapter.js";

describe("lazy hook registration - useEnqueue", () => {
  it("should allow importing useEnqueue after createHooks has been called", async () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    // The hook should be importable without throwing "Cannot access before initialization"
    const module = await import("../src/useEnqueue.js");
    expect(module).toBeDefined();
    expect(module.useEnqueue).toBeDefined();
    expect(typeof module.useEnqueue).toBe("function");
  });
});
