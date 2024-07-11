import { Client } from "@gadget-client/related-products-example";
import { AuthenticationMode, type AnyClient } from "@gadgetinc/api-client-core";
import { jest } from "@jest/globals";
import "@testing-library/jest-dom";
import { render, waitFor } from "@testing-library/react";
import React, { useEffect } from "react";
import { Provider } from "../../src/react/Provider.js";
import { useGadget, type SessionToken } from "../../src/react/index.js";

describe("Provider", () => {
  let api: AnyClient;
  let sessionToken: SessionToken;
  let mockFetch: jest.Mock<typeof globalThis.fetch>;

  beforeEach(() => {
    mockFetch = jest.fn();
    api = new Client({
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

    return <span>Hello world</span>;
  };

  describe("Provider", () => {
    test("should call registerShopifySessionTokenAuthentication on mount", async () => {
      expect(api.connection.authenticationMode).not.toEqual(AuthenticationMode.Custom);

      render(
        <Provider api={api} sessionToken={sessionToken}>
          <ChildComponent />
        </Provider>
      );

      expect(api.connection.authenticationMode).toEqual(AuthenticationMode.Custom);

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
