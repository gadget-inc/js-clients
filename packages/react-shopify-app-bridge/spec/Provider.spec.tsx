import type { AnyClient } from "@gadgetinc/api-client-core";
import { GadgetConnection } from "@gadgetinc/api-client-core";
import { jest } from "@jest/globals";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { CombinedError } from "@urql/core";
import React from "react";
import { act } from "react-dom/test-utils";
import { mockUrqlClient } from "../../api-client-core/spec/mockUrqlClient.js";
import { AppType, Provider } from "../src/Provider.js";

describe("GadgetProvider", () => {
  let mockApiClient: AnyClient;
  const mockNavigate = jest.fn<any>();
  const mockOpen = jest.fn<any>();
  const mockApiKey = "some-api-key";
  let resolveIdToken: (value: string) => void;

  beforeEach(() => {
    // @ts-expect-error mock
    delete window.location;

    delete window.gadgetConfig;

    window.open = mockOpen;

    // @ts-expect-error mock
    window.location = {
      assign: mockNavigate,
      origin: "https://test-app.gadget.app",
      pathname: "/",
      search: "",
    };

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

    mockApiClient = {
      connection: new GadgetConnection({
        endpoint: "https://test-app.gadget.app/endpoint",
      }),
    } as any;

    jest.spyOn(mockApiClient.connection, "currentClient" as any, "get").mockReturnValue(mockUrqlClient);
  });

  afterEach(() => {
    mockNavigate.mockClear();
  });

  describe.each([true, false])("as install request: %s", (isInstallRequest) => {
    beforeEach(() => {
      // @ts-expect-error mock
      window.location = {
        assign: mockNavigate,
        origin: "https://test-app.gadget.app",
        pathname: "/",
        search: isInstallRequest ? "?shop=example.myshopify.com&hmac=abcdefg&host=abcdfg" : "",
      };
    });

    test("can render a standalone app type", () => {
      const { container } = render(
        <Provider api={mockApiClient} shopifyApiKey={mockApiKey} type={AppType.Standalone}>
          <span>hello world</span>
        </Provider>
      );

      expect(mockUrqlClient.executeQuery).not.toHaveBeenCalled();

      if (isInstallRequest) {
        expect(mockNavigate).toHaveBeenCalledWith(
          "https://test-app.gadget.app/api/connections/auth/shopify?shop=example.myshopify.com&hmac=abcdefg&host=abcdfg"
        );
      } else {
        expect(mockNavigate).not.toHaveBeenCalled();
        expect(container.outerHTML).toMatchInlineSnapshot(`"<div><span>hello world</span></div>"`);
      }
    });

    test("can render an embedded app type", async () => {
      const { container } = render(
        <Provider api={mockApiClient} shopifyApiKey={mockApiKey} type={AppType.Embedded}>
          <span>hello world</span>
        </Provider>
      );

      await act(async () => {
        resolveIdToken("mock-id-token");
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

      if (isInstallRequest) {
        expect(mockOpen).toHaveBeenCalledWith(
          "https://test-app.gadget.app/api/connections/auth/shopify?shop=example.myshopify.com&hmac=abcdefg&host=abcdfg",
          "_top"
        );
        expect(mockNavigate).not.toHaveBeenCalled();
      } else {
        expect(mockNavigate).not.toHaveBeenCalled();
        expect(mockOpen).not.toHaveBeenCalled();
        expect(container.outerHTML).toMatchInlineSnapshot(`"<div><span>hello world</span></div>"`);
      }
    });

    test("can render a standalone app type in embedded context", () => {
      const { container } = render(
        <Provider api={mockApiClient} shopifyApiKey={mockApiKey} type={AppType.Standalone}>
          <span>hello world</span>
        </Provider>
      );

      expect(mockUrqlClient.executeMutation).not.toHaveBeenCalled();

      if (isInstallRequest) {
        expect(mockNavigate).toHaveBeenCalledWith(
          "https://test-app.gadget.app/api/connections/auth/shopify?shop=example.myshopify.com&hmac=abcdefg&host=abcdfg"
        );
      } else {
        expect(mockNavigate).not.toHaveBeenCalled();
        expect(container.outerHTML).toMatchInlineSnapshot(`"<div><span>hello world</span></div>"`);
      }
    });

    test("can render a standalone app type in mobile context", () => {
      window.shopify.environment.mobile = true;

      const { container } = render(
        <Provider api={mockApiClient} shopifyApiKey={mockApiKey} type={AppType.Standalone}>
          <span>hello world</span>
        </Provider>
      );

      expect(mockUrqlClient.executeMutation).not.toHaveBeenCalled();

      if (isInstallRequest) {
        expect(mockNavigate).toHaveBeenCalledWith(
          "https://test-app.gadget.app/api/connections/auth/shopify?shop=example.myshopify.com&hmac=abcdefg&host=abcdfg"
        );
      } else {
        expect(mockNavigate).not.toHaveBeenCalled();
        expect(container.outerHTML).toMatchInlineSnapshot(`"<div><span>hello world</span></div>"`);
      }
    });

    test("can render an embedded app type in embedded context", async () => {
      // @ts-expect-error mock
      jest.spyOn(window, "self", "get").mockImplementation(() => ({}));

      const { container } = render(
        <Provider api={mockApiClient} shopifyApiKey={mockApiKey} type={AppType.Embedded}>
          <span>hello world</span>
        </Provider>
      );

      await act(async () => {
        resolveIdToken("mock-id-token");
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

      if (isInstallRequest) {
        expect(mockOpen).toHaveBeenCalledWith(
          "https://test-app.gadget.app/api/connections/auth/shopify?shop=example.myshopify.com&hmac=abcdefg&host=abcdfg",
          "_top"
        );
        expect(mockNavigate).not.toHaveBeenCalled();
      } else {
        expect(container.outerHTML).toMatchInlineSnapshot(`"<div><span>hello world</span></div>"`);
        expect(mockNavigate).not.toHaveBeenCalled();
        expect(mockOpen).not.toHaveBeenCalled();
      }
    });
  });

  test("can render an embedded app when is not authenticated and not redirecting to oauth", async () => {
    window.shopify.environment.embedded = true;

    const { container } = render(
      <Provider api={mockApiClient} shopifyApiKey={mockApiKey} type={AppType.Embedded}>
        <span>hello world</span>
      </Provider>
    );

    await act(async () => {
      resolveIdToken("mock-id-token");
      await mockUrqlClient.executeMutation.waitForSubject("ShopifyFetchOrInstallShop");
    });

    mockUrqlClient.executeMutation.pushResponse("ShopifyFetchOrInstallShop", {
      data: {
        shopifyConnection: {
          fetchOrInstallShop: {
            isAuthenticated: false,
            redirectToOauth: false,
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    expect(container.outerHTML).toMatchInlineSnapshot(`"<div><span>hello world</span></div>"`);
    expect(mockOpen).not.toHaveBeenCalled();
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  test("can render an embedded app type that's already authenticated", async () => {
    window.shopify.environment.embedded = true;

    const { container } = render(
      <Provider api={mockApiClient} shopifyApiKey={mockApiKey} type={AppType.Embedded}>
        <span>hello world</span>
      </Provider>
    );

    await act(async () => {
      resolveIdToken("mock-id-token");
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

    expect(container.outerHTML).toMatchInlineSnapshot(`"<div><span>hello world</span></div>"`);
    expect(mockNavigate).not.toHaveBeenCalled();

    window.shopify.environment.embedded = false;
  });

  test("can render an embedded app type that gets an error when checking shopify connection state", async () => {
    window.shopify.environment.embedded = true;

    const { container } = render(
      <Provider api={mockApiClient} shopifyApiKey={mockApiKey} type={AppType.Embedded}>
        <span>hello world</span>
      </Provider>
    );

    await act(async () => {
      resolveIdToken("mock-id-token");
      await mockUrqlClient.executeMutation.waitForSubject("ShopifyFetchOrInstallShop");
    });

    mockUrqlClient.executeMutation.pushResponse("ShopifyFetchOrInstallShop", {
      data: {
        shopifyConnection: {
          fetchOrInstallShop: null,
        },
      },
      error: new CombinedError({
        graphQLErrors: [
          {
            message:
              "GGT_INVALID_SHOPIFY_SESSION_TOKEN: Gadget has detected that this shop needs to be installed via the Shopify Managed OAuth installation flow, but this request is authenticated using a mock Shopify session token provisioned by Gadget that Shopify won't accept. Please install or re-install this shop via the Partners Dashboard or App Store in order to allow mock embedding of it.",
            locations: [
              {
                line: 3,
                column: 5,
              },
            ],
            path: ["shopifyConnection", "fetchOrInstallShop"],
            extensions: {
              fromSandbox: false,
            },
          },
        ],
      }),
      stale: false,
      hasNext: false,
    });

    expect(container.outerHTML).toMatchInlineSnapshot(`"<div><span>hello world</span></div>"`);
    expect(mockNavigate).not.toHaveBeenCalled();

    window.shopify.environment.embedded = false;
  });

  test("can render an embedded app with an install state hint saying we're installed", async () => {
    window.shopify.environment.embedded = true;
    window.gadgetConfig = {
      shopifyInstallState: {
        redirectToOauth: false,
        isAuthenticated: true,
        missingScopes: [],
      },
    };

    const { container } = render(
      <Provider api={mockApiClient} shopifyApiKey={mockApiKey} type={AppType.Embedded}>
        <span>hello world</span>
      </Provider>
    );

    await act(async () => {
      resolveIdToken("mock-id-token");
    });

    // we are already rendering the app, before the `ShopifyFetchOrInstallShop` request has been made, because the hint tells us we're authenticated
    expect(container.outerHTML).toMatchInlineSnapshot(`"<div><span>hello world</span></div>"`);
    expect(mockNavigate).not.toHaveBeenCalled();

    // we expect a request for the fetch or install to double check that the hint is correct
    expect(mockUrqlClient.executeMutation.subjects["ShopifyFetchOrInstallShop"]).toBeTruthy();

    window.shopify.environment.embedded = false;
  });

  test("can render an embedded app with an install state hint saying we're not installed", async () => {
    window.shopify.environment.embedded = true;
    window.gadgetConfig = {
      shopifyInstallState: {
        redirectToOauth: true,
        isAuthenticated: false,
        missingScopes: [],
      },
    };

    const { container } = render(
      <Provider api={mockApiClient} shopifyApiKey={mockApiKey} type={AppType.Embedded}>
        <span>hello world</span>
      </Provider>
    );

    await act(async () => {
      resolveIdToken("mock-id-token");
    });

    // we are already rendering the app, before the `ShopifyFetchOrInstallShop` request has been made, because the hint tells us we're authenticated
    expect(container.outerHTML).toMatchInlineSnapshot(`"<div><span>hello world</span></div>"`);
    expect(mockNavigate).not.toHaveBeenCalled();

    // we expect a request for the fetch or install to double check that the hint is correct
    expect(mockUrqlClient.executeMutation.subjects["ShopifyFetchOrInstallShop"]).toBeTruthy();
  });

  test("should throw if embedded app type is in embedded context and shopify global is not defined", () => {
    // @ts-expect-error mock
    const windowSelf = jest.spyOn(window, "self", "get").mockImplementation(() => ({}));
    const documentMock = jest
      .spyOn(document, "referrer", "get")
      .mockImplementation(() => "https://admin.shopify.com/store/some-test-shop/apps/fake-app");
    // @ts-expect-error reset mock
    window.shopify = undefined;

    expect(() =>
      render(
        <Provider api={mockApiClient} shopifyApiKey={mockApiKey} type={AppType.Embedded}>
          <span>hello world</span>
        </Provider>
      )
    ).toThrow(
      "Expected app bridge to be defined in embedded context, but it was not. This is likely due to a missing script tag, see https://shopify.dev/docs/api/app-bridge-library"
    );

    // resetting the mocked values
    windowSelf.mockRestore();
    documentMock.mockRestore();
    window.shopify = {
      // @ts-expect-error mock
      environment: {
        embedded: false,
        mobile: false,
      },
    };
  });
});
