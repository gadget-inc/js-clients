import { Client } from "@gadget-client/related-products-example";
import { diff } from "@n1ru4l/json-patch-plus";
import { render, renderHook, waitFor } from "@testing-library/react";
import React from "react";
import { useFindMany } from "../src/useFindMany.js";
import { MockGraphQLWSClientWrapper, mockGraphQLWSClient } from "./testWrappers.js";

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
});
