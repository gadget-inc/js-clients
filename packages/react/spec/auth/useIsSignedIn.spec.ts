import { renderHook } from "@testing-library/react";
import { superAuthApi } from "../../spec/apis";
import { expectMockSignedInUser, expectMockSignedOutUser } from "../../spec/utils";
import { useIsSignedIn } from "../../src/auth/useIsSignedIn";
import { TestWrapper } from "../testWrapper";

describe("useIsSignedIn", () => {
  test("returns true if the user is signed in", async () => {
    const { result, rerender } = renderHook(() => useIsSignedIn(), { wrapper: TestWrapper(superAuthApi) });

    expectMockSignedInUser();

    rerender();
    expect(result.current).toBe(true);
  });

  test("returns false if the user is signed out", async () => {
    const { result, rerender } = renderHook(() => useIsSignedIn(), { wrapper: TestWrapper(superAuthApi) });

    expectMockSignedOutUser();

    rerender();
    expect(result.current).toBe(false);
  });
});
