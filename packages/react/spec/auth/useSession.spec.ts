import { renderHook } from "@testing-library/react";
import { noUserModelApi, superAuthApi } from "../../spec/apis.js";
import { expectMockSignedInUser, expectMockSignedOutUser, mockInternalServerError, mockNetworkError } from "../../spec/utils.js";
import { useSession } from "../../src/auth/useSession.js";
import { MockClientWrapper, mockUrqlClient } from "../testWrappers.js";

describe("useSession", () => {
  test("it returns the current session when the user is logged in and no options are passed", async () => {
    const { result, rerender } = renderHook(() => useSession(), { wrapper: MockClientWrapper(superAuthApi) });

    expectMockSignedInUser();
    rerender();

    expect(result.current.id).toEqual("123");
    expect(result.current.user!.id).toEqual("321");
    expect(result.current.user!.firstName).toEqual("Jane");
    expect(result.current.user!.lastName).toEqual("Doe");
  });

  test("it returns the current session when the user is logged in and api client is passed", async () => {
    const { result, rerender } = renderHook(() => useSession(superAuthApi), { wrapper: MockClientWrapper(superAuthApi) });

    expectMockSignedInUser();
    rerender();

    expect(result.current.id).toEqual("123");
    expect(result.current.user!.id).toEqual("321");
    expect(result.current.user!.firstName).toEqual("Jane");
    expect(result.current.user!.lastName).toEqual("Doe");
  });

  test("it returns the current session when the user is logged in and api client with options is passed", async () => {
    const { result:userResult, rerender } = renderHook(() => useSession(superAuthApi, {select: {user: { firstName: true}}}), { wrapper: MockClientWrapper(superAuthApi) });
  
    // {
    //   id: '123',
    //   userId: '321',
    //   user: { id: '321', firstName: 'Jane', lastName: 'Doe' }
    // } but we shouldnt be getting back lastname and id from user

    expect(userResult.current.id).toEqual("123");
    expect(userResult.current.userId).toEqual("321");

    expect(userResult.current.user?.id).toEqual("321");
    expect(userResult.current.user?.firstName).toEqual("Jane");
    expect(userResult.current.user?.lastName).toEqual("Doe");


    const { result: noUserResult, rerender: _noUserRerender } = renderHook(() => useSession(superAuthApi, {filter: {user: {firstName: {equals: "Bob"}}}}), { wrapper: MockClientWrapper(superAuthApi) });
  
    expect(noUserResult.current).toBeNull();
    
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

  test("it returns the current session when the user is logged out and no options are passed", async () => {
    const { result, rerender } = renderHook(() => useSession(), { wrapper: MockClientWrapper(superAuthApi) });

    expectMockSignedOutUser();
    rerender();

    expect(result.current).toBeDefined();
    expect(result.current.id).toEqual("123");
    expect(result.current.userId).toBe(null);
    expect(result.current.user).toBe(null);
  });

  test("it returns the current session when the user is logged out and an api client with options is passed", async () => {
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
