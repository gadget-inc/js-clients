import { renderHook } from "@testing-library/react";
import { act } from "react";
import { useAuth } from "../../src/auth/useAuth.js";
import { fullAuthApi, noUserModelApi } from "../apis.js";
import { MockClientWrapper } from "../testWrappers.js";
import { expectMockSignedInUser, expectMockSignedOutUser, mockInternalServerError, mockNetworkError } from "../utils.js";

describe("useAuth", () => {
  test("returns the correct auth state as generic GadgetRecords if no api client is provided", async () => {
    const { result, rerender } = renderHook(() => useAuth(), { wrapper: MockClientWrapper(fullAuthApi) });

    await act(async () => {
      await expectMockSignedInUser();
    });

    rerender();
    expect(result.current.isSignedIn).toBe(true);
    expect(result.current.session.id).toBe("123");
    expect(result.current.user.id).toBe("321");
  });

  test("returns the correct auth state if the user is signed in", async () => {
    const { result, rerender } = renderHook(() => useAuth(fullAuthApi), { wrapper: MockClientWrapper(fullAuthApi) });

    await act(async () => {
      await expectMockSignedInUser();
    });

    rerender();
    expect(result.current.isSignedIn).toBe(true);
    expect(result.current.session.id).toBe("123");
    expect(result.current.user.id).toBe("321");
  });

  test("returns the correct auth state if the user is signed out", async () => {
    const { result, rerender } = renderHook(() => useAuth(fullAuthApi), { wrapper: MockClientWrapper(fullAuthApi) });

    await act(async () => {
      await expectMockSignedOutUser();
    });

    rerender();
    expect(result.current.isSignedIn).toBe(false);
    expect(result.current.session.id).toBe("123");
    expect(result.current.user).toBe(null);
  });

  test("it throws when the server responds with an error", async () => {
    await expect(async () => {
      const { rerender } = renderHook(() => useAuth(fullAuthApi), { wrapper: MockClientWrapper(fullAuthApi) });

      await act(async () => {
        await mockInternalServerError();
      });

      rerender();
    }).rejects.toThrowErrorMatchingInlineSnapshot(`
      "[GraphQL] GGT_INTERNAL_SERVER_ERROR
      [GraphQL] An error occurred"
    `);
  });

  test("it throws when request fails to complete", async () => {
    await expect(async () => {
      const { rerender } = renderHook(() => useAuth(fullAuthApi), { wrapper: MockClientWrapper(fullAuthApi) });

      await act(async () => {
        await mockNetworkError();
      });

      rerender();
    }).rejects.toThrowErrorMatchingInlineSnapshot(`"[Network] Network error"`);
  });

  test("it throws when the api client does not have a User model", async () => {
    await expect(async () => {
      const { rerender } = renderHook(() => useAuth(), { wrapper: MockClientWrapper(noUserModelApi) });

      await act(async () => {
        await expectMockSignedOutUser();
      });

      rerender();
    }).rejects.toThrowErrorMatchingInlineSnapshot(`"api client does not have a User model"`);
  });

  test("returns the correct auth config when signed out", async () => {
    const { result, rerender } = renderHook(() => useAuth(), {
      wrapper: MockClientWrapper(fullAuthApi, undefined, {
        auth: {
          signInPath: "/foo-sign-in",
          signOutActionApiIdentifier: "newSignOut",
          redirectOnSuccessfulSignInPath: "/bar-signed-in",
        },
      }),
    });

    await act(async () => {
      await expectMockSignedOutUser();
    });

    rerender();

    expect(result.current.configuration).toEqual({
      signInPath: "/foo-sign-in",
      signOutActionApiIdentifier: "newSignOut",
      redirectOnSuccessfulSignInPath: "/bar-signed-in",
    });
    expect(result.current.isSignedIn).toBe(false);
  });

  test("returns the correct auth config when signed in", async () => {
    const { result, rerender } = renderHook(() => useAuth(), {
      wrapper: MockClientWrapper(fullAuthApi, undefined, {
        auth: {
          signInPath: "/foo-sign-in",
          signOutActionApiIdentifier: "newSignOut",
          redirectOnSuccessfulSignInPath: "/bar-signed-in",
        },
      }),
    });

    await act(async () => {
      await expectMockSignedInUser();
    });

    rerender();

    expect(result.current.configuration).toEqual({
      signInPath: "/foo-sign-in",
      signOutActionApiIdentifier: "newSignOut",
      redirectOnSuccessfulSignInPath: "/bar-signed-in",
    });
    expect(result.current.isSignedIn).toBe(true);
  });
});
