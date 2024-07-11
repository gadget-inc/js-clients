/**
 * @jest-environment jsdom
 */
import { AuthenticationMode, BrowserSessionStorageType, GadgetConnection, InMemoryStorage } from "../src/index.js";
import { GadgetConnectionSharedSuite } from "./GadgetConnection-suite.js";
import { withWindowMissingSupport } from "./helpers.js";

describe("GadgetConnection in the browser", () => {
  GadgetConnectionSharedSuite("    __typename\n");

  describe("browser session authentication with varying support for localStorage", () => {
    it("should default to the durable authentication mode browserSession: true", () => {
      const connection = new GadgetConnection({ endpoint: "https://someapp.gadget.app", authenticationMode: { browserSession: true } });
      expect(connection.authenticationMode).toEqual(AuthenticationMode.BrowserSession);
      expect((connection as any).sessionTokenStore).toBe(window.localStorage);
    });

    it("should use localStorage when available for the durable authentication mode", () => {
      const connection = new GadgetConnection({
        endpoint: "https://someapp.gadget.app",
        authenticationMode: { browserSession: { storageType: BrowserSessionStorageType.Durable } },
      });
      expect(connection.authenticationMode).toEqual(AuthenticationMode.BrowserSession);
      expect((connection as any).sessionTokenStore).toBe(window.localStorage);
    });

    it("should use sessionStorage when available for the session authentication mode", () => {
      const connection = new GadgetConnection({
        endpoint: "https://someapp.gadget.app",
        authenticationMode: { browserSession: { storageType: BrowserSessionStorageType.Session } },
      });
      expect(connection.authenticationMode).toEqual(AuthenticationMode.BrowserSession);
      expect((connection as any).sessionTokenStore).toBe(window.sessionStorage);
    });

    it("should use temporary storage when localStorage is not available for the durable authentication mode", () => {
      withWindowMissingSupport("localStorage", () => {
        const connection = new GadgetConnection({
          endpoint: "https://someapp.gadget.app",
          authenticationMode: { browserSession: { storageType: BrowserSessionStorageType.Durable } },
        });
        expect(connection.authenticationMode).toEqual(AuthenticationMode.BrowserSession);
        expect((connection as any).sessionTokenStore).toBeInstanceOf(InMemoryStorage);
      });
    });

    it("should use temporary storage when localStorage is not available for the session authentication mode", () => {
      withWindowMissingSupport("sessionStorage", () => {
        const connection = new GadgetConnection({
          endpoint: "https://someapp.gadget.app",
          authenticationMode: { browserSession: { storageType: BrowserSessionStorageType.Session } },
        });
        expect(connection.authenticationMode).toEqual(AuthenticationMode.BrowserSession);
        expect((connection as any).sessionTokenStore).toBeInstanceOf(InMemoryStorage);
      });
    });
  });
});
