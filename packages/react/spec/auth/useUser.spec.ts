import { renderHook } from "@testing-library/react";
import { TestWrapperWithAuth, mockUrqlClient } from "../testWrapper";
import { useUser } from "../../src/auth/useUser";

describe("useUser", () => {
  test("it returns the current user when the user is logged in", async () => {
    const { result, rerender } = renderHook(() => useUser(), { wrapper: TestWrapperWithAuth });

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
    expect(result.current!.id).toEqual("321");
    expect(result.current!.firstName).toEqual("Jane");
    expect(result.current!.lastName).toEqual("Doe");
  });

  test("it returns null when the user is logged out", async () => {
    const { result, rerender } = renderHook(() => useUser(), { wrapper: TestWrapperWithAuth });

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
    expect(result.current).toBe(null);
  });
});
