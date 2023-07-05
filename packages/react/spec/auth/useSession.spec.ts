import { renderHook } from "@testing-library/react";
import { superAuthApi } from "../../spec/apis";
import { expectMockSignedInUser, expectMockSignedOutUser, mockInternalServerError, mockNetworkError } from "../../spec/utils";
import { useSession } from "../../src/auth/useSession";
import { TestWrapper } from "../testWrapper";

describe("useSession", () => {
  test("it returns the current session when the user is logged in", async () => {
    const { result, rerender } = renderHook(() => useSession(), { wrapper: TestWrapper(superAuthApi) });

    expectMockSignedInUser();
    rerender();

    expect(result.current.id).toEqual("123");
    expect(result.current.userId).toEqual("321");
    expect(result.current.user!.id).toEqual("321");
    expect(result.current.user!.firstName).toEqual("Jane");
    expect(result.current.user!.lastName).toEqual("Doe");
  });

  test("it returns the current session when the user is logged out", async () => {
    const { result, rerender } = renderHook(() => useSession(), { wrapper: TestWrapper(superAuthApi) });

    expectMockSignedOutUser();
    rerender();

    expect(result.current).toBeDefined();
    expect(result.current.id).toEqual("123");
    expect(result.current.userId).toBe(null);
    expect(result.current.user).toBe(null);
  });

  test("it throws when the server responds with an error", async () => {
    expect(() => {
      const { rerender } = renderHook(() => useSession(), { wrapper: TestWrapper(superAuthApi) });

      mockInternalServerError();

      rerender();
    }).toThrowErrorMatchingInlineSnapshot(`
      "[GraphQL] GGT_INTERNAL_SERVER_ERROR
      [GraphQL] An error occurred"
    `);
  });

  test("it throws when request fails to complete", async () => {
    expect(() => {
      const { rerender } = renderHook(() => useSession(), { wrapper: TestWrapper(superAuthApi) });

      mockNetworkError();

      rerender();
    }).toThrowErrorMatchingInlineSnapshot(`"[Network] Network error"`);
  });
});
