import { renderHook } from "@testing-library/react";
import { TestWrapper, mockUrqlClient } from "../testWrapper";
import { useUser } from "../../src/auth/useUser";

describe("useUser", () => {
  test("it can find the current user", async () => {
    const { result } = renderHook(() => useUser(), { wrapper: TestWrapper });
    expect(result.current).toBeDefined();
    expect(result.current!.id).toEqual("321");
    expect(result.current!.firstName).toEqual("Jane");
    expect(result.current!.lastName).toEqual("Doe");

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

  test("it returns null when the user is logged out", async () => {
    const { result } = renderHook(() => useUser(), { wrapper: TestWrapper });
    expect(result.current).toBe(null);
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
