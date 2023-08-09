import { renderHook } from "@testing-library/react";
import { noUserModelApi, superAuthApi } from "../../spec/apis.js";
import { expectMockSignedInUser, expectMockSignedOutUser, mockInternalServerError, mockNetworkError } from "../../spec/utils.js";
import { useSession } from "../../src/auth/useSession.js";
import { MockClientWrapper } from "../testWrappers.js";

describe("useSession", () => {
  test("it returns the current session when the user is logged in", async () => {
    const { result, rerender } = renderHook(() => useSession(), { wrapper: MockClientWrapper(superAuthApi) });

    expectMockSignedInUser();
    rerender();

    expect(result.current.id).toEqual("123");
    expect(result.current.userId).toEqual("321");
    expect(result.current.user!.id).toEqual("321");
    expect(result.current.user!.firstName).toEqual("Jane");
    expect(result.current.user!.lastName).toEqual("Doe");
  });

  test("it returns the current session when the user is logged out", async () => {
    const { result, rerender } = renderHook(() => useSession(), { wrapper: MockClientWrapper(superAuthApi) });

    expectMockSignedOutUser();
    rerender();

    expect(result.current).toBeDefined();
    expect(result.current.id).toEqual("123");
    expect(result.current.userId).toBe(null);
    expect(result.current.user).toBe(null);
  });

  test("it throws when the server responds with an error", async () => {
    expect(() => {
      const { rerender } = renderHook(() => useSession(), { wrapper: MockClientWrapper(superAuthApi) });

      mockInternalServerError();

      rerender();
    }).toThrowErrorMatchingInlineSnapshot(`
      "[GraphQL] GGT_INTERNAL_SERVER_ERROR
      [GraphQL] An error occurred"
    `);
  });

  test("it throws when request fails to complete", async () => {
    expect(() => {
      const { rerender } = renderHook(() => useSession(), { wrapper: MockClientWrapper(superAuthApi) });

      mockNetworkError();

      rerender();
    }).toThrowErrorMatchingInlineSnapshot(`"[Network] Network error"`);
  });

  test("it returns the current session when the client does not have a user model", () => {
    const { result, rerender } = renderHook(() => useSession(), { wrapper: MockClientWrapper(noUserModelApi) });

    expectMockSignedOutUser();
    rerender();

    expect(result.current.id).toEqual("123");
  });
});
