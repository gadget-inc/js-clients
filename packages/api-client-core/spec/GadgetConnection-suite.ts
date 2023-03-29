import gql from "gql-tag";
import nock from "nock";
import { AuthenticationMode, BrowserSessionStorageType, GadgetConnection } from "../src";
import { base64 } from "./helpers";

nock.disableNetConnect();

// eslint-disable-next-line jest/no-export
export const GadgetConnectionSharedSuite = (queryExtra = "") => {
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

  it("should default to the cache-and-network request policy for urql clients", () => {
    let connection = new GadgetConnection({ endpoint: "https://someapp.gadget.app" });
    expect((connection as any).requestPolicy).toEqual("cache-and-network");

    connection = new GadgetConnection({ endpoint: "https://someapp.gadget.app", requestPolicy: "network-only" });
    expect((connection as any).requestPolicy).toEqual("network-only");
  });

  describe("authorization", () => {
    it("should allow connecting with anonymous authentication", async () => {
      nock("https://someapp.gadget.app")
        .post("/api/graphql", { query: `{\n  meta {\n    appName\n${queryExtra}  }\n}`, variables: {} })
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
          `,
          {}
        )
        .toPromise();

      expect(result.error).toBeUndefined();
      expect(result.data).toEqual({ meta: { appName: "some app" } });
    });

    it("should allow connecting with internal auth token authentication", async () => {
      nock("https://someapp.gadget.app")
        .post("/api/graphql", { query: `{\n  meta {\n    appName\n${queryExtra}  }\n}`, variables: {} })
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
          `,
          {}
        )
        .toPromise();

      expect(result.error).toBeUndefined();
      expect(result.data).toEqual({ meta: { appName: "some app" } });
    });

    it("should allow connecting with a gadget API Key", async () => {
      nock("https://someapp.gadget.app")
        .post("/api/graphql", { query: `{\n  meta {\n    appName\n${queryExtra}  }\n}`, variables: {} })
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
          `,
          {}
        )
        .toPromise();

      expect(result.error).toBeUndefined();
      expect(result.data).toEqual({ meta: { appName: "some app" } });
    });

    describe("session token storage", () => {
      it("should allow connecting with no session in a session storage mode", async () => {
        nock("https://someapp.gadget.app")
          .post("/api/graphql", { query: `{\n  meta {\n    appName\n${queryExtra}  }\n}`, variables: {} })
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
            `,
            {}
          )
          .toPromise();

        expect(result.error).toBeUndefined();
        expect(result.data).toEqual({ meta: { appName: "some app" } });
      });

      it("should allow connecting with an initial session token in session storage mode", async () => {
        nock("https://someapp.gadget.app")
          .post("/api/graphql", { query: `{\n  meta {\n    appName\n${queryExtra}  }\n}`, variables: {} })
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
            `,
            {}
          )
          .toPromise();

        expect(result.error).toBeUndefined();
        expect(result.data).toEqual({ meta: { appName: "some app" } });
      });

      it("should store a x-set-authorization header and reuse it for subsequent requests", async () => {
        nock("https://someapp.gadget.app")
          .post("/api/graphql", { query: `{\n  meta {\n    appName\n${queryExtra}  }\n}`, variables: {} })
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
          .post("/api/graphql", { query: `{\n  currentSession {\n    id\n${queryExtra}  }\n}`, variables: {} })
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
            `,
            {}
          )
          .toPromise();

        expect(firstResult.error).toBeUndefined();
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

        expect(secondResult.error).toBeUndefined();
        expect(secondResult.data).toEqual({ currentSession: { id: 1 } });
      });
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

    it("should support a custom auth mode that can set arbitrary fetch headers", async () => {
      nock("https://someapp.gadget.app")
        .post("/api/graphql", { query: `{\n  meta {\n    appName\n${queryExtra}  }\n}`, variables: {} })
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
          `,
          {}
        )
        .toPromise();

      expect(result.error).toBeUndefined();
      expect(result.data).toEqual({ meta: { appName: "some app" } });
    });

    it("custom auth mode requests shouldn't send back x-set-authorization headers on subsequent requests", async () => {
      nock("https://someapp.gadget.app")
        .post("/api/graphql", { query: `{\n  meta {\n    appName\n${queryExtra}  }\n}`, variables: {} })
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
        .post("/api/graphql", { query: `{\n  currentSession {\n    id\n${queryExtra}  }\n}`, variables: {} })
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

    it("custom auth modes can be activated after client construction with .setAuthentication mode", async () => {
      const connection = new GadgetConnection({
        endpoint: "https://someapp.gadget.app/api/graphql",
        authenticationMode: { browserSession: { storageType: BrowserSessionStorageType.Temporary } },
      });

      nock("https://someapp.gadget.app")
        .post("/api/graphql", { query: `{\n  meta {\n    appName\n${queryExtra}  }\n}`, variables: {} })
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
          `,
          {}
        )
        .toPromise();

      expect(result.error).toBeUndefined();
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
        .post("/api/graphql", { query: `{\n  meta {\n    appName\n${queryExtra}  }\n}`, variables: {} })
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
          `,
          {}
        )
        .toPromise();

      expect(customResult.error).toBeUndefined();
      expect(customResult.data).toEqual({ meta: { appName: "some app" } });
    });
  });

  describe("raw fetching", () => {
    test("developers can use the built in fetch function to make requests to gadget", async () => {
      const connection = new GadgetConnection({
        endpoint: "https://someapp.gadget.app/api/graphql",
        authenticationMode: { apiKey: "gsk-abcde" },
      });

      nock("https://someapp.gadget.app")
        .get("/foo/bar")
        .reply(200, function () {
          expect(this.req.headers["authorization"]).toEqual([`Bearer gsk-abcde`]);
          return "hello";
        });

      const result = await connection.fetch("https://someapp.gadget.app/foo/bar");
      expect(result.status).toEqual(200);
      expect(await result.text()).toEqual("hello");
    });

    test("fetches can specify a desired content type", async () => {
      const connection = new GadgetConnection({
        endpoint: "https://someapp.gadget.app/api/graphql",
        authenticationMode: { apiKey: "gsk-abcde" },
      });

      nock("https://someapp.gadget.app")
        .post("/foo/bar")
        .reply(200, function () {
          expect(this.req.headers["content-type"]).toEqual([`application/json`]);
          expect(this.req.headers["authorization"]).toEqual([`Bearer gsk-abcde`]);
          return { response: true };
        });

      const result = await connection.fetch("https://someapp.gadget.app/foo/bar", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({ foo: "bar" }),
      });
      expect(result.status).toEqual(200);
      expect(await result.json()).toEqual({ response: true });
    });

    test("fetch can use uppercased header names", async () => {
      const connection = new GadgetConnection({
        endpoint: "https://someapp.gadget.app/api/graphql",
        authenticationMode: { apiKey: "gsk-abcde" },
      });

      nock("https://someapp.gadget.app")
        .post("/foo/bar")
        .reply(200, function () {
          expect(this.req.headers["content-type"]).toEqual([`application/json`]);
          expect(this.req.headers["authorization"]).toEqual([`Bearer gsk-abcde`]);
          return { response: true };
        });

      const result = await connection.fetch("https://someapp.gadget.app/foo/bar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ foo: "bar" }),
      });
      expect(result.status).toEqual(200);
      expect(await result.json()).toEqual({ response: true });
    });
  });
};
