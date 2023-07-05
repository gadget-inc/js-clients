import { renderHook } from "@testing-library/react";
import { superAuthApi } from "../../spec/apis";
import { expectMockSignedInUser, expectMockSignedOutUser } from "../../spec/utils";
import { useUser } from "../../src/auth/useUser";
import { TestWrapper } from "../testWrapper";

describe("useUser", () => {
  test("it returns the current user when the user is logged in", async () => {
    const { result, rerender } = renderHook(() => useUser(), { wrapper: TestWrapper(superAuthApi) });

    expectMockSignedInUser();

    rerender();
    expect(result.current!.id).toEqual("321");
    expect(result.current!.firstName).toEqual("Jane");
    expect(result.current!.lastName).toEqual("Doe");
  });

  test("it returns null when the user is logged out", async () => {
    const { result, rerender } = renderHook(() => useUser(), { wrapper: TestWrapper(superAuthApi) });

    expectMockSignedOutUser();

    rerender();
    expect(result.current).toBe(null);
  });

  test("it does something when the user fails to fetch", async () => {
    const { result, rerender } = renderHook(() => useUser(), { wrapper: TestWrapper(superAuthApi) });

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);
    mockUrqlClient.executeQuery.pushResponse("currentSession", {
      data: {
        currentSession: {
          id: "123",
          userId: null,
          user: null,
        },
      },
      stale: false,
      hasNext: false,
    });

    rerender();
    expect(result.current).toBe(null);
  })
});
