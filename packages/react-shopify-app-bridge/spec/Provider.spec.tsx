import type { AnyClient } from "@gadgetinc/api-client-core";
import { GadgetConnection } from "@gadgetinc/api-client-core";
import { AppBridgeContext } from "@shopify/app-bridge-react/context.js";
import { Redirect } from "@shopify/app-bridge/actions/index.js";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import { mockUrqlClient } from "../../api-client-core/spec/mockUrqlClient.js";
import { AppType, Provider } from "../src/Provider.js";

describe("GadgetProvider", () => {
  let mockApiClient: AnyClient;
  const { location } = window;
  const mockNavigate = jest.fn();
  const mockApiKey = "some-api-key";

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

      const originalUseContext = React.useContext;

      jest.spyOn(React, "useContext").mockImplementation((context) => {
        if (context === AppBridgeContext) {
          return {};
        } else {
          return originalUseContext(context);
        }
      });
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

    test("can render an embedded app type", () => {
      const { container } = render(
        <Provider api={mockApiClient} shopifyApiKey={mockApiKey} type={AppType.Embedded}>
          <span>hello world</span>
        </Provider>
      );

      mockUrqlClient.executeQuery.pushResponse("GetSessionForShopifyApp", {
        data: {
          currentSession: {
            shop: null,
          },
        },
        stale: false,
        hasNext: false,
      });

      if (isInstallRequest) {
        expect(mockNavigate).toHaveBeenCalledWith(
          "https://test-app.gadget.app/api/connections/auth/shopify?shop=example.myshopify.com&hmac=abcdefg&host=abcdfg"
        );
      } else {
        expect(mockNavigate).not.toHaveBeenCalled();
        expect(container.outerHTML).toMatchInlineSnapshot(`"<div><span>hello world</span></div>"`);
      }
    });

    test("can render a standalone app type in embedded context", () => {
      // @ts-expect-error mock
      jest.spyOn(window, "self", "get").mockImplementation(() => ({}));

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
      window.MobileWebView = {
        postMessage: jest.fn(),
      };

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

      delete window.MobileWebView;
    });

    test("can render an embedded app type in embedded context", () => {
      const mockDispatch = jest.fn();
      // @ts-expect-error mock
      jest.spyOn(Redirect, "create").mockImplementation((_appBridge) => {
        return {
          dispatch: mockDispatch,
        };
      });
      // @ts-expect-error mock
      jest.spyOn(window, "self", "get").mockImplementation(() => ({}));

      const { container } = render(
        <Provider api={mockApiClient} shopifyApiKey={mockApiKey} type={AppType.Embedded}>
          <span>hello world</span>
        </Provider>
      );

      mockUrqlClient.executeQuery.pushResponse("GetSessionForShopifyApp", {
        data: {
          currentSession: {
            shop: null,
          },
        },
        stale: false,
        hasNext: false,
      });

      if (isInstallRequest) {
        expect(mockDispatch).toHaveBeenCalledWith(
          "APP::NAVIGATION::REDIRECT::REMOTE",
          "https://test-app.gadget.app/api/connections/auth/shopify?shop=example.myshopify.com&hmac=abcdefg&host=abcdfg"
        );
      } else {
        expect(mockDispatch).not.toHaveBeenCalled();
        expect(container.outerHTML).toMatchInlineSnapshot(`"<div><span>hello world</span></div>"`);
      }

      expect(mockNavigate).not.toHaveBeenCalled();
    });

    test("can render an embedded app type that's already authenticated", () => {
      const mockDispatch = jest.fn();
      // @ts-expect-error mock
      jest.spyOn(Redirect, "create").mockImplementation((_appBridge) => {
        return {
          dispatch: mockDispatch,
        };
      });
      // @ts-expect-error mock
      jest.spyOn(window, "self", "get").mockImplementation(() => ({}));

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

      expect(mockDispatch).not.toHaveBeenCalled();
      expect(container.outerHTML).toMatchInlineSnapshot(`"<div><span>hello world</span></div>"`);
      expect(mockNavigate).not.toHaveBeenCalled();
    });
  });
});
