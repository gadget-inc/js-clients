import gql from "gql-tag";
import nock from "nock";
import { BrowserSessionStorageType } from "../src";
import { AuthenticationMode, GadgetConnection } from "../src/GadgetConnection";

const base64 = (str: string) => Buffer.from(str).toString("base64");
nock.disableNetConnect();

describe("GadgetConnection", () => {
  // this object is integration tested within Gadget itself also
  beforeEach(() => {
    nock.cleanAll();
  });

  afterEach(() => {
    expect(nock.pendingMocks()).toEqual([]);
  });

  it("should require an endpoint to be set", () => {
    expect(() => new GadgetConnection({} as any)).toThrowErrorMatchingInlineSnapshot(
      `"Must provide an \`endpoint\` option for a GadgetConnection to connect to"`
    );
  });

  it("should default to the anonymous authentication mode if no authentication mode is passed", () => {
    const connection = new GadgetConnection({ endpoint: "https://someapp.gadget.app" });
    expect(connection.authenticationMode).toEqual(AuthenticationMode.Anonymous);
  });

  describe("authorization", () => {
    it("should allow connecting with anonymous authentication", async () => {
      nock("https://someapp.gadget.app")
        .post("/api/graphql", { query: "{\n  meta {\n    appName\n  }\n}\n", variables: {} })
        .reply(200, {
          data: {
            meta: {
              appName: "some app",
            },
          },
        });

      const connection = new GadgetConnection({
        endpoint: "https://someapp.gadget.app/api/graphql",
        authenticationMode: { anonymous: true },
      });

      const result = await connection.currentClient
        .query(
          gql`
            {
              meta {
                appName
              }
            }
          `
        )
        .toPromise();

      expect(result.data).toEqual({ meta: { appName: "some app" } });
    });

    it("should allow connecting with internal auth token authentication", async () => {
      nock("https://someapp.gadget.app")
        .post("/api/graphql", { query: "{\n  meta {\n    appName\n  }\n}\n", variables: {} })
        // .basicAuth({ user: "gadget", pass: "opaque-token-thing" })
        .reply(200, function () {
          expect(this.req.headers["authorization"]).toEqual([`Basic ${base64("gadget-internal:opaque-token-thing")}`]);

          return {
            data: {
              meta: {
                appName: "some app",
              },
            },
          };
        });

      const connection = new GadgetConnection({
        endpoint: "https://someapp.gadget.app/api/graphql",
        authenticationMode: { internalAuthToken: "opaque-token-thing" },
      });

      const result = await connection.currentClient
        .query(
          gql`
            {
              meta {
                appName
              }
            }
          `
        )
        .toPromise();

      expect(result.data).toEqual({ meta: { appName: "some app" } });
    });

    it("should allow connecting with a gadget API Key", async () => {
      nock("https://someapp.gadget.app")
        .post("/api/graphql", { query: "{\n  meta {\n    appName\n  }\n}\n", variables: {} })
        .reply(200, function () {
          expect(this.req.headers["authorization"]).toEqual([`Bearer gsk-abcde`]);

          return {
            data: {
              meta: {
                appName: "some app",
              },
            },
          };
        });

      const connection = new GadgetConnection({
        endpoint: "https://someapp.gadget.app/api/graphql",
        authenticationMode: { apiKey: "gsk-abcde" },
      });

      const result = await connection.currentClient
        .query(
          gql`
            {
              meta {
                appName
              }
            }
          `
        )
        .toPromise();

      expect(result.data).toEqual({ meta: { appName: "some app" } });
    });

    describe("session token storage", () => {
      it("should allow connecting with no session in a session storage mode", async () => {
        nock("https://someapp.gadget.app")
          .post("/api/graphql", { query: "{\n  meta {\n    appName\n  }\n}\n", variables: {} })
          .reply(
            200,
            {
              data: {
                meta: {
                  appName: "some app",
                },
              },
            },
            {
              "x-set-authorization": "Session token-123",
            }
          );

        const connection = new GadgetConnection({
          endpoint: "https://someapp.gadget.app/api/graphql",
          authenticationMode: { browserSession: { storageType: BrowserSessionStorageType.Temporary } },
        });

        const result = await connection.currentClient
          .query(
            gql`
              {
                meta {
                  appName
                }
              }
            `
          )
          .toPromise();

        expect(result.data).toEqual({ meta: { appName: "some app" } });
      });

      it("should allow connecting with an initial session token in session storage mode", async () => {
        nock("https://someapp.gadget.app")
          .post("/api/graphql", { query: "{\n  meta {\n    appName\n  }\n}\n", variables: {} })
          .reply(
            200,
            function () {
              expect(this.req.headers["authorization"]).toEqual(["Session token-123"]);
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

        const connection = new GadgetConnection({
          endpoint: "https://someapp.gadget.app/api/graphql",
          authenticationMode: { browserSession: { storageType: BrowserSessionStorageType.Temporary, initialToken: "token-123" } },
        });

        const result = await connection.currentClient
          .query(
            gql`
              {
                meta {
                  appName
                }
              }
            `
          )
          .toPromise();

        expect(result.data).toEqual({ meta: { appName: "some app" } });
      });

      it("should store a x-set-authorization header and reuse it for subsequent requests", async () => {
        nock("https://someapp.gadget.app")
          .post("/api/graphql", { query: "{\n  meta {\n    appName\n  }\n}\n", variables: {} })
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
          .post("/api/graphql", { query: "{\n  currentSession {\n    id\n  }\n}\n", variables: {} })
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
          authenticationMode: { browserSession: { storageType: BrowserSessionStorageType.Temporary } },
        });

        const firstResult = await connection.currentClient
          .query(
            gql`
              {
                meta {
                  appName
                }
              }
            `
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
            `
          )
          .toPromise();

        expect(secondResult.data).toEqual({ currentSession: { id: 1 } });
      });
    });

    it("should support a custom auth mode that can set arbitrary fetch headers", async () => {
      nock("https://someapp.gadget.app")
        .post("/api/graphql", { query: "{\n  meta {\n    appName\n  }\n}\n", variables: {} })
        .reply(200, function () {
          expect(this.req.headers["authorization"]).toEqual([`FancyMode whatever`]);

          return {
            data: {
              meta: {
                appName: "some app",
              },
            },
          };
        });

      const connection = new GadgetConnection({
        endpoint: "https://someapp.gadget.app/api/graphql",
        authenticationMode: {
          custom: {
            processFetch: async (_input, init) => {
              init.headers ??= {};
              (init.headers as any).authorization = `FancyMode whatever`;
            },
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            processTransactionConnectionParams: async (params) => {},
          },
        },
      });

      const result = await connection.currentClient
        .query(
          gql`
            {
              meta {
                appName
              }
            }
          `
        )
        .toPromise();

      expect(result.data).toEqual({ meta: { appName: "some app" } });
    });

    it("custom auth mode requests shouldn't send back x-set-authorization headers on subsequent requests", async () => {
      nock("https://someapp.gadget.app")
        .post("/api/graphql", { query: "{\n  meta {\n    appName\n  }\n}\n", variables: {} })
        .reply(
          200,
          function () {
            expect(this.req.headers["x-whatever"]).toEqual(["FancyMode whatever"]);
            expect(this.req.headers["authorization"]).toBeFalsy();
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
        .post("/api/graphql", { query: "{\n  currentSession {\n    id\n  }\n}\n", variables: {} })
        .reply(
          200,
          function () {
            expect(this.req.headers["x-whatever"]).toEqual(["FancyMode whatever"]);
            expect(this.req.headers["authorization"]).toBeFalsy();
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
        authenticationMode: {
          custom: {
            processFetch: async (_input, init) => {
              init.headers ??= {};
              (init.headers as any)["x-whatever"] = `FancyMode whatever`;
            },
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            processTransactionConnectionParams: async (params) => {},
          },
        },
      });

      const firstResult = await connection.currentClient
        .query(
          gql`
            {
              meta {
                appName
              }
            }
          `
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
          `
        )
        .toPromise();

      expect(secondResult.data).toEqual({ currentSession: { id: 1 } });
    });

    it("custom auth modes can be activated after client construction with .setAuthentication mode", async () => {
      const connection = new GadgetConnection({
        endpoint: "https://someapp.gadget.app/api/graphql",
        authenticationMode: { browserSession: { storageType: BrowserSessionStorageType.Temporary } },
      });

      nock("https://someapp.gadget.app")
        .post("/api/graphql", { query: "{\n  meta {\n    appName\n  }\n}\n", variables: {} })
        .reply(
          200,
          {
            data: {
              meta: {
                appName: "some app",
              },
            },
          },
          {
            "x-set-authorization": "Session token-123",
          }
        );

      const result = await connection.currentClient
        .query(
          gql`
            {
              meta {
                appName
              }
            }
          `
        )
        .toPromise();

      expect(result.data).toEqual({ meta: { appName: "some app" } });

      connection.setAuthenticationMode({
        custom: {
          processFetch: async (_input, init) => {
            init.headers ??= {};
            (init.headers as any).authorization = `FancyMode whatever`;
          },
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          processTransactionConnectionParams: async (params) => {},
        },
      });

      nock("https://someapp.gadget.app")
        .post("/api/graphql", { query: "{\n  meta {\n    appName\n  }\n}\n", variables: {} })
        .reply(200, function () {
          expect(this.req.headers["authorization"]).toEqual([`FancyMode whatever`]);

          return {
            data: {
              meta: {
                appName: "some app",
              },
            },
          };
        });

      const customResult = await connection.currentClient
        .query(
          gql`
            {
              meta {
                appName
              }
            }
          `
        )
        .toPromise();

      expect(customResult.data).toEqual({ meta: { appName: "some app" } });
    });
  });
});
