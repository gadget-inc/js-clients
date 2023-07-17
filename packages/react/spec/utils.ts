import { CombinedError } from "urql";
import { mockUrqlClient } from "./testWrapper";

export const expectMockSignedInUser = () => {
  expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);
  mockUrqlClient.executeQuery.pushResponse("currentSession", {
    data: {
      currentSession: {
        id: "123",
        userId: "321",
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

export const expectMockSignedOutUser = () => {
  expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);
  mockUrqlClient.executeQuery.pushResponse("currentSession", {
    data: {
      currentSession: {
        id: "123",
        userId: null,
        user: null,
      },
    },
    stale: false,
    hasNext: false,
  });
};

export const expectMockDeletedUser = () => {
  expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);
  mockUrqlClient.executeQuery.pushResponse("currentSession", {
    data: {
      currentSession: {
        id: "123",
        userId: 1,
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
