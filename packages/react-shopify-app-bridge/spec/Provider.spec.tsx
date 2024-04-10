import type { AnyClient } from "@gadgetinc/api-client-core";
import { GadgetConnection } from "@gadgetinc/api-client-core";
import * as AppBridgeReact from "@shopify/app-bridge-react";
import "@testing-library/jest-dom";
import { act, render } from "@testing-library/react";
import React from "react";
import { mockUrqlClient } from "../../api-client-core/spec/mockUrqlClient.js";
import { AppType, Provider } from "../src/Provider.js";

describe("GadgetProvider", () => {
  let mockApiClient: AnyClient;
  const { location } = window;
  const mockNavigate = jest.fn();
  const mockOpen = jest.fn();
  const mockApiKey = "some-api-key";
  let useAppBridgeMock: jest.SpyInstance;

  describe.each([true, false])("as install request: %s", (isInstallRequest) => {
    beforeAll(() => {
      // @ts-expect-error mock
      delete window.location;

      // @ts-expect-error mock
      window.location = {
        assign: mockNavigate,
        origin: "https://test-app.gadget.app",
        pathname: "/",
        search: isInstallRequest ? "?shop=example.myshopify.com&hmac=abcdefg&host=abcdfg" : "",
      };

      window.open = mockOpen;

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
        idToken: () => Promise.resolve("mock-id-token"),
      };

      useAppBridgeMock = jest.spyOn(AppBridgeReact, "useAppBridge").mockImplementation(() => window.shopify);
    });

    beforeEach(() => {
      mockApiClient = {
        connection: new GadgetConnection({
          endpoint: "https://test-app.gadget.app/endpoint",
        }),
      } as any;

      jest.spyOn(mockApiClient.connection, "currentClient", "get").mockReturnValue(mockUrqlClient);
    });

    afterEach(() => {
      mockNavigate.mockClear();
      useAppBridgeMock.mockClear();
    });

    afterAll(() => {
      window.location = location;
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

      act(() => {
        mockUrqlClient.executeQuery.pushResponse("GetSessionForShopifyApp", {
          data: {
            currentSession: {
              shop: null,
            },
          },
          stale: false,
          hasNext: false,
        });
      });

      if (isInstallRequest) {
        await act(async () => {
          await mockUrqlClient.executeMutation.waitForSubject("InstallByTokenExchange");

          mockUrqlClient.executeMutation.pushResponse("InstallByTokenExchange", {
            data: {
              shopifyInstallByTokenExchange: {
                success: false,
              },
            },
            stale: false,
            hasNext: false,
          });
        });
      }

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

    test("can render a standalone app type in mobile context", () => {
      window.shopify.environment.mobile = true;

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

      window.shopify.environment.mobile = false;
    });

    test("can render an embedded app type in embedded context", async () => {
      // @ts-expect-error mock
      jest.spyOn(window, "self", "get").mockImplementation(() => ({}));

      const { container } = render(
        <Provider api={mockApiClient} shopifyApiKey={mockApiKey} type={AppType.Embedded}>
          <span>hello world</span>
        </Provider>
      );

      act(() => {
        mockUrqlClient.executeQuery.pushResponse("GetSessionForShopifyApp", {
          data: {
            currentSession: {
              shop: null,
            },
          },
          stale: false,
          hasNext: false,
        });
      });

      if (isInstallRequest) {
        await act(async () => {
          await mockUrqlClient.executeMutation.waitForSubject("InstallByTokenExchange");

          mockUrqlClient.executeMutation.pushResponse("InstallByTokenExchange", {
            data: {
              shopifyInstallByTokenExchange: {
                success: false,
              },
            },
            stale: false,
            hasNext: false,
          });
        });
      }

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

    test("can render an embedded app type that's already authenticated", () => {
      window.shopify.environment.embedded = true;

      const { container } = render(
        <Provider api={mockApiClient} shopifyApiKey={mockApiKey} type={AppType.Embedded}>
          <span>hello world</span>
        </Provider>
      );

      mockUrqlClient.executeQuery.pushResponse("GetSessionForShopifyApp", {
        data: {
          currentSession: {
            shop: {
              id: "123",
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

    if (isInstallRequest) {
      test("can render an embedded app type that's already authenticated but needs reauthentication via token exchange", async () => {
        window.shopify.environment.embedded = true;

        render(
          <Provider api={mockApiClient} shopifyApiKey={mockApiKey} type={AppType.Embedded}>
            <span>hello world</span>
          </Provider>
        );

        act(() => {
          mockUrqlClient.executeQuery.pushResponse("GetSessionForShopifyApp", {
            data: {
              currentSession: {
                shop: {
                  id: "123",
                },
              },
              shopifyConnection: {
                requiresReauthentication: true,
              },
            },
            stale: false,
            hasNext: false,
          });
        });

        await act(async () => {
          await mockUrqlClient.executeMutation.waitForSubject("InstallByTokenExchange");

          mockUrqlClient.executeMutation.pushResponse("InstallByTokenExchange", {
            data: {
              shopifyInstallByTokenExchange: {
                success: true,
              },
            },
            stale: false,
            hasNext: false,
          });
        });

        expect(mockOpen).not.toHaveBeenCalled();
        expect(mockNavigate).not.toHaveBeenCalled();

        window.shopify.environment.embedded = false;
      });

      test("can render an embedded app type that's already authenticated but needs reauthentication via redirect", async () => {
        window.shopify.environment.embedded = true;

        render(
          <Provider api={mockApiClient} shopifyApiKey={mockApiKey} type={AppType.Embedded}>
            <span>hello world</span>
          </Provider>
        );

        act(() => {
          mockUrqlClient.executeQuery.pushResponse("GetSessionForShopifyApp", {
            data: {
              currentSession: {
                shop: {
                  id: "123",
                },
              },
              shopifyConnection: {
                requiresReauthentication: true,
              },
            },
            stale: false,
            hasNext: false,
          });
        });

        await act(async () => {
          await mockUrqlClient.executeMutation.waitForSubject("InstallByTokenExchange");

          mockUrqlClient.executeMutation.pushResponse("InstallByTokenExchange", {
            data: {
              shopifyInstallByTokenExchange: {
                success: false,
              },
            },
            stale: false,
            hasNext: false,
          });
        });

        expect(mockOpen).toHaveBeenCalledWith(
          "https://test-app.gadget.app/api/connections/auth/shopify?shop=example.myshopify.com&hmac=abcdefg&host=abcdfg",
          "_top"
        );
        expect(mockNavigate).not.toHaveBeenCalled();

        window.shopify.environment.embedded = false;
      });

      test("doesn't redirect an shopify managed installation for an embedded app type that's already authenticated but needs reauthentication", async () => {
        window.shopify.environment.embedded = true;

        render(
          <Provider api={mockApiClient} shopifyApiKey={mockApiKey} type={AppType.Embedded}>
            <span>hello world</span>
          </Provider>
        );

        act(() => {
          mockUrqlClient.executeQuery.pushResponse("GetSessionForShopifyApp", {
            data: {
              currentSession: {
                shop: {
                  id: "123",
                },
              },
              shopifyConnection: {
                requiresReauthentication: true,
                connectedApps: [
                  {
                    apiKey: mockApiKey,
                    shopifyManagedInstallation: true,
                  },
                ],
              },
            },
            stale: false,
            hasNext: false,
          });
        });

        await act(async () => {
          await mockUrqlClient.executeMutation.waitForSubject("InstallByTokenExchange");

          mockUrqlClient.executeMutation.pushResponse("InstallByTokenExchange", {
            data: {
              shopifyInstallByTokenExchange: {
                success: false,
              },
            },
            stale: false,
            hasNext: false,
          });
        });

        expect(mockOpen).not.toHaveBeenCalled();
        expect(mockNavigate).not.toHaveBeenCalled();

        window.shopify.environment.embedded = false;
      });
    }

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
});
