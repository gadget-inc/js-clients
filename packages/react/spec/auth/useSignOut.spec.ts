import { act, renderHook } from "@testing-library/react";
import { useSignOut } from "../../src/auth/useSignOut.js";
import { fullAuthApi } from "../apis.js";
import { MockClientWrapper, mockUrqlClient } from "../testWrappers.js";
import { expectMockSignedInUser, expectMockSignedOutUser } from "../utils.js";

describe("useSignOut", () => {
  describe.each([true, false])("using custom navigate: %s", (customNavigate) => {
    const mockNavigate = jest.fn();
    const { location } = window;

    beforeAll(() => {
      // @ts-expect-error mock
      delete window.location;

      if (!customNavigate) {
        // @ts-expect-error mock
        window.location = { assign: mockNavigate, origin: "https://test-app.gadget.app", pathname: "/" };
      } else {
        // @ts-expect-error mock
        window.location = { origin: "https://test-app.gadget.app" };
      }
    });

    afterEach(() => {
      mockNavigate.mockClear();
    });

    afterAll(() => {
      if (!customNavigate) {
        window.location = location;
      }
    });

    test("it redirects to the provider signInPath when the user is signed in", async () => {
      const { result, rerender } = renderHook(() => useSignOut(), {
        wrapper: MockClientWrapper(fullAuthApi, undefined, {
          navigate: customNavigate ? mockNavigate : undefined,
        }),
      });

      expectMockSignedInUser();
      rerender();

      let mutationPromise: any;
      await act(async () => {
        mutationPromise = result.current();
      });

      expect(mockUrqlClient.executeMutation).toBeCalledTimes(1);

      mockUrqlClient.executeMutation.pushResponse("signOutUser", {
        data: {
          success: true,
          signOutUser: {
            success: true,
            user: {
              id: "123",
            },
          },
        },
        stale: false,
        hasNext: false,
      });

      await act(async () => {
        await mutationPromise;
      });

      expect(mockNavigate).toHaveBeenCalledTimes(1);
      expect(mockNavigate).toHaveBeenCalledWith("/");
    });

    test("it redirects to the optional redirectToPath when the user is signed in", async () => {
      const { result, rerender } = renderHook(() => useSignOut({ redirectToPath: "/somewhere-special" }), {
        wrapper: MockClientWrapper(fullAuthApi, undefined, {
          navigate: customNavigate ? mockNavigate : undefined,
        }),
      });

      expectMockSignedInUser();
      rerender();

      let mutationPromise: any;
      await act(async () => {
        mutationPromise = result.current();
      });

      expect(mockUrqlClient.executeMutation).toBeCalledTimes(1);
      mockUrqlClient.executeMutation.pushResponse("signOutUser", {
        data: {
          success: true,
          signOutUser: {
            success: true,
            user: {
              id: "123",
            },
          },
        },
        stale: false,
        hasNext: false,
      });

      await act(async () => {
        await mutationPromise;
      });

      expect(mockNavigate).toHaveBeenCalledTimes(1);
      expect(mockNavigate).toHaveBeenCalledWith("/somewhere-special");
    });

    test("it does not redirect when the redirectOnSuccess option is false", async () => {
      const { result, rerender } = renderHook(() => useSignOut({ redirectOnSuccess: false }), {
        wrapper: MockClientWrapper(fullAuthApi, undefined, {
          navigate: customNavigate ? mockNavigate : undefined,
        }),
      });

      expectMockSignedInUser();
      rerender();

      let mutationPromise: any;
      await act(async () => {
        mutationPromise = result.current();
      });

      expect(mockUrqlClient.executeMutation).toBeCalledTimes(1);

      mockUrqlClient.executeMutation.pushResponse("signOutUser", {
        data: {
          success: true,
          signOutUser: {
            success: true,
            user: {
              id: "123",
            },
          },
        },
        stale: false,
        hasNext: false,
      });

      await act(async () => {
        await mutationPromise;
      });

      expect(mockNavigate).toHaveBeenCalledTimes(0);
    });

    test("it does not redirect and throws when an error occurs during signOut", async () => {
      let caughtError = null;
      try {
        const { result, rerender } = renderHook(() => useSignOut(), {
          wrapper: MockClientWrapper(fullAuthApi, undefined, {
            navigate: customNavigate ? mockNavigate : undefined,
          }),
        });

        expectMockSignedInUser();
        rerender();

        let mutationPromise: any;
        await act(async () => {
          mutationPromise = result.current();
        });

        expect(mockUrqlClient.executeMutation).toBeCalledTimes(1);
        mockUrqlClient.executeMutation.pushResponse("signOutUser", {
          data: {
            success: false,
            signOutUser: {
              success: false,
              errors: [
                {
                  message: "User could not be signed out.",
                  code: "GGT_INTERNAL_ERROR",
                },
              ],
            },
          },
          stale: false,
          hasNext: false,
        });

        await act(async () => {
          await mutationPromise;
        });
      } catch (e) {
        caughtError = e;
      }

      expect(mockNavigate).toHaveBeenCalledTimes(0);
      expect(caughtError).toMatchInlineSnapshot(`[ErrorWrapper: [GraphQL] GGT_INTERNAL_ERROR: User could not be signed out.]`);
    });

    test("it throws an error when there is no signed in user", async () => {
      let caughtError = null;
      try {
        const { result, rerender } = renderHook(() => useSignOut(), {
          wrapper: MockClientWrapper(fullAuthApi, undefined, {
            navigate: customNavigate ? mockNavigate : undefined,
          }),
        });
        expectMockSignedOutUser();
        rerender();

        await result.current();
      } catch (e) {
        caughtError = e;
      }

      expect(caughtError).toMatchInlineSnapshot(`[Error: attempting to sign out when the user is not signed in]`);
    });
  });
});
