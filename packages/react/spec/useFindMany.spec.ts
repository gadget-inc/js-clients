import { GraphQLError } from "@0no-co/graphql.web";
import { Client } from "@gadget-client/related-products-example";
import type { GadgetRecordList } from "@gadgetinc/api-client-core";
import { diff } from "@n1ru4l/json-patch-plus";
import { renderHook, waitFor } from "@testing-library/react";
import type { IsExact } from "conditional-type-checks";
import { assert } from "conditional-type-checks";
import { useFindMany } from "../src/useFindMany.js";
import type { ErrorWrapper } from "../src/utils.js";
import { kitchenSinkApi, relatedProductsApi } from "./apis.js";
import {
  MockClientWrapper,
  MockGraphQLWSClientWrapper,
  createMockUrqlClient,
  mockGraphQLWSClient,
  mockUrqlClient,
} from "./testWrappers.js";

describe("useFindMany", () => {
  // all these functions are typechecked but never run to avoid actually making API calls
  const _TestFindManyReturnsTypedDataWithExplicitSelection = () => {
    const [{ data, fetching, error }, refresh] = useFindMany(relatedProductsApi.user, { select: { id: true, email: true } });

    assert<IsExact<typeof fetching, boolean>>(true);
    assert<IsExact<typeof data, undefined | GadgetRecordList<{ id: string; email: string | null }>>>(true);
    assert<IsExact<typeof error, ErrorWrapper | undefined>>(true);

    if (data) {
      data[0].id;
      data[0].email;
    }

    refresh();
  };

  const _TestFindManyReturnsTypedDataWithNoSelection = () => {
    const [{ data }] = useFindMany(relatedProductsApi.user);

    if (data) {
      data[0].id;
      data[0].email;
    }
  };

  const _TestFindManyNamespacedModel = () => {
    const [{ data }] = useFindMany(kitchenSinkApi.game.player);

    if (data) {
      data[0].id;
      data[0].name;
    }
  };

  test("can find a list of records", async () => {
    let query: string | undefined;
    const client = createMockUrqlClient({
      queryAssertions: (request) => {
        query = request.query.loc?.source.body;
      },
    });

    const { result } = renderHook(() => useFindMany(relatedProductsApi.user), { wrapper: MockClientWrapper(relatedProductsApi, client) });

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

    client.executeQuery.pushResponse("users", {
      data: {
        users: {
          edges: [
            { cursor: "123", node: { id: "123", email: "test@test.com" } },
            { cursor: "abc", node: { id: "124", email: "test@test.com" } },
          ],
          pageInfo: {
            startCursor: "123",
            endCursor: "abc",
            hasNextPage: false,
            hasPreviousPage: false,
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    expect(result.current[0].data![0].id).toEqual("123");
    expect(result.current[0].data![1].id).toEqual("124");
    expect(result.current[0].data!.length).toEqual(2);
    expect(result.current[0].data!.hasNextPage).toEqual(false);
    expect(result.current[0].data!.hasPreviousPage).toEqual(false);
    expect(result.current[0].data!.startCursor).toEqual("123");
    expect(result.current[0].data!.endCursor).toEqual("abc");
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });

  test("can find a list of records and query for the next page", async () => {
    const { result, rerender } = renderHook((after?: string) => useFindMany(relatedProductsApi.user, { first: 2, after }), {
      wrapper: MockClientWrapper(relatedProductsApi),
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

    mockUrqlClient.executeQuery.pushResponse("users", {
      data: {
        users: {
          edges: [
            { cursor: "123", node: { id: "123", email: "test@test.com" } },
            { cursor: "abc", node: { id: "124", email: "test@test.com" } },
          ],
          pageInfo: {
            startCursor: "123",
            endCursor: "abc",
            hasNextPage: true,
            hasPreviousPage: false,
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    expect(result.current[0].data![0].id).toEqual("123");
    expect(result.current[0].data![1].id).toEqual("124");
    expect(result.current[0].data!.length).toEqual(2);
    expect(result.current[0].data!.endCursor).toEqual("abc");
    expect(result.current[0].data!.hasNextPage).toEqual(true);
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();

    // rerun the hook with the after cursor to simulate being called
    rerender(result.current[0].data!.endCursor);

    await Promise.resolve();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(2);

    mockUrqlClient.executeQuery.pushResponse("users", {
      data: {
        users: {
          edges: [
            { cursor: "def", node: { id: "def", email: "test@test.com" } },
            { cursor: "hij", node: { id: "hij", email: "test@test.com" } },
          ],
          pageInfo: {
            startCursor: "def",
            endCursor: "hij",
            hasNextPage: false,
            hasPreviousPage: true,
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    expect(result.current[0].data![0].id).toEqual("def");
    expect(result.current[0].data![1].id).toEqual("hij");
    expect(result.current[0].data!.hasNextPage).toEqual(false);
    expect(result.current[0].data!.hasPreviousPage).toEqual(true);
    expect(result.current[0].data!.startCursor).toEqual("def");
    expect(result.current[0].data!.endCursor).toEqual("hij");
  });

  test("can find an empty list of records", async () => {
    const { result } = renderHook(() => useFindMany(relatedProductsApi.user), { wrapper: MockClientWrapper(relatedProductsApi) });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

    mockUrqlClient.executeQuery.pushResponse("users", {
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

    expect(result.current[0].data!.length).toEqual(0);
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });

  test("can find a list of records for a namespaced model", async () => {
    let query: string | undefined;
    const client = createMockUrqlClient({
      queryAssertions: (request) => {
        query = request.query.loc?.source.body;
      },
    });

    const { result } = renderHook(() => useFindMany(kitchenSinkApi.game.player), { wrapper: MockClientWrapper(kitchenSinkApi, client) });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(client.executeQuery).toBeCalledTimes(1);

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

    client.executeQuery.pushResponse("players", {
      data: {
        game: {
          players: {
            edges: [
              { cursor: "123", node: { id: "123", name: "Caitlin Clark" } },
              { cursor: "abc", node: { id: "124", email: "Paige Buckets" } },
            ],
            pageInfo: {
              startCursor: "123",
              endCursor: "abc",
              hasNextPage: false,
              hasPreviousPage: false,
            },
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    expect(result.current[0].data![0].id).toEqual("123");
    expect(result.current[0].data![1].id).toEqual("124");
    expect(result.current[0].data!.length).toEqual(2);
    expect(result.current[0].data!.hasNextPage).toEqual(false);
    expect(result.current[0].data!.hasPreviousPage).toEqual(false);
    expect(result.current[0].data!.startCursor).toEqual("123");
    expect(result.current[0].data!.endCursor).toEqual("abc");
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });

  test("returns the same data object on rerender if nothing changes about the result", async () => {
    const { result, rerender } = renderHook(() => useFindMany(relatedProductsApi.user), { wrapper: MockClientWrapper(relatedProductsApi) });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

    mockUrqlClient.executeQuery.pushResponse("users", {
      data: {
        users: {
          edges: [
            { cursor: "123", node: { id: "123", email: "test@test.com" } },
            { cursor: "abc", node: { id: "124", email: "test@test.com" } },
          ],
          pageInfo: {
            startCursor: "123",
            endCursor: "abc",
            hasNextPage: false,
            hasPreviousPage: false,
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    const beforeObject = result.current[0];

    rerender();

    expect(result.current[0]).toBe(beforeObject);
  });

  test("suspends when loading data", async () => {
    const { result, rerender } = renderHook(() => useFindMany(relatedProductsApi.user, { suspense: true }), {
      wrapper: MockClientWrapper(relatedProductsApi),
    });

    // first render never completes as the component suspends
    expect(result.current).toBeFalsy();
    expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

    mockUrqlClient.executeQuery.pushResponse("users", {
      data: {
        users: {
          edges: [
            { cursor: "123", node: { id: "123", email: "test@test.com" } },
            { cursor: "abc", node: { id: "124", email: "test@test.com" } },
          ],
          pageInfo: {
            startCursor: "123",
            endCursor: "abc",
            hasNextPage: false,
            hasPreviousPage: false,
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    // rerender as react would do when the suspense promise resolves
    rerender();
    expect(result.current).toBeTruthy();
    expect(result.current[0].data![0].id).toEqual("123");
    expect(result.current[0].data![1].id).toEqual("124");
    expect(result.current[0].data!.hasNextPage).toEqual(false);
    expect(result.current[0].data!.hasPreviousPage).toEqual(false);
    expect(result.current[0].data!.startCursor).toEqual("123");
    expect(result.current[0].data!.endCursor).toEqual("abc");
    expect(result.current[0].error).toBeFalsy();

    const beforeObject = result.current[0];
    rerender();
    expect(result.current[0]).toBe(beforeObject);
  });

  test("doesn't issue a request if paused", async () => {
    const { result } = renderHook(() => useFindMany(relatedProductsApi.user, { pause: true }), {
      wrapper: MockClientWrapper(relatedProductsApi),
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(0);
  });

  describe("live queries", () => {
    let relatedProductsApi: Client;

    beforeEach(() => {
      relatedProductsApi = new Client({ environment: "Development" });
    });

    test("can query for live data", async () => {
      const { result } = renderHook(() => useFindMany(relatedProductsApi.user, { live: true }), {
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
          edges: [
            {
              node: {
                id: "123",
                email: "test@test.com",
              },
            },
            {
              node: {
                id: "456",
                email: "test@gadget.dev",
              },
            },
          ],
        },
      };

      subscription.push({
        data: initial,
        revision: 1,
      } as any);

      await waitFor(() => expect(result.current[0].fetching).toBe(false));

      expect(result.current[0].data![0].id).toEqual("123");
      expect(result.current[0].data![0].email).toEqual("test@test.com");
      expect(result.current[0].data![1].id).toEqual("456");
      expect(result.current[0].data![1].email).toEqual("test@gadget.dev");
      expect(result.current[0].error).toBeFalsy();

      const next = {
        users: {
          edges: [
            {
              node: {
                id: "123",
                email: "a-new-email@test.com",
              },
            },
            {
              node: {
                id: "456",
                email: "test@gadget.dev",
              },
            },
            {
              node: {
                id: "789",
                email: null,
              },
            },
          ],
        },
      };

      subscription.push({
        patch: diff({ left: initial, right: next }),
        revision: 2,
      } as any);

      await waitFor(() => expect(result.current[0].data![2]).toBeDefined());

      expect(result.current[0].data![0].id).toEqual("123");
      expect(result.current[0].data![0].email).toEqual("a-new-email@test.com");
      expect(result.current[0].data![1].id).toEqual("456");
      expect(result.current[0].data![1].email).toEqual("test@gadget.dev");
      expect(result.current[0].data![2].id).toEqual("789");
      expect(result.current[0].data![2].email).toBe(null);
      expect(result.current[0].fetching).toBe(false);
      expect(result.current[0].error).toBeFalsy();
    });

    test("can query for live data on a namespaced model", async () => {
      const { result } = renderHook(() => useFindMany(kitchenSinkApi.game.player, { live: true }), {
        wrapper: MockGraphQLWSClientWrapper(kitchenSinkApi),
      });

      expect(result.current[0].data).toBeFalsy();
      expect(result.current[0].fetching).toBe(true);
      expect(result.current[0].error).toBeFalsy();

      await waitFor(() => expect(mockGraphQLWSClient.subscribe.subscriptions).toHaveLength(1));

      const subscription = mockGraphQLWSClient.subscribe.subscriptions[0];
      expect(subscription.payload.query).toContain("@live");

      const initial = {
        game: {
          players: {
            edges: [
              {
                node: {
                  id: "123",
                  name: "Caitlin Clark",
                },
              },
              {
                node: {
                  id: "456",
                  name: "Paige Buckets",
                },
              },
            ],
          },
        },
      };

      subscription.push({
        data: initial,
        revision: 1,
      } as any);

      await waitFor(() => expect(result.current[0].fetching).toBe(false));

      expect(result.current[0].data![0].id).toEqual("123");
      expect(result.current[0].data![0].name).toEqual("Caitlin Clark");
      expect(result.current[0].data![1].id).toEqual("456");
      expect(result.current[0].data![1].name).toEqual("Paige Buckets");
      expect(result.current[0].error).toBeFalsy();

      const next = {
        game: {
          players: {
            edges: [
              {
                node: {
                  id: "123",
                  name: "Caitlin 'Goat' Clark",
                },
              },
              {
                node: {
                  id: "456",
                  name: "Paige Buckets",
                },
              },
              {
                node: {
                  id: "789",
                  name: null,
                },
              },
            ],
          },
        },
      };

      subscription.push({
        patch: diff({ left: initial, right: next }),
        revision: 2,
      } as any);

      await waitFor(() => expect(result.current[0].data![2]).toBeDefined());

      expect(result.current[0].data![0].id).toEqual("123");
      expect(result.current[0].data![0].name).toEqual("Caitlin 'Goat' Clark");
      expect(result.current[0].data![1].id).toEqual("456");
      expect(result.current[0].data![1].name).toEqual("Paige Buckets");
      expect(result.current[0].data![2].id).toEqual("789");
      expect(result.current[0].data![2].name).toBe(null);
      expect(result.current[0].fetching).toBe(false);
      expect(result.current[0].error).toBeFalsy();
    });

    test("live queries return server errors", async () => {
      const { result } = renderHook(() => useFindMany(relatedProductsApi.user, { live: true }), {
        wrapper: MockGraphQLWSClientWrapper(relatedProductsApi),
      });

      expect(result.current[0].data).toBeFalsy();
      expect(result.current[0].fetching).toBe(true);
      expect(result.current[0].error).toBeFalsy();

      await waitFor(() => expect(mockGraphQLWSClient.subscribe.subscriptions).toHaveLength(1));

      const subscription = mockGraphQLWSClient.subscribe.subscriptions[0];

      subscription.push({
        data: null,
        errors: [new GraphQLError("backend exploded")],
      });

      await waitFor(() => expect(result.current[0].fetching).toBe(false));

      expect(result.current[0].data).toBeFalsy();
      expect(result.current[0].error!.message).toMatchInlineSnapshot(`"[GraphQL] backend exploded"`);
    });
  });
});
