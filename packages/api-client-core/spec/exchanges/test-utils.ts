/**
 * This file was copied from: https://github.com/urql-graphql/urql/blob/25d114d25807f0676dbf453732602753279ba0db/packages/core/src/test-utils/samples.ts
 * Any meaningful changes are documented with comments starting with "GADGET:"
 */
import {
  gql,
  makeOperation,
  type ExecutionResult,
  type GraphQLRequest,
  type Operation,
  type OperationContext,
  type OperationResult,
} from "@urql/core";

export const context: OperationContext = {
  fetchOptions: {
    method: "POST",
  },
  requestPolicy: "cache-first",
  url: "http://localhost:3000/graphql",
};

// GADGET: added __typename
export const queryGql: GraphQLRequest = {
  key: 2,
  query: gql`
    query getUser($name: String) {
      user(name: $name) {
        __typename
        id
        firstName
        lastName
      }
    }
  `,
  variables: {
    name: "Clara",
  },
};

// GADGET: added __typename
export const mutationGql: GraphQLRequest = {
  key: 3,
  query: gql`
    mutation AddUser($name: String) {
      addUser(name: $name) {
        __typename
        name
      }
    }
  `,
  variables: {
    name: "Clara",
  },
};

export const subscriptionGql: GraphQLRequest = {
  key: 4,
  query: gql`
    subscription subscribeToUser($user: String) {
      user(user: $user) {
        name
      }
    }
  `,
  variables: {
    user: "colin",
  },
};

export const queryOperation: Operation = makeOperation(
  "query",
  {
    query: queryGql.query,
    variables: queryGql.variables,
    key: queryGql.key,
  },
  context
);

export const teardownOperation: Operation = makeOperation(
  "teardown",
  {
    query: queryOperation.query,
    variables: queryOperation.variables,
    key: queryOperation.key,
  },
  context
);

export const mutationOperation: Operation = makeOperation(
  "mutation",
  {
    query: mutationGql.query,
    variables: mutationGql.variables,
    key: mutationGql.key,
  },
  context
);

export const subscriptionOperation: Operation = makeOperation(
  "subscription",
  {
    query: subscriptionGql.query,
    variables: subscriptionGql.variables,
    key: subscriptionGql.key,
  },
  context
);

export const undefinedQueryResponse: OperationResult = {
  operation: queryOperation,
  stale: false,
  hasNext: false,
};

// GADGET: added __typename to the query response
export const queryResponse: OperationResult = {
  operation: queryOperation,
  data: {
    user: {
      __typename: "User",
      name: "Clive",
    },
  },
  stale: false,
  hasNext: false,
};

// GADGET: added addUser to the mutation response
export const mutationResponse: OperationResult = {
  operation: mutationOperation,
  data: {
    addUser: {
      __typename: "User",
      name: "Clara",
    },
  },
  stale: false,
  hasNext: false,
};

export const subscriptionResult: ExecutionResult = {
  data: {},
};

// GADGET: added the below query, operation, and response
export const liveQueryGql: GraphQLRequest = {
  key: 5,
  query: gql`
    query getUser($name: String) @live {
      user(name: $name) {
        __typename
        id
        firstName
        lastName
      }
    }
  `,
  variables: {
    name: "Clara",
  },
};

export const liveQueryOperation: Operation = makeOperation(
  "query",
  {
    query: liveQueryGql.query,
    variables: liveQueryGql.variables,
    key: liveQueryGql.key,
  },
  context
);

export const liveQueryResponse: OperationResult = {
  operation: liveQueryOperation,
  data: {
    user: {
      __typename: "User",
      name: "Clara",
    },
  },
  stale: false,
  hasNext: true,
};
