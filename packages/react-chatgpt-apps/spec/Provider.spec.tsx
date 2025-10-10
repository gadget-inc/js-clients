import { Client } from "@gadget-client/related-products-example";
import { AuthenticationMode, type AnyClient } from "@gadgetinc/api-client-core";
import { jest } from "@jest/globals";
import "@testing-library/jest-dom";
import { render, waitFor } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { Provider, getToken } from "../src/Provider.js";

describe("ChatGPT Apps Provider", () => {
  let api: AnyClient;
  let mockFetch: jest.Mock<typeof globalThis.fetch>;
  const mockCallTool = jest.fn<() => Promise<{ structuredContent: { token: string } | { token: null; error: string } }>>();

  beforeAll(() => {
    (window as any).openai = {
      callTool: mockCallTool,
    };
  });

  beforeEach(() => {
    mockFetch = jest.fn();
    api = new Client({
      fetchImplementation: mockFetch,
    });

    // Default mock response for token fetch
    mockCallTool.mockResolvedValue({
      structuredContent: { token: "test-auth-token-123" },
    });
  });

  afterEach(() => {
    mockCallTool.mockReset();
    mockFetch.mockReset();
  });

  afterAll(() => {
    delete (window as any).openai;
  });

  const ChildComponent = () => {
    const [ready, setReady] = useState(false);

    useEffect(() => {
      // Wait a bit for provider to set up auth
      setTimeout(() => setReady(true), 100);
    }, []);

    useEffect(() => {
      if (!ready) return;
      void api.connection.fetch("/test-endpoint");
    }, [ready]);

    return <span>Hello world</span>;
  };

  describe("getToken", () => {
    test("successfully retrieves token from OpenAI tool", async () => {
      mockCallTool.mockResolvedValueOnce({
        structuredContent: { token: "my-gadget-token" },
      });

      const token = await getToken();

      expect(mockCallTool).toHaveBeenCalledWith("__getGadgetAuthTokenV1", {});
      expect(token).toBe("my-gadget-token");
    });

    test("throws error when token fetch fails", async () => {
      mockCallTool.mockResolvedValueOnce({
        structuredContent: { token: null, error: "Authentication failed" },
      });

      await expect(getToken()).rejects.toThrow("Authentication failed");
    });
  });

  describe("Provider component", () => {
    test("renders children immediately", () => {
      const { container } = render(
        <Provider api={api}>
          <span>hello world</span>
        </Provider>
      );

      expect(container.outerHTML).toMatchInlineSnapshot(`"<div><span>hello world</span></div>"`);
    });

    test("sets custom authentication mode on mount", async () => {
      expect(api.connection.authenticationMode).not.toEqual(AuthenticationMode.Custom);

      render(
        <Provider api={api}>
          <span>test</span>
        </Provider>
      );

      await waitFor(() => {
        expect(api.connection.authenticationMode).toEqual(AuthenticationMode.Custom);
      });
    });

    test("fetches token and adds Bearer token to fetch requests", async () => {
      render(
        <Provider api={api}>
          <ChildComponent />
        </Provider>
      );

      // Wait for token to be fetched
      await waitFor(() => {
        expect(mockCallTool).toHaveBeenCalledWith("__getGadgetAuthTokenV1", {});
      });

      // Wait for fetch to be called with auth header
      await waitFor(() => {
        expect(mockFetch).toHaveBeenCalledWith(
          expect.stringContaining("/test-endpoint"),
          expect.objectContaining({
            headers: expect.objectContaining({
              authorization: "Bearer test-auth-token-123",
            }),
          })
        );
      });
    });

    test("fetch requests wait for token to resolve before proceeding (regression)", async () => {
      // Create a controlled promise for the token fetch
      let resolveToken: (value: { structuredContent: { token: string } }) => void;
      const tokenPromise = new Promise<{ structuredContent: { token: string } }>((resolve) => {
        resolveToken = resolve;
      });

      mockCallTool.mockReturnValueOnce(tokenPromise);

      render(
        <Provider api={api}>
          <ChildComponent />
        </Provider>
      );

      // Wait for setup
      await new Promise((resolve) => setTimeout(resolve, 150));

      // Fetch should not have been called yet (waiting for token)
      expect(mockFetch).not.toHaveBeenCalled();

      // Now resolve the token
      resolveToken!({ structuredContent: { token: "delayed-token" } });

      // Wait for fetch to be called with the delayed token
      await waitFor(() => {
        expect(mockFetch).toHaveBeenCalledWith(
          expect.stringContaining("/test-endpoint"),
          expect.objectContaining({
            headers: expect.objectContaining({
              authorization: "Bearer delayed-token",
            }),
          })
        );
      });
    });

    test("multiple concurrent requests use the same token", async () => {
      let resolveToken: (value: { structuredContent: { token: string } }) => void;
      const tokenPromise = new Promise<{ structuredContent: { token: string } }>((resolve) => {
        resolveToken = resolve;
      });

      mockCallTool.mockReturnValueOnce(tokenPromise);

      const MultiRequestComponent = () => {
        const [ready, setReady] = useState(false);

        useEffect(() => {
          setTimeout(() => setReady(true), 100);
        }, []);

        useEffect(() => {
          if (!ready) return;
          void api.connection.fetch("/endpoint-1");
          void api.connection.fetch("/endpoint-2");
        }, [ready]);

        return <span>test</span>;
      };

      render(
        <Provider api={api}>
          <MultiRequestComponent />
        </Provider>
      );

      // Wait for setup
      await new Promise((resolve) => setTimeout(resolve, 150));

      // Fetches should not have been called yet
      expect(mockFetch).not.toHaveBeenCalled();

      // Token should only be fetched once
      expect(mockCallTool).toHaveBeenCalledTimes(1);

      // Now resolve the token
      resolveToken!({ structuredContent: { token: "shared-token" } });

      // Wait for both fetches to complete
      await waitFor(() => {
        expect(mockFetch).toHaveBeenCalledTimes(2);
      });

      // Both should have the same token
      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining("/endpoint-1"),
        expect.objectContaining({
          headers: expect.objectContaining({
            authorization: "Bearer shared-token",
          }),
        })
      );

      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining("/endpoint-2"),
        expect.objectContaining({
          headers: expect.objectContaining({
            authorization: "Bearer shared-token",
          }),
        })
      );
    });

    test("subsequent renders don't refetch the token", async () => {
      const { rerender } = render(
        <Provider api={api}>
          <span>version 1</span>
        </Provider>
      );

      // Wait for initial token fetch
      await waitFor(() => {
        expect(mockCallTool).toHaveBeenCalledTimes(1);
      });

      // Rerender with different children
      rerender(
        <Provider api={api}>
          <span>version 2</span>
        </Provider>
      );

      // Wait a bit
      await new Promise((resolve) => setTimeout(resolve, 100));

      // Token should still only have been fetched once
      expect(mockCallTool).toHaveBeenCalledTimes(1);
    });
  });
});
