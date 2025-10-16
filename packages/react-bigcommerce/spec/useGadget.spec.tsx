import { mockUrqlClient } from "@gadgetinc/core/testing";
import { jest } from "@jest/globals";
import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react";
import type { IsExact } from "conditional-type-checks";
import { assert } from "conditional-type-checks";
import type { ReactNode } from "react";
import React from "react";
import { bigcommerceApi } from "../../client-hooks/spec/apis.js";
import { Provider } from "../src/Provider.js";
import { useGadget } from "../src/index.js";

const _TestUseGadgetReturnsAppropriateTypes = () => {
  const { loading, isAuthenticated, userId, storeHash, error } = useGadget();

  assert<IsExact<typeof loading, boolean>>(true);
  assert<IsExact<typeof isAuthenticated, boolean>>(true);
  assert<IsExact<typeof userId, string | undefined>>(true);
  assert<IsExact<typeof storeHash, string | undefined>>(true);
  assert<IsExact<typeof error, Error | undefined>>(true);
};

describe("useGadget", () => {
  const { location } = window;

  beforeAll(() => {
    // @ts-expect-error mock
    delete window.location;

    // @ts-expect-error mock
    window.location = {
      search: "",
    };
  });

  beforeEach(() => {
    jest.spyOn(bigcommerceApi.connection, "currentClient" as any, "get").mockReturnValue(mockUrqlClient);
  });

  afterAll(() => {
    window.location = location;
  });

  test("when there is no signed_payload parameter", async () => {
    const { result, rerender } = renderHook(() => useGadget(), {
      wrapper: (props: { children: ReactNode }) => <Provider api={bigcommerceApi}>{props.children}</Provider>,
    });

    const { loading, isAuthenticated, userId, storeHash, error } = result.current;
    expect(loading).toBe(true);
    expect(isAuthenticated).toBe(false);
    expect(userId).toBeUndefined();
    expect(storeHash).toBeUndefined();
    expect(error).toBeUndefined();

    await mockUrqlClient.executeQuery.pushResponse("BigCommerceSession", {
      data: {
        currentSession: {
          bigcommerceUserId: null,
          bigcommerceStore: null,
          roles: [
            {
              key: "unauthenticated",
            },
          ],
        },
      },
      stale: false,
      hasNext: false,
    });

    rerender();

    expect(result.current.loading).toBe(false);
    expect(result.current.isAuthenticated).toBe(false);
    expect(result.current.userId).toBeUndefined();
    expect(result.current.storeHash).toBeUndefined();
    expect(result.current.error).toBeUndefined();
  });

  test("when there is a signed_payload parameter", async () => {
    window.location.search = "signed_payload=test-session-token";
    const { result, rerender } = renderHook(() => useGadget(), {
      wrapper: (props: { children: ReactNode }) => <Provider api={bigcommerceApi}>{props.children}</Provider>,
    });

    const { loading, isAuthenticated, userId, storeHash, error } = result.current;
    expect(loading).toBe(true);
    expect(isAuthenticated).toBe(false);
    expect(userId).toBeUndefined();
    expect(storeHash).toBeUndefined();
    expect(error).toBeUndefined();

    await mockUrqlClient.executeQuery.pushResponse("BigCommerceSession", {
      data: {
        currentSession: {
          bigcommerceUserId: "123",
          bigcommerceStore: {
            storeHash: "xyz789",
          },
          roles: [
            {
              key: "Role-BigCommerce-App",
            },
          ],
        },
      },
      stale: false,
      hasNext: false,
    });

    rerender();

    expect(result.current.loading).toBe(false);
    expect(result.current.isAuthenticated).toBe(true);
    expect(result.current.userId).toEqual("123");
    expect(result.current.storeHash).toEqual("xyz789");
    expect(result.current.error).toBeUndefined();
  });
});
