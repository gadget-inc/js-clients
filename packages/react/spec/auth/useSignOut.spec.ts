import { act, renderHook } from "@testing-library/react";
import { superAuthApi } from "../../spec/apis";
import { TestWrapper, mockUrqlClient } from "../../spec/testWrapper";
import { expectMockSignedInUser, expectMockSignedOutUser } from "../../spec/utils";
import { useSignOut } from "../../src/auth/useSignOut";

describe("useSignOut", () => {
  const { location } = window;
  const mockAssign = jest.fn();

  beforeAll(() => {
    // @ts-expect-error mock
    delete window.location;
    // @ts-expect-error mock
    window.location = { assign: mockAssign, origin: "https://test-app.gadget.app", pathname: "/" };
  });

  afterEach(() => {
    mockAssign.mockClear();
  });

  afterAll(() => {
    window.location = location;
  });

  test("it redirects to the provider signInPath when the user is signed in", async () => {
    const { result, rerender } = renderHook(() => useSignOut(), { wrapper: TestWrapper(superAuthApi) });

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

    expect(mockAssign).toHaveBeenCalledTimes(1);
    expect(mockAssign).toHaveBeenCalledWith("https://test-app.gadget.app/");
  });

  test("it redirects to the optional redirectToPath when the user is signed in", async () => {
    const { result, rerender } = renderHook(() => useSignOut({ redirectToPath: "/somewhere-special" }), {
      wrapper: TestWrapper(superAuthApi),
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

    expect(mockAssign).toHaveBeenCalledTimes(1);
    expect(mockAssign).toHaveBeenCalledWith("https://test-app.gadget.app/somewhere-special");
  });

  test("it does not redirect when the redirectOnSuccess option is false", async () => {
    const { result, rerender } = renderHook(() => useSignOut({ redirectOnSuccess: false }), { wrapper: TestWrapper(superAuthApi) });

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

    expect(mockAssign).toHaveBeenCalledTimes(0);
  });

  test("it does not redirect and throws when an error occurs during signOut", async () => {
    let caughtError = null;
    try {
      const { result, rerender } = renderHook(() => useSignOut(), { wrapper: TestWrapper(superAuthApi) });

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

    expect(mockAssign).toHaveBeenCalledTimes(0);
    expect(caughtError).toMatchInlineSnapshot(`[ErrorWrapper: [GraphQL] GGT_INTERNAL_ERROR: User could not be signed out.]`);
  });

  test("it throws an error when there is no signed in user", async () => {
    let caughtError = null;
    try {
      const { result, rerender } = renderHook(() => useSignOut(), { wrapper: TestWrapper(superAuthApi) });
      expectMockSignedOutUser();
      rerender();

      await result.current();
    } catch (e) {
      caughtError = e;
    }

    expect(caughtError).toMatchInlineSnapshot(`[Error: attempting to sign out when the user is not signed in]`);
  });
});
