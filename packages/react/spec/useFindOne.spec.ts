import type { GadgetRecord } from "@gadgetinc/api-client-core";
import { renderHook, waitFor } from "@testing-library/react";
import type { IsExact } from "conditional-type-checks";
import { assert } from "conditional-type-checks";
import { useFindOne } from "../src/index.js";
import type { ErrorWrapper } from "../src/utils.js";
import { kitchenSinkApi, relatedProductsApi } from "./apis.js";
import { MockClientWrapper, MockGraphQLWSClientWrapper, mockGraphQLWSClient, mockUrqlClient } from "./testWrappers.js";

describe("useFindOne", () => {
  // these functions are typechecked but never run to avoid actually making API calls
  const _TestFindOneReturnsTypedDataWithExplicitSelection = () => {
    const [{ data, fetching, error }, refresh] = useFindOne(relatedProductsApi.user, "10", { select: { id: true, email: true } });

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

  const _TestFindOneReturnsTypedDataWithNoSelection = () => {
    const [{ data }] = useFindOne(relatedProductsApi.user, "10");

    if (data) {
      data.id;
      data.email;
    }
  };

  const _TestFindOneOnNamespacedModel = () => {
    const [{ data }] = useFindOne(kitchenSinkApi.game.player, "10");

    if (data) {
      data.id;
      data.name;
    }
  };

  test("can find one record by id", async () => {
    const { result } = renderHook(() => useFindOne(relatedProductsApi.user, "123"), { wrapper: MockClientWrapper(relatedProductsApi) });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

    mockUrqlClient.executeQuery.pushResponse("user", {
      data: {
        user: {
          id: "123",
          email: "test@test.com",
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

  test("returns an error if the record isn't found", async () => {
    const { result, rerender } = renderHook(() => useFindOne(relatedProductsApi.user, "123"), {
      wrapper: MockClientWrapper(relatedProductsApi),
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

    mockUrqlClient.executeQuery.pushResponse("user", {
      data: {
        user: null,
      },
      stale: false,
      hasNext: false,
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(false);
    const error = result.current[0].error;
    expect(error).toBeTruthy();
    expect(error!.message).toMatchInlineSnapshot(`"[GraphQL] Record Not Found Error: Gadget API returned no data at user"`);

    // ensure the error is the same after rerendering
    rerender();

    expect(result.current[0].error).toBe(error);
  });

  test("can find one record by id for a namespaced model", async () => {
    const { result } = renderHook(() => useFindOne(kitchenSinkApi.game.player, "123"), { wrapper: MockClientWrapper(kitchenSinkApi) });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

    mockUrqlClient.executeQuery.pushResponse("player", {
      data: {
        game: {
          player: {
            id: "123",
            name: "Caitlin Clark",
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    expect(result.current[0].data!.id).toEqual("123");
    expect(result.current[0].data!.name).toEqual("Caitlin Clark");
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });

  test("returns an error if the record isn't found for a namespaced model", async () => {
    const { result, rerender } = renderHook(() => useFindOne(kitchenSinkApi.game.player, "123"), {
      wrapper: MockClientWrapper(kitchenSinkApi),
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

    mockUrqlClient.executeQuery.pushResponse("player", {
      data: {
        game: {
          player: null,
        },
      },
      stale: false,
      hasNext: false,
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(false);
    const error = result.current[0].error;
    expect(error).toBeTruthy();
    expect(error!.message).toMatchInlineSnapshot(`"[GraphQL] Record Not Found Error: Gadget API returned no data at game.player"`);

    // ensure the error is the same after rerendering
    rerender();

    expect(result.current[0].error).toBe(error);
  });

  test("returns the same data on rerender", async () => {
    const { result, rerender } = renderHook(() => useFindOne(relatedProductsApi.user, "123"), {
      wrapper: MockClientWrapper(relatedProductsApi),
    });

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

    mockUrqlClient.executeQuery.pushResponse("user", {
      data: {
        user: {
          id: "123",
          email: "test@test.com",
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
    const { result, rerender } = renderHook(
      () => {
        return useFindOne(relatedProductsApi.user, "123", { suspense: true });
      },
      { wrapper: MockClientWrapper(relatedProductsApi) }
    );

    // first render never completes as the component suspends
    expect(result.current).toBeFalsy();
    expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

    mockUrqlClient.executeQuery.pushResponse("user", {
      data: {
        user: {
          id: "123",
          email: "test@test.com",
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

  test("doesn't issue a request if paused", async () => {
    const { result } = renderHook(() => useFindOne(relatedProductsApi.user, "123", { pause: true }), {
      wrapper: MockClientWrapper(relatedProductsApi),
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(0);
  });

  test("can query for live data", async () => {
    const { result } = renderHook(() => useFindOne(relatedProductsApi.user, "123", { live: true }), {
      wrapper: MockGraphQLWSClientWrapper(relatedProductsApi),
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    await waitFor(() => expect(mockGraphQLWSClient.subscribe.subscriptions).toHaveLength(1));

    const subscription = mockGraphQLWSClient.subscribe.subscriptions[0];
    expect(subscription.payload.query).toContain("@live");

    subscription.push({
      data: {
        user: {
          id: "123",
          email: "test@test.com",
        },
      },
      revision: 1,
    } as any);

    await waitFor(() => expect(result.current[0].fetching).toBe(false));

    expect(result.current[0].data!.id).toEqual("123");
    expect(result.current[0].data!.email).toEqual("test@test.com");
    expect(result.current[0].error).toBeFalsy();

    subscription.push({
      patch: {
        user: {
          email: [null, "test-new@test.com"],
        },
      },
      revision: 2,
    } as any);

    await waitFor(() => expect(result.current[0].data!.email).toEqual("test-new@test.com"));

    expect(result.current[0].data!.id).toEqual("123");
    expect(result.current[0].data!.email).toEqual("test-new@test.com");
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });
});
