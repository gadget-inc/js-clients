import { jest } from "@jest/globals";
import { Response } from "cross-fetch";
import gqlTag from "gql-tag";
import nock from "nock";
import { AuthenticationMode, BrowserSessionStorageType, GadgetConnection } from "../src/index.js";
import { base64 } from "./helpers.js";

const gql = gqlTag.default as any;
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

  it("should allow connecting to an endpoint with existing query params", async () => {
    nock("https://someapp.gadget.app")
      .post("/api/graphql?foo=bar&operation=meta", { query: `{\n  meta {\n    appName\n${queryExtra}  }\n}`, variables: {} })
      .reply(200, {
        data: {
          meta: {
            appName: "some app",
          },
        },
      });

    const connection = new GadgetConnection({
      endpoint: "https://someapp.gadget.app/api/graphql?foo=bar",
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

  describe("authorization", () => {
    it("should allow connecting with anonymous authentication", async () => {
      nock("https://someapp.gadget.app")
        .post("/api/graphql?operation=meta", { query: `{\n  meta {\n    appName\n${queryExtra}  }\n}`, variables: {} })
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
        .post("/api/graphql?operation=meta", { query: `{\n  meta {\n    appName\n${queryExtra}  }\n}`, variables: {} })
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

    it("should allow connecting with internal authentication when not using actAsSession", async () => {
      nock("https://someapp.gadget.app")
        .post("/api/graphql?operation=meta", { query: `{\n  meta {\n    appName\n${queryExtra}  }\n}`, variables: {} })
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
        authenticationMode: {
          internal: {
            authToken: "opaque-token-thing",
            actAsSession: false,
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

    it("should allow connecting with internal authentication when using actAsSession", async () => {
      nock("https://someapp.gadget.app")
        .post("/api/graphql?operation=meta", { query: `{\n  meta {\n    appName\n${queryExtra}  }\n}`, variables: {} })
        .reply(200, function () {
          expect(this.req.headers["authorization"]).toEqual([`Basic ${base64("gadget-internal:opaque-token-thing")}`]);
          expect(this.req.headers["x-gadget-act-as-internal-session"]).toEqual(["true"]);
          expect(this.req.headers["x-gadget-internal-session-id"]).toEqual(["123"]);

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
          internal: {
            authToken: "opaque-token-thing",
            actAsSession: true,
            getSessionId: () => Promise.resolve("123"),
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

    it("should allow connecting with internal authentication when using actAsSession and there is no session id", async () => {
      nock("https://someapp.gadget.app")
        .post("/api/graphql?operation=meta", { query: `{\n  meta {\n    appName\n${queryExtra}  }\n}`, variables: {} })
        .reply(200, function () {
          expect(this.req.headers["authorization"]).toEqual([`Basic ${base64("gadget-internal:opaque-token-thing")}`]);
          expect(this.req.headers["x-gadget-act-as-internal-session"]).toEqual(["true"]);
          expect(this.req.headers["x-gadget-internal-session-id"]).toBeUndefined();

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
          internal: {
            authToken: "opaque-token-thing",
            actAsSession: true,
            getSessionId: () => Promise.resolve(undefined),
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

    it("should allow connecting with a gadget API Key", async () => {
      nock("https://someapp.gadget.app")
        .post("/api/graphql?operation=meta", { query: `{\n  meta {\n    appName\n${queryExtra}  }\n}`, variables: {} })
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
          .post("/api/graphql?operation=meta", { query: `{\n  meta {\n    appName\n${queryExtra}  }\n}`, variables: {} })
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
          .post("/api/graphql?operation=meta", { query: `{\n  meta {\n    appName\n${queryExtra}  }\n}`, variables: {} })
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
          .post("/api/graphql?operation=meta", { query: `{\n  meta {\n    appName\n${queryExtra}  }\n}`, variables: {} })
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
          .post("/api/graphql?operation=currentSession", { query: `{\n  currentSession {\n    id\n${queryExtra}  }\n}`, variables: {} })
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
        .post("/api/graphql?operation=meta")
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
        .post("/api/graphql?operation=meta")
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
        .post("/api/graphql?operation=meta", { query: `{\n  meta {\n    appName\n${queryExtra}  }\n}`, variables: {} })
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
            processTransactionConnectionParams: async (_params) => {},
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
        .post("/api/graphql?operation=meta", { query: `{\n  meta {\n    appName\n${queryExtra}  }\n}`, variables: {} })
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
        .post("/api/graphql?operation=currentSession", { query: `{\n  currentSession {\n    id\n${queryExtra}  }\n}`, variables: {} })
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
            processTransactionConnectionParams: async (_params) => {},
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
        .post("/api/graphql?operation=meta", { query: `{\n  meta {\n    appName\n${queryExtra}  }\n}`, variables: {} })
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
          processTransactionConnectionParams: async (_params) => {},
        },
      });

      nock("https://someapp.gadget.app")
        .post("/api/graphql?operation=meta", { query: `{\n  meta {\n    appName\n${queryExtra}  }\n}`, variables: {} })
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

    it("should support browser session with shop tenant", async () => {
      nock("https://someapp.gadget.app")
        .post("/api/graphql?operation=meta", { query: `{\n  meta {\n    appName\n${queryExtra}  }\n}`, variables: {} })
        .reply(200, function () {
          expect(this.req.headers["x-gadget-for-shop-id"]).toEqual(["1234"]);

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
          browserSession: {
            shopId: "1234",
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

    test("fetch can pass relative string paths", async () => {
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

      const result = await connection.fetch("/foo/bar");
      expect(result.status).toEqual(200);
      expect(await result.text()).toEqual("hello");
    });

    test("fetch can pass relative string paths when used with a relative base endpoint", async () => {
      const fetch = jest.fn<typeof globalThis.fetch>().mockResolvedValue(new Response("hello"));
      const connection = new GadgetConnection({
        endpoint: "/api/graphql?operation=meta",
        authenticationMode: { apiKey: "gsk-abcde" },
        fetchImplementation: fetch,
      });

      const result = await connection.fetch("/foo/bar");
      expect(result.status).toEqual(200);
      expect(await result.text()).toEqual("hello");
      expect(fetch).toHaveBeenCalledWith("/foo/bar", expect.anything());
    });

    test("fetch can pass protocol-less string urls", async () => {
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

      const result = await connection.fetch("//someapp.gadget.app/foo/bar");
      expect(result.status).toEqual(200);
      expect(await result.text()).toEqual("hello");
    });

    test("fetch can accept URL objects", async () => {
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

      const result = await connection.fetch(new URL("https://someapp.gadget.app/foo/bar"));
      expect(result.status).toEqual(200);
      expect(await result.text()).toEqual("hello");
    });

    test("fetch can pass relative string paths with query params", async () => {
      const connection = new GadgetConnection({
        endpoint: "https://someapp.gadget.app/api/graphql",
        authenticationMode: { apiKey: "gsk-abcde" },
      });

      nock("https://someapp.gadget.app")
        .get("/foo/bar")
        .query({
          query: "baz",
        })
        .reply(200, function () {
          expect(this.req.headers["authorization"]).toEqual([`Bearer gsk-abcde`]);
          return "hello";
        });

      const result = await connection.fetch("/foo/bar?query=baz");
      expect(result.status).toEqual(200);
      expect(await result.text()).toEqual("hello");
    });

    test("fetch can pass relative string paths when used with a baseRouteURL", async () => {
      const fetch = jest.fn<typeof globalThis.fetch>().mockResolvedValue(new Response("hello"));
      const connection = new GadgetConnection({
        endpoint: "https://api.internal.net/api/graphql?operation=meta",
        authenticationMode: { apiKey: "gsk-abcde" },
        fetchImplementation: fetch,
        baseRouteURL: "https://example.gadget.app",
      });

      const result = await connection.fetch("/foo/bar");
      expect(result.status).toEqual(200);
      expect(await result.text()).toEqual("hello");
      expect(fetch).toHaveBeenCalledWith("https://example.gadget.app/foo/bar", expect.anything());
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

    test("fetch can fetch URLs other than the configured endpoint, and doesn't send authentication headers there", async () => {
      const connection = new GadgetConnection({
        endpoint: "https://someapp.gadget.app/api/graphql",
        authenticationMode: { apiKey: "gsk-abcde" },
      });

      nock("https://third-party.com")
        .post("/foo/bar")
        .reply(200, function () {
          expect(this.req.headers["authorization"]).toBeUndefined();
          return { response: true };
        });

      const result = await connection.fetch("https://third-party.com/foo/bar", {
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

    test("fetch can fetch from other gadget apps, and doesn't send authentication headers there", async () => {
      const connection = new GadgetConnection({
        endpoint: "https://someapp.gadget.app/api/graphql",
        authenticationMode: { apiKey: "gsk-abcde" },
      });

      nock("https://different-app.gadget.app")
        .post("/foo/bar")
        .reply(200, function () {
          expect(this.req.headers["authorization"]).toBeUndefined();
          return { response: true };
        });

      const result = await connection.fetch("https://different-app.gadget.app/foo/bar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ foo: "bar" }),
      });
      expect(result.status).toEqual(200);
      expect(await result.json()).toEqual({ response: true });
    });

    test("fetch can fetch from other environments for the same app, and doesn't send authentication headers there", async () => {
      const connection = new GadgetConnection({
        endpoint: "https://someapp.gadget.app/api/graphql",
        authenticationMode: { apiKey: "gsk-abcde" },
      });

      nock("https://someapp--development.gadget.app")
        .post("/foo/bar")
        .reply(200, function () {
          expect(this.req.headers["authorization"]).toBeUndefined();
          return { response: true };
        });

      const result = await connection.fetch("https://someapp--development.gadget.app/foo/bar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ foo: "bar" }),
      });
      expect(result.status).toEqual(200);
      expect(await result.json()).toEqual({ response: true });
    });

    test("fetch can fetch URLs other than the configured endpoint when the configured endpoint is relative", async () => {
      const connection = new GadgetConnection({
        endpoint: "/api/graphql?operation=meta",
        authenticationMode: { apiKey: "gsk-abcde" },
      });

      nock("https://third-party.com")
        .post("/foo/bar")
        .reply(200, function () {
          expect(this.req.headers["authorization"]).toBeUndefined();
          return { response: true };
        });

      const result = await connection.fetch("https://third-party.com/foo/bar", {
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

    if (globalThis.WebSocket) {
      test("subscription clients should correctly append url params overrides", () => {
        const createSubscriptionClient = jest.fn() as any;

        const connection = new GadgetConnection({
          endpoint: "/api/graphql",
          authenticationMode: { apiKey: "gsk-abcde" },
          createSubscriptionClient,
        });

        connection.newSubscriptionClient({
          urlParams: {
            foo: "bar",
          },
        });

        expect(createSubscriptionClient.mock.calls[0][0].url).toEqual("/api/graphql/batch?foo=bar");
      });

      test("subscription clients should correctly append url params to base endpoints that already have them", () => {
        const createSubscriptionClient = jest.fn() as any;
        const connection = new GadgetConnection({
          endpoint: "/api/graphql?base=whatever",
          websocketsEndpoint: "/api/graphql/batch?base=whatever",
          authenticationMode: { apiKey: "gsk-abcde" },
          createSubscriptionClient,
        });

        connection.newSubscriptionClient({
          urlParams: {
            foo: "bar",
          },
        });

        expect(createSubscriptionClient.mock.calls[0][0].url).toEqual("/api/graphql/batch?base=whatever&foo=bar");
      });

      describe("subscription client auth via connectionParams", () => {
        test("should pass API key credentials in connectionParams", async () => {
          const createSubscriptionClient = jest.fn() as any;
          const connection = new GadgetConnection({
            endpoint: "https://someapp.gadget.app/api/graphql",
            authenticationMode: { apiKey: "gsk-abcde" },
            createSubscriptionClient,
          });

          connection.newSubscriptionClient();

          const connectionParams = createSubscriptionClient.mock.calls[0][0].connectionParams;
          expect(connectionParams).toBeDefined();
          const params = await connectionParams();
          expect(params.auth.type).toEqual(AuthenticationMode.APIKey);
          expect(params.auth.key).toEqual("gsk-abcde");
          expect(params.environment).toEqual("Development");
        });

        test("should pass browser session token in connectionParams", async () => {
          const createSubscriptionClient = jest.fn() as any;
          const connection = new GadgetConnection({
            endpoint: "https://someapp.gadget.app/api/graphql",
            authenticationMode: { browserSession: { initialToken: "session-token-123" } },
            createSubscriptionClient,
          });

          connection.newSubscriptionClient();

          const connectionParams = createSubscriptionClient.mock.calls[0][0].connectionParams;
          const params = await connectionParams();
          expect(params.auth.type).toEqual(AuthenticationMode.BrowserSession);
          expect(params.auth.sessionToken).toEqual("session-token-123");
        });

        test("should pass internal auth token in connectionParams", async () => {
          const createSubscriptionClient = jest.fn() as any;
          const connection = new GadgetConnection({
            endpoint: "https://someapp.gadget.app/api/graphql",
            authenticationMode: { internal: { authToken: "internal-secret" } },
            createSubscriptionClient,
          });

          connection.newSubscriptionClient();

          const connectionParams = createSubscriptionClient.mock.calls[0][0].connectionParams;
          const params = await connectionParams();
          expect(params.auth.type).toEqual(AuthenticationMode.Internal);
          expect(params.auth.token).toEqual("internal-secret");
        });

        test("should call custom processTransactionConnectionParams in connectionParams", async () => {
          const createSubscriptionClient = jest.fn() as any;
          const connection = new GadgetConnection({
            endpoint: "https://someapp.gadget.app/api/graphql",
            authenticationMode: {
              custom: {
                processFetch: async () => {},
                processTransactionConnectionParams: async (params) => {
                  params.auth.shopifySessionToken = "shopify-token-xyz";
                },
              },
            },
            createSubscriptionClient,
          });

          connection.newSubscriptionClient();

          const connectionParams = createSubscriptionClient.mock.calls[0][0].connectionParams;
          const params = await connectionParams();
          expect(params.auth.type).toEqual(AuthenticationMode.Custom);
          expect(params.auth.shopifySessionToken).toEqual("shopify-token-xyz");
        });

        test("should send anonymous auth type when no authentication is configured", async () => {
          const createSubscriptionClient = jest.fn() as any;
          const connection = new GadgetConnection({
            endpoint: "https://someapp.gadget.app/api/graphql",
            createSubscriptionClient,
          });

          connection.newSubscriptionClient();

          const connectionParams = createSubscriptionClient.mock.calls[0][0].connectionParams;
          const params = await connectionParams();
          expect(params.auth.type).toEqual(AuthenticationMode.Anonymous);
          expect(params.auth.key).toBeUndefined();
          expect(params.auth.sessionToken).toBeUndefined();
          expect(params.auth.token).toBeUndefined();
        });
      });

      describe("resetClients subscription client lifecycle", () => {
        test("should create a fresh subscription client after enableSessionMode is called", () => {
          const createSubscriptionClient = jest.fn().mockReturnValue({
            dispose: jest.fn(),
            subscribe: jest.fn(),
          }) as any;

          const connection = new GadgetConnection({
            endpoint: "https://someapp.gadget.app/api/graphql",
            authenticationMode: { apiKey: "gsk-abcde" },
            createSubscriptionClient,
          });

          // Trigger lazy creation of the subscription client
          // Access via the public baseSubscriptionClient property (used for testing)
          const firstClient = connection.newSubscriptionClient({ lazy: true });
          (connection as any).baseSubscriptionClient = firstClient;

          // Switch to browser session mode, which calls resetClients()
          connection.enableSessionMode({ initialToken: "new-token" });

          // baseSubscriptionClient should be cleared
          expect(connection.baseSubscriptionClient).toBeUndefined();
        });

        test("should create a new subscription client on next getBaseSubscriptionClient after reset", async () => {
          let callCount = 0;
          const createSubscriptionClient = jest.fn().mockImplementation(() => {
            callCount++;
            return {
              dispose: jest.fn(),
              subscribe: jest.fn(),
            };
          }) as any;

          const connection = new GadgetConnection({
            endpoint: "https://someapp.gadget.app/api/graphql",
            authenticationMode: { apiKey: "gsk-abcde" },
            createSubscriptionClient,
          });

          // Simulate lazy creation by setting baseSubscriptionClient
          (connection as any).baseSubscriptionClient = connection.newSubscriptionClient({ lazy: true });
          const initialCallCount = callCount;

          // Switch auth mode, triggering resetClients
          connection.enableSessionMode({ initialToken: "tok-123" });

          // baseSubscriptionClient should be cleared so the next call creates a new one
          expect(connection.baseSubscriptionClient).toBeUndefined();

          // Now calling getBaseSubscriptionClient (via newSubscriptionClient as a proxy) should create a new client
          // Access the private method indirectly by reading the property after it would be lazily set
          (connection as any).getBaseSubscriptionClient();
          expect(callCount).toBeGreaterThan(initialCallCount);

          // Verify the new subscription client gets the updated auth
          const latestCall = createSubscriptionClient.mock.calls[createSubscriptionClient.mock.calls.length - 1];
          const params = await latestCall[0].connectionParams();
          expect(params.auth.type).toEqual(AuthenticationMode.BrowserSession);
          expect(params.auth.sessionToken).toEqual("tok-123");
        });

        test("close() should clear the subscription client reference", () => {
          const createSubscriptionClient = jest.fn().mockReturnValue({
            dispose: jest.fn(),
            subscribe: jest.fn(),
          }) as any;

          const connection = new GadgetConnection({
            endpoint: "https://someapp.gadget.app/api/graphql",
            authenticationMode: { apiKey: "gsk-abcde" },
            createSubscriptionClient,
          });

          (connection as any).baseSubscriptionClient = connection.newSubscriptionClient({ lazy: true });
          expect(connection.baseSubscriptionClient).toBeDefined();

          connection.close();

          expect(connection.baseSubscriptionClient).toBeUndefined();
        });
      });
    }
  });
};
