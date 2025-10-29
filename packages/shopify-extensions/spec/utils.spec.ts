import { RelatedProductsExampleClient } from "@gadget-client/related-products-example";
import { jest } from "@jest/globals";
import { registerShopifySessionTokenAuthentication } from "../src/index.js";

describe("utils", () => {
  let api: RelatedProductsExampleClient;
  let mockFetch: jest.Mock<typeof globalThis.fetch>;

  beforeEach(() => {
    mockFetch = jest.fn();

    api = new RelatedProductsExampleClient({
      fetchImplementation: mockFetch,
    });
  });

  describe("registerShopifySessionTokenAuthentication", () => {
    test("should set the authentication mode to use ShopifySessionToken", async () => {
      expect(api.connection.authenticationMode).not.toEqual("custom");

      registerShopifySessionTokenAuthentication(api, () => Promise.resolve("session-token"));

      expect(api.connection.authenticationMode).toEqual("custom");

      await api.connection.fetch("/test");

      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining("/test"),
        expect.objectContaining({
          headers: expect.objectContaining({
            authorization: "ShopifySessionToken session-token",
          }),
        })
      );
    });
  });
});
