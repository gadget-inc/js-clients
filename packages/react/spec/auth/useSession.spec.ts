import { act, renderHook } from "@testing-library/react";
import { fullAuthApi, noUserModelApi } from "../../spec/apis.js";
import { expectMockSignedInUser, expectMockSignedOutUser, mockInternalServerError, mockNetworkError } from "../../spec/utils.js";
import { useSession } from "../../src/auth/useSession.js";
import type { MockUrqlClient } from "../testWrappers.js";
import { MockClientWrapper, createMockUrqlClient } from "../testWrappers.js";

describe("useSession", () => {
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

  test("it returns the current session when the user is logged in and no options are passed", async () => {
    const { result, rerender } = renderHook(() => useSession(), {
      wrapper: MockClientWrapper(fullAuthApi, client),
    });

    await act(async () => {
      await expectMockSignedInUser(client);
    });
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
    expect(result.current.id).toEqual("123");
    expect(result.current.user!.id).toEqual("321");
    expect(result.current.user!.firstName).toEqual("Jane");
    expect(result.current.user!.lastName).toEqual("Doe");
  });

  test("it returns the current session when the user is logged in and api client is passed", async () => {
    const { result, rerender } = renderHook(() => useSession(fullAuthApi), { wrapper: MockClientWrapper(fullAuthApi, client) });

    await act(async () => {
      await expectMockSignedInUser(client);
    });
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
    expect(result.current.id).toEqual("123");
    expect(result.current.user!.id).toEqual("321");
    expect(result.current.user!.firstName).toEqual("Jane");
    expect(result.current.user!.lastName).toEqual("Doe");
  });

  test("it returns the current session when the user is logged in and api client with options is passed", async () => {
    const { result, rerender } = renderHook(() => useSession(fullAuthApi, { select: { id: true, user: { id: true, firstName: true } } }), {
      wrapper: MockClientWrapper(fullAuthApi, client),
    });

    await act(async () => {
      await expectMockSignedInUser(client);
    });
    rerender();

    expect(query).toMatchInlineSnapshot(`
      "query currentSession {
        currentSession {
          id
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
    expect(result.current.user?.id).toEqual("321");
    expect(result.current.user?.firstName).toEqual("Jane");

    const { result: noUserResult, rerender: _noUserRerender } = renderHook(
      () => useSession(fullAuthApi, { filter: { user: { firstName: { equals: "Bob" } } } }),
      { wrapper: MockClientWrapper(fullAuthApi) }
    );

    expect(noUserResult.current).toBeNull();
  });

  test("it returns the current session when the user is logged out", async () => {
    const { result, rerender } = renderHook(() => useSession(), { wrapper: MockClientWrapper(fullAuthApi) });

    await act(async () => {
      await expectMockSignedOutUser();
    });
    rerender();

    expect(result.current).toBeDefined();
    expect(result.current.id).toEqual("123");
    expect(result.current.user).toBe(null);
  });

  test("it returns the current session when the user is logged out and no options are passed", async () => {
    const { result, rerender } = renderHook(() => useSession(), { wrapper: MockClientWrapper(fullAuthApi) });

    await act(async () => {
      await expectMockSignedOutUser();
    });
    rerender();

    expect(result.current).toBeDefined();
    expect(result.current.id).toEqual("123");
    expect(result.current.user).toBe(null);
  });

  test("it returns the current session when the user is logged out and an api client with options is passed", async () => {
    const { result, rerender } = renderHook(() => useSession(), { wrapper: MockClientWrapper(fullAuthApi) });

    await act(async () => {
      await expectMockSignedOutUser();
    });
    rerender();

    expect(result.current).toBeDefined();
    expect(result.current.id).toEqual("123");
    expect(result.current.user).toBe(null);
  });

  test("it throws when the server responds with an error", async () => {
    await expect(async () => {
      const { rerender } = renderHook(() => useSession(), { wrapper: MockClientWrapper(fullAuthApi) });

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
      const { rerender } = renderHook(() => useSession(), { wrapper: MockClientWrapper(fullAuthApi) });

      await act(async () => {
        await mockNetworkError();
      });

      rerender();
    }).rejects.toThrowErrorMatchingInlineSnapshot(`"[Network] Network error"`);
  });

  test("it returns the current session when the client does not have a user model", async () => {
    const { result, rerender } = renderHook(() => useSession(), { wrapper: MockClientWrapper(noUserModelApi) });

    await act(async () => {
      await expectMockSignedOutUser();
    });
    rerender();

    expect(result.current.id).toEqual("123");
    expect(result.current.user).toBeNull();
  });
});
