import { createHooks } from "../src/createHooks.js";
import { createMockAdapter, createMockApiClient, createMockConnection } from "./mockAdapter.js";

describe("lazy hook registration - useAction", () => {
  it("should allow importing useAction after createHooks has been called", async () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    // The hook should be importable without throwing "Cannot access before initialization"
    const module = await import("../src/useAction.js");
    expect(module).toBeDefined();
    expect(module.useAction).toBeDefined();
    expect(typeof module.useAction).toBe("function");
  });
});
