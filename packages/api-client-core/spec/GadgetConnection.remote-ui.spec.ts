/**
 * @jest-environment ./spec/remote-ui-environment.ts
 */
jest.mock("isomorphic-ws", () => null); // mimic browser environment for remote-ui where the websocket global is not available
jest.mock("graphql-ws", () => {
  return { createClient: jest.fn(), CloseCode: { ConnectionAcknowledgementTimeout: 1, ConnectionInitialisationTimeout: 2 } };
});
import { GadgetConnection } from "../src/GadgetConnection.js";
import { GadgetConnectionSharedSuite } from "./GadgetConnection-suite.js";

describe("GadgetConnection in remote-ui", () => {
  GadgetConnectionSharedSuite();

  test("throws an error concerning missing websocket constructor as it is not available", async () => {
    const connection = new GadgetConnection({ endpoint: "https://someapp.gadget.app" });
    await expect(async () => await connection.transaction({}, async () => true)).rejects.toThrowErrorMatchingInlineSnapshot(
      `"Can't use this GadgetClient for this subscription-based operation as there's no global WebSocket implementation available. Please pass one as the \`websocketImplementation\` option to the GadgetClient constructor."`
    );
  });
});
