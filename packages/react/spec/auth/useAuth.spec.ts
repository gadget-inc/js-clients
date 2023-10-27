import { renderHook } from "@testing-library/react";
import { useAuth } from "../../src/auth/useAuth.js";
import { fullAuthApi, noUserModelApi } from "../apis.js";
import { MockClientWrapper } from "../testWrappers.js";
import { expectMockSignedInUser, expectMockSignedOutUser, mockInternalServerError, mockNetworkError } from "../utils.js";

describe("useAuth", () => {
  test("returns the correct auth state as generic GadgetRecords if no api client is provided", () => {
    const { result, rerender } = renderHook(() => useAuth(), { wrapper: MockClientWrapper(fullAuthApi) });
    expectMockSignedInUser();

    rerender();
    expect(result.current.isSignedIn).toBe(true);
    expect(result.current.session.id).toBe("123");
    expect(result.current.user.id).toBe("321");
  });

  test("returns the correct auth state if the user is signed in", async () => {
    const { result, rerender } = renderHook(() => useAuth(fullAuthApi), { wrapper: MockClientWrapper(fullAuthApi) });

    expectMockSignedInUser();

    rerender();
    expect(result.current.isSignedIn).toBe(true);
    expect(result.current.session.id).toBe("123");
    expect(result.current.user.id).toBe("321");
  });

  test("returns the correct auth state if the user is signed out", async () => {
    const { result, rerender } = renderHook(() => useAuth(fullAuthApi), { wrapper: MockClientWrapper(fullAuthApi) });

    expectMockSignedOutUser();

    rerender();
    expect(result.current.isSignedIn).toBe(false);
    expect(result.current.session.id).toBe("123");
    expect(result.current.user).toBe(null);
  });

  test("it throws when the server responds with an error", async () => {
    expect(() => {
      const { rerender } = renderHook(() => useAuth(fullAuthApi), { wrapper: MockClientWrapper(fullAuthApi) });

      mockInternalServerError();

      rerender();
    }).toThrowErrorMatchingInlineSnapshot(`
      "[GraphQL] GGT_INTERNAL_SERVER_ERROR
      [GraphQL] An error occurred"
    `);
  });

  test("it throws when request fails to complete", async () => {
    expect(() => {
      const { rerender } = renderHook(() => useAuth(fullAuthApi), { wrapper: MockClientWrapper(fullAuthApi) });

      mockNetworkError();

      rerender();
    }).toThrowErrorMatchingInlineSnapshot(`"[Network] Network error"`);
  });

  test("it throws when the api client does not have a User model", async () => {
    expect(() => {
      const { rerender } = renderHook(() => useAuth(), { wrapper: MockClientWrapper(noUserModelApi) });

      expectMockSignedOutUser();

      rerender();
    }).toThrowErrorMatchingInlineSnapshot(`"api client does not have a User model"`);
  });

  test("returns the correct auth config when signed out", () => {
    const { result, rerender } = renderHook(() => useAuth(), {
      wrapper: MockClientWrapper(fullAuthApi, undefined, {
        signInPath: "/foo-sign-in",
        signOutActionApiIdentifier: "newSignOut",
        redirectOnSuccessfulSignInPath: "/bar-signed-in",
      }),
    });

    expectMockSignedOutUser();
    rerender();

    expect(result.current.configuration).toEqual({
      signInPath: "/foo-sign-in",
      signOutActionApiIdentifier: "newSignOut",
      redirectOnSuccessfulSignInPath: "/bar-signed-in",
    });
    expect(result.current.isSignedIn).toBe(false);
  });

  test("returns the correct auth config when signed in", () => {
    const { result, rerender } = renderHook(() => useAuth(), {
      wrapper: MockClientWrapper(fullAuthApi, undefined, {
        signInPath: "/foo-sign-in",
        signOutActionApiIdentifier: "newSignOut",
        redirectOnSuccessfulSignInPath: "/bar-signed-in",
      }),
    });

    expectMockSignedInUser();
    rerender();

    expect(result.current.configuration).toEqual({
      signInPath: "/foo-sign-in",
      signOutActionApiIdentifier: "newSignOut",
      redirectOnSuccessfulSignInPath: "/bar-signed-in",
    });
    expect(result.current.isSignedIn).toBe(true);
  });
});
