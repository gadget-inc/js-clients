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
