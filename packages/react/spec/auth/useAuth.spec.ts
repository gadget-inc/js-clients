import { renderHook } from "@testing-library/react";
import { useAuth } from "../../src/auth/useAuth";
import { superAuthApi } from "../apis";
import { TestWrapper } from "../testWrapper";
import { expectMockSignedInUser, expectMockSignedOutUser, mockInternalServerError, mockNetworkError } from "../utils";

describe("useAuth", () => {
  test("returns the correct auth state if the user is signed in", async () => {
    const { result, rerender } = renderHook(() => useAuth(), { wrapper: TestWrapper(superAuthApi) });

    expectMockSignedInUser();

    rerender();
    expect(result.current.isSignedIn).toBe(true);
    expect(result.current.session.id).toBe("123");
    expect(result.current.user!.id).toBe("321");
  });

  test("returns the correct auth state if the user is signed out", async () => {
    const { result, rerender } = renderHook(() => useAuth(), { wrapper: TestWrapper(superAuthApi) });

    expectMockSignedOutUser();

    rerender();
    expect(result.current.isSignedIn).toBe(false);
    expect(result.current.session.id).toBe("123");
    expect(result.current.user).toBe(null);
  });

  test("it throws when the server responds with an error", async () => {
    expect(() => {
      const { rerender } = renderHook(() => useAuth(), { wrapper: TestWrapper(superAuthApi) });

      mockInternalServerError();

      rerender();
    }).toThrowErrorMatchingInlineSnapshot(`
      "[GraphQL] GGT_INTERNAL_SERVER_ERROR
      [GraphQL] An error occurred"
    `);
  });

  test("it throws when request fails to complete", async () => {
    expect(() => {
      const { rerender } = renderHook(() => useAuth(), { wrapper: TestWrapper(superAuthApi) });

      mockNetworkError();

      rerender();
    }).toThrowErrorMatchingInlineSnapshot(`"[Network] Network error"`);
  });
});
