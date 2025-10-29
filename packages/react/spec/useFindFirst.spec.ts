import { diff } from "@n1ru4l/json-patch-plus";
import { act, renderHook, waitFor } from "@testing-library/react";
import { useFindFirst } from "../src/index.js";
import { kitchenSinkApi, relatedProductsApi } from "./apis.js";
import {
  MockClientWrapper,
  MockGraphQLWSClientWrapper,
  createMockUrqlClient,
  mockGraphQLWSClient,
  mockUrqlClient,
} from "./testWrappers.js";

describe("useFindFirst", () => {
  test("it can find the first record", async () => {
    let query: string | undefined;
    const client = createMockUrqlClient({
      queryAssertions: (request) => {
        query = "kind" in request.query ? request.query.loc?.source.body : "";
      },
    });

    const { result } = renderHook(() => useFindFirst(relatedProductsApi.user), {
      wrapper: MockClientWrapper(relatedProductsApi, client),
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(client.executeQuery).toBeCalledTimes(1);

    expect(query).toMatchInlineSnapshot(`
      "query users($after: String, $first: Int, $before: String, $last: Int) {
        users(after: $after, first: $first, before: $before, last: $last) {
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
          edges {
            cursor
            node {
              __typename
              id
              state
              createdAt
              email
              roles {
                key
                name
              }
              updatedAt
            }
          }
        }
        gadgetMeta {
          hydrations(modelName: 
      "user")
        }
      }"
    `);

    await client.executeQuery.pushResponse("users", {
      data: {
        users: {
          edges: [{ cursor: "123", node: { id: "123", email: "test@test.com" } }],
          pageInfo: {
            startCursor: "123",
            endCursor: "123",
            hasNextPage: false,
            hasPreviousPage: false,
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    expect(result.current[0].data?.id).toEqual("123");
    expect(result.current[0].data?.email).toEqual("test@test.com");
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });

  test("it can find the first record of a namespaced model", async () => {
    let query: string | undefined;
    const client = createMockUrqlClient({
      queryAssertions: (request) => {
        query = "kind" in request.query ? request.query.loc?.source.body : "";
      },
    });

    const { result } = renderHook(() => useFindFirst(kitchenSinkApi.game.player), {
      wrapper: MockClientWrapper(kitchenSinkApi, client),
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(client.executeQuery).toBeCalledTimes(1);

    // the "players" should be under the "game" namespace
    expect(query).toMatchInlineSnapshot(`
      "query players($after: String, $first: Int, $before: String, $last: Int) {
        game {
          players(after: $after, first: $first, before: $before, last: $last) {
            pageInfo {
              hasNextPage
              hasPreviousPage
              startCursor
              endCursor
            }
            edges {
              cursor
              node {
                __typename
                id
                createdAt
                name
                number
                updatedAt
              }
            }
          }
        }
        gadgetMeta {
          hydrations(modelName: 
      "game.player")
        }
      }"
    `);

    await client.executeQuery.pushResponse("players", {
      data: {
        game: {
          players: {
            edges: [{ cursor: "123", node: { id: "123", name: "Caitlin Clark" } }],
            pageInfo: {
              startCursor: "123",
              endCursor: "123",
              hasNextPage: false,
              hasPreviousPage: false,
            },
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    expect(result.current[0].data?.id).toEqual("123");
    expect(result.current[0].data?.name).toEqual("Caitlin Clark");
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });

  test("it return null if the record with the given field value can't be found", async () => {
    const { result } = renderHook(() => useFindFirst(relatedProductsApi.user), {
      wrapper: MockClientWrapper(relatedProductsApi),
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

    await mockUrqlClient.executeQuery.pushResponse("users", {
      data: {
        users: {
          edges: [],
          pageInfo: {
            startCursor: null,
            endCursor: null,
            hasNextPage: false,
            hasPreviousPage: false,
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeUndefined();
  });

  test("returns the same data object on rerender", async () => {
    const { result, rerender } = renderHook(() => useFindFirst(relatedProductsApi.user), {
      wrapper: MockClientWrapper(relatedProductsApi),
    });

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

    await mockUrqlClient.executeQuery.pushResponse("users", {
      data: {
        users: {
          edges: [{ cursor: "123", node: { id: "123", email: "test@test.com" } }],
          pageInfo: {
            startCursor: "123",
            endCursor: "123",
            hasNextPage: false,
            hasPreviousPage: false,
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    const data = result.current[0].data;
    expect(data).toBeTruthy();

    rerender();

    expect(result.current[0].data).toBe(data);
  });

  test("it can suspend when finding data", async () => {
    const { result, rerender } = renderHook(() => useFindFirst(relatedProductsApi.user, { suspense: true }), {
      wrapper: MockClientWrapper(relatedProductsApi),
    });

    // first render never completes as the component suspends
    expect(result.current).toBeFalsy();

    await act(async () => {
      await mockUrqlClient.executeQuery.waitForSubject("users");

      await mockUrqlClient.executeQuery.pushResponse("users", {
        data: {
          users: {
            edges: [{ cursor: "123", node: { id: "123", email: "test@test.com" } }],
            pageInfo: {
              startCursor: "123",
              endCursor: "123",
              hasNextPage: false,
              hasPreviousPage: false,
            },
          },
        },
        stale: false,
        hasNext: false,
      });
    });

    // rerender as react would do when the suspense promise resolves
    rerender();
    expect(result.current).toBeTruthy();
    expect(result.current[0].data?.id).toEqual("123");
    expect(result.current[0].data?.email).toEqual("test@test.com");
    expect(result.current[0].error).toBeFalsy();

    const beforeObject = result.current[0];
    rerender();
    expect(result.current[0]).toBe(beforeObject);
  });

  test("doesn't issue a request if paused", async () => {
    const { result } = renderHook(() => useFindFirst(relatedProductsApi.user, { pause: true }), {
      wrapper: MockClientWrapper(relatedProductsApi),
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(0);
  });

  test("issues a request once unpaused", async () => {
    let paused = true;
    const { result, rerender } = renderHook(() => useFindFirst(relatedProductsApi.user, { pause: paused }), {
      wrapper: MockClientWrapper(relatedProductsApi),
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(0);

    paused = false;
    rerender();
    expect(result.current[0].fetching).toBe(true);

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

    await mockUrqlClient.executeQuery.pushResponse("users", {
      data: {
        users: {
          edges: [{ cursor: "123", node: { id: "123", email: "test@test.com" } }],
          pageInfo: {
            startCursor: "123",
            endCursor: "123",
            hasNextPage: false,
            hasPreviousPage: false,
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    expect(result.current[0].data?.id).toEqual("123");
    expect(result.current[0].data?.email).toEqual("test@test.com");
    expect(result.current[0].fetching).toBe(false);
  });

  test("can query for live data", async () => {
    const { result } = renderHook(() => useFindFirst(relatedProductsApi.user, { live: true }), {
      wrapper: MockGraphQLWSClientWrapper(relatedProductsApi),
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    await waitFor(() => expect(mockGraphQLWSClient.subscribe.subscriptions).toHaveLength(1));

    const subscription = mockGraphQLWSClient.subscribe.subscriptions[0];
    expect(subscription.payload.query).toContain("@live");

    const initial = {
      users: {
        edges: [{ cursor: "123", node: { id: "123", email: "test@test.com" } }],
        pageInfo: {
          startCursor: "123",
          endCursor: "123",
          hasNextPage: false,
          hasPreviousPage: false,
        },
      },
    };

    subscription.push({
      data: initial,
      revision: 1,
    } as any);

    await waitFor(() => expect(result.current[0].fetching).toBe(false));

    expect(result.current[0].data?.id).toEqual("123");
    expect(result.current[0].data?.email).toEqual("test@test.com");
    expect(result.current[0].error).toBeFalsy();

    const next = {
      users: {
        edges: [{ cursor: "123", node: { id: "123", email: "a-new-email@test.com" } }],
        pageInfo: {
          startCursor: "123",
          endCursor: "123",
          hasNextPage: false,
          hasPreviousPage: false,
        },
      },
    };

    subscription.push({
      patch: diff({ left: initial, right: next }),
      revision: 2,
    } as any);

    await waitFor(() => expect(result.current[0].data?.email).toEqual("a-new-email@test.com"));

    expect(result.current[0].data?.id).toEqual("123");
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });
});
