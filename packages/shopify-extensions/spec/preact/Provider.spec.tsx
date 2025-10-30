/**
 * @jest-environment ./spec/preact/jsdom-environment.ts
 */
import { RelatedProductsExampleClient } from "@gadget-client/related-products-example";
import { jest } from "@jest/globals";
import "@testing-library/jest-dom";
import { render, waitFor } from "@testing-library/preact";
import { h } from "preact";
import { useEffect } from "preact/hooks";
import { Provider } from "../../src/preact/Provider.js";
import { useGadget, type SessionToken } from "../../src/preact/index.js";

describe("Provider", () => {
  let api: RelatedProductsExampleClient;
  let sessionToken: SessionToken;
  let mockFetch: jest.Mock<typeof globalThis.fetch>;

  beforeEach(() => {
    mockFetch = jest.fn();
    api = new RelatedProductsExampleClient({
      fetchImplementation: mockFetch,
    });

    sessionToken = {
      get: () => Promise.resolve("test-session-token"),
    };
  });

  const ChildComponent = () => {
    const { api, ready } = useGadget();

    useEffect(() => {
      if (!ready) return;
      void api.connection.fetch("/foo");
    }, [api, ready]);

    return h("span", null, "Hello world");
  };

  describe("Provider", () => {
    test("should call registerShopifySessionTokenAuthentication on mount", async () => {
      expect(api.connection.authenticationMode).not.toEqual("custom");

      render(h(Provider, { api, sessionToken, children: h(ChildComponent, null) }));

      expect(api.connection.authenticationMode).toEqual("custom");

      await waitFor(() => {
        expect(mockFetch).toHaveBeenCalledWith(
          expect.stringContaining("/foo"),
          expect.objectContaining({
            headers: expect.objectContaining({
              authorization: "ShopifySessionToken test-session-token",
            }),
          })
        );
      });
    });
  });
});
