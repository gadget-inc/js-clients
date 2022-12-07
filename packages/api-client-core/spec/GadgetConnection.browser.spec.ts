/**
 * @jest-environment jsdom
 */
import gql from "gql-tag";
import nock from "nock";
import { AuthenticationMode, BrowserSessionStorageType, GadgetConnection, InMemoryStorage } from "../src";
import { GadgetConnectionSharedSuite } from "./GadgetConnection-suite";
import { withWindowMissingSupport } from "./helpers";

nock.disableNetConnect();

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

  describe("token strategy", () => {
    beforeEach(() => {
      nock.cleanAll();
    });

    afterEach(() => {
      expect(nock.pendingMocks()).toEqual([]);
      // ensure local storage data doesn't leak between tests
      window.localStorage.clear();
    });

    it("should store a x-set-authorization header and reuse it for subsequent requests", async () => {
      nock("https://someapp.gadget.app")
        .post("/api/graphql")
        .reply(
          200,
          function () {
            expect(this.req.headers["authorization"]).toBeUndefined();
            return {
              data: {
                meta: {
                  appName: "some app",
                },
              },
            };
          },
          {
            "x-set-authorization": "Session token-123",
          }
        )
        .post("/api/graphql")
        .reply(
          200,
          function () {
            expect(this.req.headers["authorization"]).toEqual(["Session token-123"]);
            return {
              data: {
                currentSession: {
                  id: 1,
                },
              },
            };
          },
          {
            "x-set-authorization": "Session token-123",
          }
        );

      const connection = new GadgetConnection({
        endpoint: "https://someapp.gadget.app/api/graphql",
        authenticationMode: { browserSession: { storageType: BrowserSessionStorageType.Durable } },
      });

      const firstResult = await connection.currentClient
        .query(
          gql`
            {
              meta {
                appName
              }
            }
          `,
          {}
        )
        .toPromise();

      expect(firstResult.data).toEqual({ meta: { appName: "some app" } });

      const secondResult = await connection.currentClient
        .query(
          gql`
            {
              currentSession {
                id
              }
            }
          `,
          {}
        )
        .toPromise();

      expect(secondResult.data).toEqual({ currentSession: { id: 1 } });
    });

    it("should not re-use session tokens across apps", async () => {
      nock("https://someapp.gadget.app")
        .post("/api/graphql")
        .reply(
          200,
          function () {
            expect(this.req.headers["authorization"]).toBeUndefined();
            return {
              data: {
                meta: {
                  appName: "some app",
                },
              },
            };
          },
          {
            "x-set-authorization": "Session token-123",
          }
        );
      nock("https://anotherapp.gadget.app")
        .post("/api/graphql")
        .reply(
          200,
          function () {
            expect(this.req.headers["authorization"]).toBeUndefined();
            return {
              data: {
                meta: {
                  appName: "another app",
                },
              },
            };
          },
          {
            "x-set-authorization": "Session token-456",
          }
        );

      let connection = new GadgetConnection({
        endpoint: "https://someapp.gadget.app/api/graphql",
        authenticationMode: { browserSession: { storageType: BrowserSessionStorageType.Durable } },
      });

      const firstResult = await connection.currentClient
        .query(
          gql`
            {
              meta {
                appName
              }
            }
          `,
          {}
        )
        .toPromise();

      expect(firstResult.data).toEqual({ meta: { appName: "some app" } });

      connection = new GadgetConnection({
        endpoint: "https://anotherapp.gadget.app/api/graphql",
        authenticationMode: { browserSession: { storageType: BrowserSessionStorageType.Durable } },
      });

      const secondResult = await connection.currentClient
        .query(
          gql`
            {
              meta {
                appName
              }
            }
          `,
          {}
        )
        .toPromise();

      expect(secondResult.data).toEqual({ meta: { appName: "another app" } });
    });
  });
});
