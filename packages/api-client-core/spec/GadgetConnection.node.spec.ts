import { AuthenticationMode, BrowserSessionStorageType, GadgetConnection, InMemoryStorage } from "../src";
import { GadgetConnectionSharedSuite } from "./GadgetConnection-suite";

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

    it("should respect environment option", () => {
      const devConnection = new GadgetConnection({
        endpoint: "https://someapp.gadget.app",
        authenticationMode: { browserSession: { storageType: BrowserSessionStorageType.Durable } },
        environment: "development",
      });
      const prodConnection = new GadgetConnection({
        endpoint: "https://someapp.gadget.app",
        authenticationMode: { browserSession: { storageType: BrowserSessionStorageType.Durable } },
        environment: "production",
      });

      expect((devConnection as any).requestHeaders()).toEqual(
        expect.objectContaining({
          "x-gadget-environment": "Development",
        })
      );

      expect((prodConnection as any).requestHeaders()).toEqual(
        expect.objectContaining({
          "x-gadget-environment": "Production",
        })
      );
    });

    it("should default to NODE_ENV", () => {
      const oldNodeEnv = process.env.NODE_ENV;
      process.env.NODE_ENV = "production";

      const connection = new GadgetConnection({
        endpoint: "https://someapp.gadget.app",
        authenticationMode: { browserSession: { storageType: BrowserSessionStorageType.Durable } },
      });

      expect((connection as any).requestHeaders()).toEqual(
        expect.objectContaining({
          "x-gadget-environment": "Production",
        })
      );

      process.env.NODE_ENV = oldNodeEnv;
    });

    it("should default to development if NODE_ENV not defined", () => {
      const oldNodeEnv = process.env.NODE_ENV;
      process.env.NODE_ENV = undefined;

      const connection = new GadgetConnection({
        endpoint: "https://someapp.gadget.app",
        authenticationMode: { browserSession: { storageType: BrowserSessionStorageType.Durable } },
      });

      expect((connection as any).requestHeaders()).toEqual(
        expect.objectContaining({
          "x-gadget-environment": "Development",
        })
      );

      process.env.NODE_ENV = oldNodeEnv;
    });

    it("should default to development if invalid environment", () => {
      const connection = new GadgetConnection({
        endpoint: "https://someapp.gadget.app",
        authenticationMode: { browserSession: { storageType: BrowserSessionStorageType.Durable } },
        environment: "not-valid-environment",
      });

      expect((connection as any).requestHeaders()).toEqual(
        expect.objectContaining({
          "x-gadget-environment": "Development",
        })
      );
    });

    it("should allow any casing for valid environment", () => {
      const connection = new GadgetConnection({
        endpoint: "https://someapp.gadget.app",
        authenticationMode: { browserSession: { storageType: BrowserSessionStorageType.Durable } },
        environment: "pRodUctION",
      });

      expect((connection as any).requestHeaders()).toEqual(
        expect.objectContaining({
          "x-gadget-environment": "Production",
        })
      );

      const connection2 = new GadgetConnection({
        endpoint: "https://someapp.gadget.app",
        authenticationMode: { browserSession: { storageType: BrowserSessionStorageType.Durable } },
        environment: "Production",
      });

      expect((connection2 as any).requestHeaders()).toEqual(
        expect.objectContaining({
          "x-gadget-environment": "Production",
        })
      );
    });
  });
});
