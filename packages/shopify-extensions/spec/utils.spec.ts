import { Client } from "@gadget-client/related-products-example";
import { AuthenticationMode, type AnyClient } from "@gadgetinc/api-client-core";
import { registerShopifySessionTokenAuthentication } from "../src/index.js";

describe("utils", () => {
  let api: AnyClient;
  let mockFetch: jest.Mock;

  beforeEach(() => {
    mockFetch = jest.fn();

    api = new Client({
      fetchImplementation: mockFetch,
    });
  });

  describe("registerShopifySessionTokenAuthentication", () => {
    test("should set the authentication mode to use ShopifySessionToken", async () => {
      expect(api.connection.authenticationMode).not.toEqual(AuthenticationMode.Custom);

      registerShopifySessionTokenAuthentication(api, () => Promise.resolve("session-token"));

      expect(api.connection.authenticationMode).toEqual(AuthenticationMode.Custom);

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
