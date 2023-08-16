import { renderHook } from "@testing-library/react";
import { noUserModelApi, superAuthApi } from "../../spec/apis.js";
import { expectMockSignedInUser, expectMockSignedOutUser, mockInternalServerError, mockNetworkError } from "../../spec/utils.js";
import { useSession } from "../../src/auth/useSession.js";
import type { MockUrqlClient } from "../testWrappers.js";
import { MockClientWrapper, createMockUrqlCient } from "../testWrappers.js";

describe("useSession", () => {
  let client: MockUrqlClient;
  let query: string | undefined;

  beforeEach(() => {
    query = undefined;
    client = createMockUrqlCient({
      queryAssertions: (request) => {
        query = request.query.loc?.source.body;
      },
    });
  });

  test("it returns the current session when the user is logged in and no options are passed", async () => {
    const { result, rerender } = renderHook(() => useSession(), {
      wrapper: MockClientWrapper(superAuthApi, client),
    });

    expectMockSignedInUser(client);
    rerender();

    expect(query).toMatchInlineSnapshot(`
      "query currentSession {
        currentSession {
          id
          __typename
          createdAt
          updatedAt
          roles {
            key
            name
          }
          user {
            id
            __typename
            createdAt
            updatedAt
            lastName
            firstName
            email
            googleImageUrl
          }
        }
        gadgetMeta {
          hydrations(modelName: 
      "session")
        }
      }"
    `);
    expect(result.current.id).toEqual("123");
    expect(result.current.user!.id).toEqual("321");
    expect(result.current.user!.firstName).toEqual("Jane");
    expect(result.current.user!.lastName).toEqual("Doe");
  });

  test("it returns the current session when the user is logged in and api client is passed", async () => {
    const { result, rerender } = renderHook(() => useSession(superAuthApi), { wrapper: MockClientWrapper(superAuthApi, client) });

    expectMockSignedInUser(client);
    rerender();

    expect(query).toMatchInlineSnapshot(`
      "query currentSession {
        currentSession {
          id
          __typename
          createdAt
          updatedAt
          roles {
            key
            name
          }
          user {
            id
            __typename
            createdAt
            updatedAt
            lastName
            firstName
            email
            googleImageUrl
          }
        }
        gadgetMeta {
          hydrations(modelName: 
      "session")
        }
      }"
    `);
    expect(result.current.id).toEqual("123");
    expect(result.current.user!.id).toEqual("321");
    expect(result.current.user!.firstName).toEqual("Jane");
    expect(result.current.user!.lastName).toEqual("Doe");
  });

  test("it returns the current session when the user is logged in and api client with options is passed", async () => {
    const { result, rerender } = renderHook(
      () => useSession(superAuthApi, { select: { id: true, userId: true, user: { id: true, firstName: true } } }),
      { wrapper: MockClientWrapper(superAuthApi, client) }
    );

    expectMockSignedInUser(client);
    rerender();

    expect(query).toMatchInlineSnapshot(`
      "query currentSession {
        currentSession {
          id
          userId
          user {
            id
            firstName
          }
          __typename
        }
        gadgetMeta {
          hydrations(modelName: 
      "session")
        }
      }"
    `);
    expect(result.current.id).toEqual("123");
    expect(result.current.userId).toEqual("321");
    expect(result.current.user?.id).toEqual("321");
    expect(result.current.user?.firstName).toEqual("Jane");

    const { result: noUserResult, rerender: _noUserRerender } = renderHook(
      () => useSession(superAuthApi, { filter: { user: { firstName: { equals: "Bob" } } } }),
      { wrapper: MockClientWrapper(superAuthApi) }
    );

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
    expect(result.current.user).toBeNull();
    expect(result.current.userId).toBeNull();
  });
});
