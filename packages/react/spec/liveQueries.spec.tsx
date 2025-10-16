import { Client } from "@gadget-client/related-products-example";
import { jest } from "@jest/globals";
import { diff } from "@n1ru4l/json-patch-plus";
import { render, renderHook, waitFor } from "@testing-library/react";
import type { Operation, Client as UrqlClient } from "@urql/core";
import { DocumentNode } from "graphql";
import React from "react";
import { pipe, subscribe } from "wonka";
import { useFindMany } from "../src/hooks.js";
import { testApi } from "./apis.js";
import { MockGraphQLWSClientWrapper, mockGraphQLWSClient } from "./testWrappers.js";
import { sleep } from "./utils.js";

describe("live queries", () => {
  let api: Client;
  beforeEach(async () => {
    api = new Client({ environment: "Development" });
  });

  test("live queries can go from having no data to having some data", async () => {
    const { result } = renderHook(() => useFindMany(api.user, { live: true }), {
      wrapper: MockGraphQLWSClientWrapper(api),
    });

    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();
    expect(result.current[0].data).toBeFalsy();

    await waitFor(() => expect(mockGraphQLWSClient.subscribe.subscriptions).toHaveLength(1));

    const subscription = mockGraphQLWSClient.subscribe.subscriptions[0];
    expect(subscription.payload.query).toContain("@live");

    const initial = {
      users: {
        edges: [],
      },
    };

    subscription.push({
      data: initial,
      revision: 1,
    } as any);

    await waitFor(() => expect(result.current[0].data!.length).toEqual(0));
    expect(result.current[0].fetching).toBe(false);
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
        ],
      },
    };

    subscription.push({
      patch: diff({ left: initial, right: next }),
      revision: 2,
    } as any);

    await waitFor(() => expect(result.current[0].data![0].email).toEqual("a-new-email@test.com"));

    expect(result.current[0].data![0].id).toEqual("123");
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });

  test("live queries can go from having some data to having no data", async () => {
    const { result } = renderHook(() => useFindMany(api.user, { live: true }), {
      wrapper: MockGraphQLWSClientWrapper(api),
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
              email: "a-new-email@test.com",
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

    expect(result.current[0].data!.length).toEqual(1);
    expect(result.current[0].error).toBeFalsy();

    const next = {
      users: {
        edges: [],
      },
    };

    subscription.push({
      patch: diff({ left: initial, right: next }),
      revision: 2,
    } as any);

    await waitFor(() => expect(result.current[0].data!.length).toEqual(0));
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });

  test("multiple live queries can be mounted within the same component", async () => {
    const Component = () => {
      const [{ data: users }] = useFindMany(api.user, { live: true });
      const [{ data: products }] = useFindMany(api.shopifyProduct, { live: true });

      return (
        <>
          Users: {users?.length ?? "<none>"}, Products: {products?.length ?? "<none>"}
        </>
      );
    };

    const { container } = render(<Component />, {
      wrapper: MockGraphQLWSClientWrapper(api),
    });

    expect(container).toHaveTextContent("Users: <none>, Products: <none>");

    await waitFor(() => expect(mockGraphQLWSClient.subscribe.subscriptions).toHaveLength(2));
    const users = mockGraphQLWSClient.subscribe.subscriptions[0];
    const products = mockGraphQLWSClient.subscribe.subscriptions[1];

    users.push({
      data: {
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
                email: null,
              },
            },
          ],
        },
      },
      revision: 1,
    } as any);

    products.push({
      data: {
        shopifyProducts: {
          edges: [
            {
              node: {
                id: "123",
              },
            },
          ],
        },
      },
      revision: 1,
    } as any);

    await waitFor(() => expect(container).toHaveTextContent("Users: 2, Products: 1"));

    products.push({
      data: {
        shopifyProducts: {
          edges: [],
        },
      },
      revision: 1,
    } as any);

    await waitFor(() => expect(container).toHaveTextContent("Users: 2, Products: 0"));
  });

  test("live queries can propagate graphql errors", async () => {
    const { result } = renderHook(() => useFindMany(api.user, { live: true }), {
      wrapper: MockGraphQLWSClientWrapper(api),
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    await waitFor(() => expect(mockGraphQLWSClient.subscribe.subscriptions).toHaveLength(1));

    const subscription = mockGraphQLWSClient.subscribe.subscriptions[0];
    expect(subscription.payload.query).toContain("@live");

    subscription.push({
      data: null,
      errors: [
        {
          message: "GGT_PERMISSION_DENIED: Permission has been denied.",
          locations: [{ line: 2, column: 3 }],
          path: ["posts"],
        },
      ],
      revision: 1,
    } as any);

    await waitFor(() => expect(result.current[0].fetching).toBe(false));

    expect(result.current[0].error!.message).toEqual("[GraphQL] GGT_PERMISSION_DENIED: Permission has been denied.");
    expect(result.current[0].data).toBeNull();
  });

  test("live queries are re-established when inputs change", async () => {
    const { result, rerender } = renderHook(({ id }) => useFindMany(api.user, { filter: { id: { equals: id } }, live: true }), {
      initialProps: { id: "1" },
      wrapper: MockGraphQLWSClientWrapper(api),
    });

    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].data).toBeFalsy();

    await waitFor(() => expect(mockGraphQLWSClient.subscribe.subscriptions).toHaveLength(1));

    const firstSubscription = mockGraphQLWSClient.subscribe.subscriptions[0];
    expect(firstSubscription.payload.query).toContain("@live");

    firstSubscription.push({
      data: {
        users: {
          edges: [
            {
              node: {
                id: "1",
                email: "user1@test.com",
              },
            },
          ],
        },
      },
      revision: 1,
    } as any);

    await waitFor(() => expect(result.current[0].data!.length).toEqual(1));
    expect(result.current[0].data![0].id).toEqual("1");

    rerender({ id: "2" });

    await waitFor(() => expect(result.current[0].fetching).toBe(true));
    await waitFor(() => expect(mockGraphQLWSClient.subscribe.subscriptions).toHaveLength(2));

    expect(firstSubscription.disposed).toBe(true);

    const secondSubscription = mockGraphQLWSClient.subscribe.subscriptions[1];
    expect(secondSubscription.payload.query).toContain("@live");

    secondSubscription.push({
      data: {
        users: {
          edges: [
            {
              node: {
                id: "2",
                email: "user2@test.com",
              },
            },
          ],
        },
      },
      revision: 1,
    } as any);

    await waitFor(() => expect(result.current[0].fetching).toBe(false));
    await waitFor(() => expect(result.current[0].data!.length).toEqual(1));
    expect(result.current[0].data![0].id).toEqual("2");
  });

  test("live queries are not duplicated when cache tries to re-execute them", async () => {
    if (!("baseSubscriptionClient" in (testApi.connection as any))) {
      (testApi.connection as any).baseSubscriptionClient = undefined;
    }
    jest.replaceProperty(testApi.connection, "baseSubscriptionClient", mockGraphQLWSClient as any);

    // @ts-expect-error baseClient is private
    const urqlClient = testApi.connection.baseClient as UrqlClient;

    let operationCount = 0;
    let findManyOperation: Operation | null = null;

    pipe(
      urqlClient.operations$,
      subscribe((op) => {
        operationCount++;

        expect(op.kind).toBe("query");
        expect(
          (op.query as DocumentNode).definitions.some(
            (def) =>
              def.kind === "OperationDefinition" &&
              def.operation === "query" &&
              def.directives?.some((directive) => directive.name.value === "live")
          )
        ).toBe(true);

        findManyOperation = op;
      })
    );

    // start the live query
    testApi.modelA.findMany({ live: true })[Symbol.asyncIterator]();

    // wait for the subscription to be created
    await waitFor(() => expect(mockGraphQLWSClient.subscribe.subscriptions).toHaveLength(1));

    // make sure the operation was assigned
    expect(findManyOperation).not.toBeNull();
    expect(operationCount).toBe(1);

    // re-execute the live query operation
    urqlClient.reexecuteOperation(findManyOperation!);

    // let the event loop run to give urql a chance to re-execute the operation
    await sleep(100);

    // make sure the operation was not actually re-executed
    expect(operationCount).toBe(1);
  });

  test("multiple live queries with different parameters can mount simultaneously", async () => {
    const { result: result1 } = renderHook(() => useFindMany(api.user, { filter: { id: { equals: "1" } }, live: true }), {
      wrapper: MockGraphQLWSClientWrapper(api),
    });

    const { result: result2 } = renderHook(() => useFindMany(api.user, { filter: { id: { equals: "2" } }, live: true }), {
      wrapper: MockGraphQLWSClientWrapper(api),
    });

    expect(result1.current[0].fetching).toBe(true);
    expect(result2.current[0].fetching).toBe(true);

    await waitFor(() => expect(mockGraphQLWSClient.subscribe.subscriptions).toHaveLength(2));

    const subscription1 = mockGraphQLWSClient.subscribe.subscriptions[0];
    const subscription2 = mockGraphQLWSClient.subscribe.subscriptions[1];

    subscription1.push({
      data: {
        users: {
          edges: [
            {
              node: {
                id: "1",
                email: "user1@test.com",
              },
            },
          ],
        },
      },
      revision: 1,
    } as any);

    subscription2.push({
      data: {
        users: {
          edges: [
            {
              node: {
                id: "2",
                email: "user2@test.com",
              },
            },
          ],
        },
      },
      revision: 1,
    } as any);

    subscription1.push({
      data: {
        users: {
          edges: [
            {
              node: {
                id: "1",
                email: "user1-updated@test.com",
              },
            },
          ],
        },
      },
      revision: 1,
    } as any);

    await waitFor(() => expect(result1.current[0].data!.length).toEqual(1));
    await waitFor(() => expect(result2.current[0].data!.length).toEqual(1));

    expect(result1.current[0].data![0].id).toEqual("1");
    expect(result2.current[0].data![0].id).toEqual("2");
    expect(result1.current[0].data![0].email).toEqual("user1-updated@test.com");
    expect(result2.current[0].data![0].email).toEqual("user2@test.com");
  });

  test("live queries can be unmounted and remounted while maintaining subscription", async () => {
    const wrapper = MockGraphQLWSClientWrapper(api);
    const { result, unmount } = renderHook(() => useFindMany(api.user, { live: true }), {
      wrapper,
    });

    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].data).toBeFalsy();

    await waitFor(() => expect(mockGraphQLWSClient.subscribe.subscriptions).toHaveLength(1));

    const subscription = mockGraphQLWSClient.subscribe.subscriptions[0];
    expect(subscription.payload.query).toContain("@live");

    // Push initial data
    subscription.push({
      data: {
        users: {
          edges: [
            {
              node: {
                id: "123",
                email: "initial@test.com",
              },
            },
          ],
        },
      },
      revision: 1,
    } as any);

    await waitFor(() => expect(result.current[0].data!.length).toEqual(1));
    expect(result.current[0].data![0].email).toEqual("initial@test.com");

    // Unmount the component
    unmount();

    // Wait for the old subscription to be disposed
    await waitFor(() => expect(subscription.disposed).toBe(true));

    // Create a new render instead of rerendering, using the same wrapper
    const { result: newResult } = renderHook(() => useFindMany(api.user, { live: true }), {
      wrapper,
    });

    // Wait for the new subscription to be created
    await waitFor(() => expect(mockGraphQLWSClient.subscribe.subscriptions).toHaveLength(2));
    const newSubscription = mockGraphQLWSClient.subscribe.subscriptions[1];

    // Push an update (full data) to the new subscription
    newSubscription.push({
      data: {
        users: {
          edges: [
            {
              node: {
                id: "123",
                email: "updated@test.com",
              },
            },
          ],
        },
      },
      revision: 1,
    } as any);

    // Verify the update was received
    await waitFor(() => expect(newResult.current[0].data!.length).toEqual(1));
    await waitFor(() => expect(newResult.current[0].data![0].email).toEqual("updated@test.com"));
    expect(newResult.current[0].fetching).toBe(false);
    expect(newResult.current[0].error).toBeFalsy();
  });
});
