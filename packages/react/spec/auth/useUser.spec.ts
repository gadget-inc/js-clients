import { renderHook } from "@testing-library/react";
import { fullAuthApi, noUserModelApi } from "../../spec/apis.js";
import { expectMockSignedInUser, expectMockSignedOutUser, mockInternalServerError, mockNetworkError } from "../../spec/utils.js";
import { useUser } from "../../src/auth/useUser.js";
import type { MockUrqlClient } from "../testWrappers.js";
import { MockClientWrapper, createMockUrqlClient } from "../testWrappers.js";

describe("useUser", () => {
  let client: MockUrqlClient;
  let query: string | undefined;

  beforeEach(() => {
    query = undefined;
    client = createMockUrqlClient({
      queryAssertions: (request) => {
        query = request.query.loc?.source.body;
      },
    });
  });

  test("it returns the current user when the user is logged in with no options passed", async () => {
    const { result, rerender } = renderHook(() => useUser(), { wrapper: MockClientWrapper(fullAuthApi, client) });

    expectMockSignedInUser(client);

    rerender();

    expect(query).toMatchInlineSnapshot(`
      "query currentSession {
        currentSession {
          __typename
          id
          state
          createdAt
          updatedAt
          user {
            __typename
            id
            createdAt
            email
            emailVerificationToken
            emailVerificationTokenExpiration
            emailVerified
            firstName
            googleImageUrl
            googleProfileId
            lastName
            lastSignedIn
            resetPasswordToken
            resetPasswordTokenExpiration
            roles {
              key
              name
            }
            updatedAt
          }
        }
        gadgetMeta {
          hydrations(modelName: 
      "session")
        }
      }"
    `);
    const [user] = result.current;
    expect(user.id).toEqual("321");
    expect(user.firstName).toEqual("Jane");
    expect(user.lastName).toEqual("Doe");
  });

  test("it returns the current user when the user is logged in with an api client passed", async () => {
    const { result, rerender } = renderHook(() => useUser(fullAuthApi), { wrapper: MockClientWrapper(fullAuthApi, client) });

    expectMockSignedInUser(client);

    rerender();

    expect(query).toMatchInlineSnapshot(`
      "query currentSession {
        currentSession {
          __typename
          id
          state
          createdAt
          updatedAt
          user {
            __typename
            id
            createdAt
            email
            emailVerificationToken
            emailVerificationTokenExpiration
            emailVerified
            firstName
            googleImageUrl
            googleProfileId
            lastName
            lastSignedIn
            resetPasswordToken
            resetPasswordTokenExpiration
            roles {
              key
              name
            }
            updatedAt
          }
        }
        gadgetMeta {
          hydrations(modelName: 
      "session")
        }
      }"
    `);
    const [user] = result.current;
    expect(user.id).toEqual("321");
    expect(user.firstName).toEqual("Jane");
    expect(user.lastName).toEqual("Doe");
  });

  test("it returns the current user when the user is logged in with an api client and options passed", async () => {
    const { result, rerender } = renderHook(() => useUser(fullAuthApi, { select: { firstName: true } }), {
      wrapper: MockClientWrapper(fullAuthApi, client),
    });

    expectMockSignedInUser(client);

    rerender();

    expect(query).toMatchInlineSnapshot(`
      "query currentSession {
        currentSession {
          __typename
          id
          state
          createdAt
          updatedAt
          user {
            firstName
          }
        }
        gadgetMeta {
          hydrations(modelName: 
      "session")
        }
      }"
    `);
    const [user] = result.current;
    expect(user.firstName).toEqual("Jane");
    expect(user).toMatchInlineSnapshot(`
      {
        "firstName": "Jane",
        "id": "321",
        "lastName": "Doe",
      }
    `); //we get the full user object back because we mock the return value
  });

  test("it returns null when the user is logged out", async () => {
    const { result, rerender } = renderHook(() => useUser(), { wrapper: MockClientWrapper(fullAuthApi) });

    expectMockSignedOutUser();

    rerender();
    expect(result.current[0]).toBe(null);
  });

  test("it throws when the server responds with an error", async () => {
    expect(() => {
      const { rerender } = renderHook(() => useUser(), { wrapper: MockClientWrapper(fullAuthApi) });

      mockInternalServerError();

      rerender();
    }).toThrowErrorMatchingInlineSnapshot(`
      "[GraphQL] GGT_INTERNAL_SERVER_ERROR
      [GraphQL] An error occurred"
    `);
  });

  test("it throws when request fails to complete", async () => {
    expect(() => {
      const { rerender } = renderHook(() => useUser(), { wrapper: MockClientWrapper(fullAuthApi) });

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
