import { renderHook } from "@testing-library/react";
import { noUserModelApi, superAuthApi } from "../../spec/apis.js";
import { expectMockSignedInUser, expectMockSignedOutUser, mockInternalServerError, mockNetworkError } from "../../spec/utils.js";
import { useUser } from "../../src/auth/useUser.js";
import type { MockUrqlClient } from "../testWrappers.js";
import { MockClientWrapper, createMockUrqlCient } from "../testWrappers.js";

describe("useUser", () => {
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

  test("it returns the current user when the user is logged in with no options passed", async () => {
    const { result, rerender } = renderHook(() => useUser(), { wrapper: MockClientWrapper(superAuthApi, client) });

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
    expect(result.current.id).toEqual("321");
    expect(result.current.firstName).toEqual("Jane");
    expect(result.current.lastName).toEqual("Doe");
  });

  test("it returns the current user when the user is logged in with an api client passed", async () => {
    const { result, rerender } = renderHook(() => useUser(superAuthApi), { wrapper: MockClientWrapper(superAuthApi, client) });

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
    expect(result.current.id).toEqual("321");
    expect(result.current.firstName).toEqual("Jane");
    expect(result.current.lastName).toEqual("Doe");
  });

  test("it returns the current user when the user is logged in with an api client and options passed", async () => {
    const { result, rerender } = renderHook(() => useUser(superAuthApi, { select: { firstName: true } }), {
      wrapper: MockClientWrapper(superAuthApi, client),
    });

    expectMockSignedInUser(client);

    rerender();

    expect(query).toMatchInlineSnapshot(`
      "query currentSession {
        currentSession {
          firstName
          __typename
        }
        gadgetMeta {
          hydrations(modelName: 
      "session")
        }
      }"
    `);
    expect(result.current.firstName).toEqual("Jane");
    expect(result.current).toMatchInlineSnapshot(`
      {
        "firstName": "Jane",
        "id": "321",
        "lastName": "Doe",
      }
    `); //we get the full user object back because we mock the return value
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
