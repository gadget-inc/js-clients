import { renderHook } from "@testing-library/react";
import { noUserModelApi, superAuthApi } from "../../spec/apis.js";
import { expectMockSignedInUser, expectMockSignedOutUser, mockInternalServerError, mockNetworkError } from "../../spec/utils.js";
import { useUser } from "../../src/auth/useUser.js";
import { MockClientWrapper, mockUrqlClient } from "../testWrappers.js";

describe("useUser", () => {
  test("it returns the current user when the user is logged in with no options passed", async () => {
    const { result, rerender } = renderHook(() => useUser(), { wrapper: MockClientWrapper(superAuthApi) });

    expectMockSignedInUser();

    rerender();
    expect(result.current.id).toEqual("321");
    expect(result.current.firstName).toEqual("Jane");
    expect(result.current.lastName).toEqual("Doe");
  });

  test("it returns the current user when the user is logged in with an api client passed", async () => {
    const { result, rerender } = renderHook(() => useUser(superAuthApi), { wrapper: MockClientWrapper(superAuthApi) });

    expectMockSignedInUser();

    rerender();
    expect(result.current.id).toEqual("321");
    expect(result.current.firstName).toEqual("Jane");
    expect(result.current.lastName).toEqual("Doe");
  });

  test("it returns the current user when the user is logged in with an api client and options passed", async () => {
    const { result, rerender } = renderHook(() => useUser(superAuthApi, {select: {firstName: true}}), { wrapper: MockClientWrapper(superAuthApi) });

    expectMockSignedInUser();
    

    rerender();
  
    expect(result.current.firstName).toEqual("Jane");
    expect(result.current).toMatchInlineSnapshot("{}") //we get the full user object back
  });

  test("it returns null when the user is logged out", async () => {
    const { result, rerender } = renderHook(() => useUser(), { wrapper: MockClientWrapper(superAuthApi) });

    expectMockSignedOutUser();

    rerender();
    expect(result.current).toBe(null);
  });

  test("it throws when the server responds with an error", async () => {
    expect(() => {
      const { rerender } = renderHook(() => useUser(), { wrapper: MockClientWrapper(superAuthApi) });

      mockInternalServerError();

      rerender();
    }).toThrowErrorMatchingInlineSnapshot(`
      "[GraphQL] GGT_INTERNAL_SERVER_ERROR
      [GraphQL] An error occurred"
    `);
  });

  test("it throws when request fails to complete", async () => {
    expect(() => {
      const { rerender } = renderHook(() => useUser(), { wrapper: MockClientWrapper(superAuthApi) });

      mockNetworkError();

      rerender();
    }).toThrowErrorMatchingInlineSnapshot(`"[Network] Network error"`);
  });

  test("it throws when the api client does not have a User model", async () => {
    expect(() => {
      const { rerender } = renderHook(() => useUser(), { wrapper: MockClientWrapper(noUserModelApi) });

      mockNetworkError();

      rerender();
    }).toThrowErrorMatchingInlineSnapshot(`"api client does not have a User model"`);
  });
});
