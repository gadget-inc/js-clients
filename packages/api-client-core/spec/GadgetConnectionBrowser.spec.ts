/**
 * @jest-environment jsdom
 */

import gql from "gql-tag";
import nock from "nock";
import { BrowserSessionStorageType } from "../src";
import { GadgetConnection } from "../src/GadgetConnection";

nock.disableNetConnect();

describe("GadgetConnection in browser", () => {
  // this object is integration tested within Gadget itself also
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
