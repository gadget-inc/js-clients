import { renderHook } from "@testing-library/react";
import { TestWrapper, mockUrqlClient } from "../testWrapper";
import { useUser } from "../../src/auth/useUser";

describe("useIsSignedIn", () => {
  test("returns true if the user is signed in", async () => {
    const { result } = renderHook(() => useUser(), { wrapper: TestWrapper });
    expect(result.current).toBe(true);
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
  });

  test("returns false if the user is signed out", async () => {
    const { result } = renderHook(() => useUser(), { wrapper: TestWrapper });
    expect(result.current).toBe(true);
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
  });
});
