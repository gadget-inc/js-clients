import { renderHook } from "@testing-library/react";
import { TestWrapperWithAuth, mockUrqlClient } from "../testWrapper";
import { useSession } from "../../src/auth/useSession";

describe("useSession", () => {
  test("it returns the current session when the user is logged in", async () => {
    const { result, rerender } = renderHook(() => useSession(), { wrapper: TestWrapperWithAuth });

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

    expect(result.current!.id).toEqual("123");
    expect(result.current!.userId).toEqual("321");
    expect(result.current!.user!.id).toEqual("321");
    expect(result.current!.user!.firstName).toEqual("Jane");
    expect(result.current!.user!.lastName).toEqual("Doe");
  });

  test("it returns the current session when the user is logged out", async () => {
    const { result } = renderHook(() => useSession(), { wrapper: TestWrapperWithAuth });

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

    expect(result.current).toBeDefined();
    expect(result.current!.id).toEqual("123");
    expect(result.current!.userId).toBe(null);
    expect(result.current!.user).toBe(null);
  });
});
