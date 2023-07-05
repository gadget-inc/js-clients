import { renderHook } from "@testing-library/react";
import { superAuthApi } from "../../spec/apis";
import { expectMockSignedInUser, expectMockSignedOutUser, mockInternalServerError, mockNetworkError } from "../../spec/utils";
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

  test("it throws when the server responds with an error", async () => {
    expect(() => {
      const { rerender } = renderHook(() => useIsSignedIn(), { wrapper: TestWrapper(superAuthApi) });

      mockInternalServerError();

      rerender();
    }).toThrowErrorMatchingInlineSnapshot(`
      "[GraphQL] GGT_INTERNAL_SERVER_ERROR
      [GraphQL] An error occurred"
    `);
  });

  test("it throws when request fails to complete", async () => {
    expect(() => {
      const { rerender } = renderHook(() => useIsSignedIn(), { wrapper: TestWrapper(superAuthApi) });

      mockNetworkError();

      rerender();
    }).toThrowErrorMatchingInlineSnapshot(`"[Network] Network error"`);
  });
});
