import { CombinedError } from "urql";
import type { MockUrqlClient } from "./testWrappers.js";
import { mockUrqlClient } from "./testWrappers.js";

export const expectMockSignedInUser = async (urqlClient?: MockUrqlClient) => {
  const urql = urqlClient || mockUrqlClient;
  await urql.executeQuery.waitForSubject("currentSession");
  await urql.executeQuery.pushResponse("currentSession", {
    data: {
      currentSession: {
        id: "123",
        user: {
          id: "321",
          firstName: "Jane",
          lastName: "Doe",
        },
      },
    },
    stale: false,
    hasNext: false,
  });
};

export const expectMockSignedOutUser = async (urqlClient?: MockUrqlClient) => {
  const urql = urqlClient || mockUrqlClient;
  await urql.executeQuery.waitForSubject("currentSession");
  await urql.executeQuery.pushResponse("currentSession", {
    data: {
      currentSession: {
        id: "123",
        user: null,
      },
    },
    stale: false,
    hasNext: false,
  });
};

export const expectMockDeletedUser = async (urqlClient?: MockUrqlClient) => {
  const urql = urqlClient || mockUrqlClient;
  await urql.executeQuery.waitForSubject("currentSession");
  await urql.executeQuery.pushResponse("currentSession", {
    data: {
      currentSession: {
        id: "123",
        user: null,
      },
    },
    stale: false,
    hasNext: false,
  });
};

export const mockInternalServerError = async () => {
  await mockUrqlClient.executeQuery.waitForSubject("currentSession");
  await mockUrqlClient.executeQuery.pushResponse("currentSession", {
    data: null,
    error: new CombinedError({ graphQLErrors: [new Error("GGT_INTERNAL_SERVER_ERROR"), "An error occurred"] }),
    stale: false,
    hasNext: false,
  });
};

export const mockNetworkError = async () => {
  await mockUrqlClient.executeQuery.waitForSubject("currentSession");
  await mockUrqlClient.executeQuery.pushResponse("currentSession", {
    data: null,
    error: new CombinedError({ networkError: new Error("Network error") }),
    stale: false,
    hasNext: false,
  });
};

export const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};
