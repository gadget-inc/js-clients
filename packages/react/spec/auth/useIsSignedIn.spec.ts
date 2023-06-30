import { renderHook } from "@testing-library/react";
import { TestWrapperWithAuth, mockUrqlClient } from "../testWrapper";
import { useIsSignedIn } from "../../src/auth/useIsSignedIn";

describe("useIsSignedIn", () => {
  test("returns true if the user is signed in", async () => {
    const { result, rerender } = renderHook(() => useIsSignedIn(), { wrapper: TestWrapperWithAuth });

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);
    mockUrqlClient.executeQuery.pushResponse("currentSession", {
      data: {
        currentSession: {
          id: "123",
          userId: "321",
          user: {
            id: "321",
            firstName: "Jane",
            lastName: "Doe",
          }
        },
      },
      stale: false,
      hasNext: false,
    });

    rerender();
    expect(result.current).toBe(true);
  });

  test("returns false if the user is signed out", async () => {
    const { result, rerender } = renderHook(() => useIsSignedIn(), { wrapper: TestWrapperWithAuth });

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);
    mockUrqlClient.executeQuery.pushResponse("currentSession", {
      data: {
        currentSession: {
          id: "123",
          userId: null,
          user: null
        },
      },
      stale: false,
      hasNext: false,
    });

    rerender();
    expect(result.current).toBe(false);
  });
});
