import type { AnyClient } from "@gadgetinc/api-client-core";
import { GadgetConnection } from "@gadgetinc/api-client-core";
import type { ShopifyGlobal } from "@shopify/app-bridge-react";
import * as AppBridgeReact from "@shopify/app-bridge-react";
import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react";
import type { IsExact } from "conditional-type-checks";
import { assert } from "conditional-type-checks";
import type { ReactNode } from "react";
import React from "react";
import { act } from "react-dom/test-utils";
import { mockUrqlClient } from "../../api-client-core/spec/mockUrqlClient.js";
import { Provider } from "../src/Provider.js";
import { AppType, useGadget } from "../src/index.js";

// these functions are typechecked but never run to avoid actually making API calls
const _TestUseGadgetReturnsAppropriateTypes = () => {
  const { loading, appType, isEmbedded, appBridge, canAuth, isAuthenticated, isRootFrameRequest } = useGadget();

  assert<IsExact<typeof loading, boolean>>(true);
  assert<IsExact<typeof isEmbedded, boolean>>(true);
  assert<IsExact<typeof canAuth, boolean>>(true);
  assert<IsExact<typeof isAuthenticated, boolean>>(true);
  assert<IsExact<typeof appType, AppType | undefined>>(true);
  assert<IsExact<typeof appBridge, ShopifyGlobal | null>>(true);
  assert<IsExact<typeof isRootFrameRequest, boolean>>(true);
};

describe("useGadget", () => {
  let mockApiClient: AnyClient;
  const mockApiKey = "some-api-key";
  let useAppBridgeMock: jest.SpyInstance;
  let resolveIdToken: (value: string) => void;

  beforeEach(() => {
    mockApiClient = {
      connection: new GadgetConnection({
        endpoint: "https://test-app.gadget.app/endpoint",
      }),
    } as any;

    jest.spyOn(mockApiClient.connection, "currentClient", "get").mockReturnValue(mockUrqlClient);
    window.shopify = {
      // @ts-expect-error mock
      environment: {
        embedded: false,
        mobile: false,
      },
      config: {
        apiKey: mockApiKey,
        shop: "example.myshopify.com",
        locale: "en",
      },
      idToken: () =>
        new Promise((resolve) => {
          resolveIdToken = resolve;
        }),
    };

    useAppBridgeMock = jest.spyOn(AppBridgeReact, "useAppBridge").mockImplementation(() => window.shopify);
  });

  test("has correct embedded value", () => {
    const { result, rerender } = renderHook(() => useGadget(), {
      wrapper: (props: { children: ReactNode }) => (
        <Provider api={mockApiClient} shopifyApiKey={mockApiKey} type={AppType.Embedded}>
          {props.children}
        </Provider>
      ),
    });

    expect(result.current.isEmbedded).toBeFalsy();

    window.shopify.environment.embedded = true;

    rerender();

    expect(result.current.isEmbedded).toBeTruthy();

    window.shopify.environment.embedded = false;

    rerender();

    expect(result.current.isEmbedded).toBeFalsy();

    window.shopify.environment.mobile = true;

    rerender();

    expect(result.current.isEmbedded).toBeTruthy();

    window.shopify.environment.mobile = false;
  });

  test("has correct authenticated value", async () => {
    let { result } = renderHook(() => useGadget(), {
      wrapper: (props: { children: ReactNode }) => (
        <Provider api={mockApiClient} shopifyApiKey={mockApiKey} type={AppType.Embedded}>
          {props.children}
        </Provider>
      ),
    });

    await act(async () => {
      resolveIdToken("some-id-token");
      await mockUrqlClient.executeMutation.waitForSubject("ShopifyFetchOrInstallShop");
    });

    mockUrqlClient.executeMutation.pushResponse("ShopifyFetchOrInstallShop", {
      data: {
        shopifyConnection: {
          fetchOrInstallShop: {
            isAuthenticated: false,
            redirectToOauth: true,
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    expect(result.current.isAuthenticated).toBeFalsy();

    ({ result } = renderHook(() => useGadget(), {
      wrapper: (props: { children: ReactNode }) => (
        <Provider api={mockApiClient} shopifyApiKey={mockApiKey} type={AppType.Embedded}>
          {props.children}
        </Provider>
      ),
    }));

    await act(async () => {
      resolveIdToken("some-id-token");
      await mockUrqlClient.executeMutation.waitForSubject("ShopifyFetchOrInstallShop");
    });

    mockUrqlClient.executeMutation.pushResponse("ShopifyFetchOrInstallShop", {
      data: {
        shopifyConnection: {
          fetchOrInstallShop: {
            isAuthenticated: true,
            redirectToOauth: false,
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    expect(result.current.isAuthenticated).toBeTruthy();
  });

  test("has correct isRootFrameRequest value", () => {
    let { result } = renderHook(() => useGadget(), {
      wrapper: (props: { children: ReactNode }) => (
        <Provider api={mockApiClient} shopifyApiKey={mockApiKey} type={AppType.Embedded}>
          {props.children}
        </Provider>
      ),
    });

    expect(result.current.isRootFrameRequest).toBeTruthy();

    const location = window.location;
    // @ts-expect-error mock
    delete window.location;

    // @ts-expect-error mock
    window.location = {
      origin: "https://test-app.gadget.app",
      pathname: "/",
      search: "?shop=example.myshopify.com&hmac=abcdefg&host=abcdfg",
      assign: jest.fn(),
    };

    ({ result } = renderHook(() => useGadget(), {
      wrapper: (props: { children: ReactNode }) => (
        <Provider api={mockApiClient} shopifyApiKey={mockApiKey} type={AppType.Embedded}>
          {props.children}
        </Provider>
      ),
    }));

    expect(result.current.isRootFrameRequest).toBeFalsy();

    ({ result } = renderHook(() => useGadget(), {
      wrapper: (props: { children: ReactNode }) => (
        <Provider api={mockApiClient} shopifyApiKey={mockApiKey} type={AppType.Standalone}>
          {props.children}
        </Provider>
      ),
    }));

    // standalone apps are always falsy
    expect(result.current.isRootFrameRequest).toBeFalsy();

    window.location = location;

    ({ result } = renderHook(() => useGadget(), {
      wrapper: (props: { children: ReactNode }) => (
        <Provider api={mockApiClient} shopifyApiKey={mockApiKey} type={AppType.Standalone}>
          {props.children}
        </Provider>
      ),
    }));

    // standalone apps are always falsy
    expect(result.current.isRootFrameRequest).toBeFalsy();
  });

  test("has loading true for embedded apps until ShopifyFetchOrInstallShop resolves", async () => {
    window.shopify.environment.embedded = true;
    const location = window.location;
    // @ts-expect-error mock
    delete window.location;

    // @ts-expect-error mock
    window.location = {
      origin: "https://test-app.gadget.app",
      pathname: "/",
      search: "?shop=example.myshopify.com&hmac=abcdefg&host=abcdfg",
      assign: jest.fn(),
    };

    const all: { loading: boolean; isAuthenticated: boolean }[] = [];

    const { result } = renderHook(
      () => {
        const value = useGadget();
        all.push(value);
        return value;
      },
      {
        wrapper: (props: { children: ReactNode }) => (
          <Provider api={mockApiClient} shopifyApiKey={mockApiKey} type={AppType.Embedded}>
            {props.children}
          </Provider>
        ),
      }
    );

    await act(async () => {
      resolveIdToken("some-id-token");
      await mockUrqlClient.executeMutation.waitForSubject("ShopifyFetchOrInstallShop");
    });

    expect(all.every((v) => v.loading)).toBeTruthy();
    expect(all.every((v) => !v.isAuthenticated)).toBeTruthy();

    mockUrqlClient.executeMutation.pushResponse("ShopifyFetchOrInstallShop", {
      data: {
        shopifyConnection: {
          fetchOrInstallShop: {
            isAuthenticated: true,
            redirectToOauth: false,
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    expect(result.current.isRootFrameRequest).toBeFalsy();
    expect(result.current.loading).toBeFalsy();
    expect(result.current.isAuthenticated).toBeTruthy();

    window.location = location;
    window.shopify.environment.embedded = false;
  });
});
