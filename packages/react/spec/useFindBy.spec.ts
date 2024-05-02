import type { GadgetRecord } from "@gadgetinc/api-client-core";
import { diff } from "@n1ru4l/json-patch-plus";
import { renderHook, waitFor } from "@testing-library/react";
import type { IsExact } from "conditional-type-checks";
import { assert } from "conditional-type-checks";
import { useFindBy } from "../src/index.js";
import type { ErrorWrapper } from "../src/utils.js";
import { relatedProductsApi } from "./apis.js";
import { MockClientWrapper, MockGraphQLWSClientWrapper, mockGraphQLWSClient, mockUrqlClient } from "./testWrappers.js";

describe("useFindBy", () => {
  // these functions are typechecked but never run to avoid actually making API calls
  const _TestFindByReturnsTypedDataWithExplicitSelection = () => {
    const [{ data, fetching, error }, refresh] = useFindBy(relatedProductsApi.user.findByEmail, "hello@gadget.dev", {
      select: { id: true, email: true },
    });

    assert<IsExact<typeof fetching, boolean>>(true);
    assert<IsExact<typeof data, undefined | GadgetRecord<{ id: string; email: string | null }>>>(true);
    assert<IsExact<typeof error, ErrorWrapper | undefined>>(true);

    // data is accessible via dot access
    if (data) {
      data.id;
      data.email;
    }

    // hook return value includes the urql refresh function
    refresh();
  };

  const _TestFindByReturnsTypedDataWithNoSelection = () => {
    const [{ data }] = useFindBy(relatedProductsApi.user.findByEmail, "hello@gadget.dev");

    if (data) {
      data.id;
      data.email;
    }
  };

  test("it can find one record by a field value", async () => {
    const { result } = renderHook(() => useFindBy(relatedProductsApi.user.findByEmail, "test@test.com"), {
      wrapper: MockClientWrapper(relatedProductsApi),
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

    mockUrqlClient.executeQuery.pushResponse("users", {
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

    expect(result.current[0].data!.id).toEqual("123");
    expect(result.current[0].data!.email).toEqual("test@test.com");
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });

  test("it return null if the record with the given field value can't be found", async () => {
    const { result } = renderHook(() => useFindBy(relatedProductsApi.user.findByEmail, "test@test.com"), {
      wrapper: MockClientWrapper(relatedProductsApi),
    });

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

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(false);
    const error = result.current[0].error;
    expect(error).toBeTruthy();
    expect(error!.message).toMatchInlineSnapshot(`"[GraphQL] user record with email=test@test.com not found"`);
  });

  test("returns the same data object on rerender", async () => {
    const { result, rerender } = renderHook(() => useFindBy(relatedProductsApi.user.findByEmail, "test@test.com"), {
      wrapper: MockClientWrapper(relatedProductsApi),
    });

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

    mockUrqlClient.executeQuery.pushResponse("users", {
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
    const { result, rerender } = renderHook(() => useFindBy(relatedProductsApi.user.findByEmail, "test@test.com", { suspense: true }), {
      wrapper: MockClientWrapper(relatedProductsApi),
    });

    // first render never completes as the component suspends
    expect(result.current).toBeFalsy();
    expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

    mockUrqlClient.executeQuery.pushResponse("users", {
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

    // rerender as react would do when the suspense promise resolves
    rerender();
    expect(result.current).toBeTruthy();
    expect(result.current[0].data!.id).toEqual("123");
    expect(result.current[0].data!.email).toEqual("test@test.com");
    expect(result.current[0].error).toBeFalsy();

    const beforeObject = result.current[0];
    rerender();
    expect(result.current[0]).toBe(beforeObject);
  });

  test("can query for live data", async () => {
    const { result } = renderHook(() => useFindBy(relatedProductsApi.user.findByEmail, "test@test.com", { live: true }), {
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

    expect(result.current[0].data!.id).toEqual("123");
    expect(result.current[0].data!.email).toEqual("test@test.com");
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

    await waitFor(() => expect(result.current[0].data!.email).toEqual("a-new-email@test.com"));

    expect(result.current[0].data!.id).toEqual("123");
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });
});
