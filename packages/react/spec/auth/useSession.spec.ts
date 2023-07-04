import { renderHook } from "@testing-library/react";
import { superAuthApi } from "../../spec/apis";
import { useSession } from "../../src/auth/useSession";
import { TestWrapper } from "../testWrapper";
import { expectMockSignedInUser, expectMockSignedOutUser } from "../../spec/utils";

describe("useSession", () => {
  test("it returns the current session when the user is logged in", async () => {
    const { result, rerender } = renderHook(() => useSession(), { wrapper: TestWrapper(superAuthApi) });

    expectMockSignedInUser();

    rerender();

    expect(result.current!.id).toEqual("123");
    expect(result.current!.userId).toEqual("321");
    expect(result.current!.user!.id).toEqual("321");
    expect(result.current!.user!.firstName).toEqual("Jane");
    expect(result.current!.user!.lastName).toEqual("Doe");
  });

  test("it returns the current session when the user is logged out", async () => {
    const { result } = renderHook(() => useSession(), { wrapper: TestWrapper(superAuthApi) });

    expectMockSignedOutUser();

    expect(result.current).toBeDefined();
    expect(result.current!.id).toEqual("123");
    expect(result.current!.userId).toBe(null);
    expect(result.current!.user).toBe(null);
  });
});
