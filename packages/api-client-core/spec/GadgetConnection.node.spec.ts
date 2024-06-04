jest.mock("graphql-ws", () => {
  return { createClient: jest.fn(), CloseCode: { ConnectionAcknowledgementTimeout: 1, ConnectionInitialisationTimeout: 2 } };
});
import { AuthenticationMode, BrowserSessionStorageType, GadgetConnection, InMemoryStorage } from "../src/index.js";
import { GadgetConnectionSharedSuite } from "./GadgetConnection-suite.js";

describe("GadgetConnection in node", () => {
  GadgetConnectionSharedSuite();

  describe("browser session authentication in node", () => {
    it("should default to temporary storage with mode browserSession: true", () => {
      const connection = new GadgetConnection({ endpoint: "https://someapp.gadget.app", authenticationMode: { browserSession: true } });
      expect(connection.authenticationMode).toEqual(AuthenticationMode.BrowserSession);
      // node doesn't have localstorage, must use an in-memory store
      expect((connection as any).sessionTokenStore).toBeInstanceOf(InMemoryStorage);
    });

    it("should use temporary storage for the durable authentication mode", () => {
      const connection = new GadgetConnection({
        endpoint: "https://someapp.gadget.app",
        authenticationMode: { browserSession: { storageType: BrowserSessionStorageType.Durable } },
      });
      expect(connection.authenticationMode).toEqual(AuthenticationMode.BrowserSession);
      // node doesn't have localstorage, must use an in-memory store
      expect((connection as any).sessionTokenStore).toBeInstanceOf(InMemoryStorage);
    });
  });
});
