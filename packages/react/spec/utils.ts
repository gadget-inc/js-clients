import { CombinedError } from "urql";
import type { MockUrqlClient } from "./testWrappers.js";
import { mockUrqlClient } from "./testWrappers.js";

export const expectMockSignedInUser = (urqlClient?: MockUrqlClient) => {
  const urql = urqlClient || mockUrqlClient;
  expect(urql.executeQuery).toBeCalledTimes(1);
  urql.executeQuery.pushResponse("currentSession", {
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

export const expectMockSignedOutUser = (urqlClient?: MockUrqlClient) => {
  const urql = urqlClient || mockUrqlClient;
  expect(urql.executeQuery).toBeCalledTimes(1);
  urql.executeQuery.pushResponse("currentSession", {
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

export const expectMockDeletedUser = (urqlClient?: MockUrqlClient) => {
  const urql = urqlClient || mockUrqlClient;
  expect(urql.executeQuery).toBeCalledTimes(1);
  urql.executeQuery.pushResponse("currentSession", {
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

export const mockInternalServerError = () => {
  expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);
  mockUrqlClient.executeQuery.pushResponse("currentSession", {
    data: null,
    error: new CombinedError({ graphQLErrors: [new Error("GGT_INTERNAL_SERVER_ERROR"), "An error occurred"] }),
    stale: false,
    hasNext: false,
  });
};

export const mockNetworkError = () => {
  expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);
  mockUrqlClient.executeQuery.pushResponse("currentSession", {
    data: null,
    error: new CombinedError({ networkError: new Error("Network error") }),
    stale: false,
    hasNext: false,
  });
};
