import { createHooks } from "../src/createHooks.js";
import { createMockAdapter, createMockApiClient, createMockConnection } from "./mockAdapter.js";

describe("lazy hook registration - useFindOne", () => {
  it("should allow importing useFindOne after createHooks has been called", async () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    // The hook should be importable without throwing "Cannot access before initialization"
    const module = await import("../src/useFindOne.js");
    expect(module).toBeDefined();
    expect(module.useFindOne).toBeDefined();
    expect(typeof module.useFindOne).toBe("function");
  });
});
