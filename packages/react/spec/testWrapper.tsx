import type { AnyClient } from "@gadgetinc/api-client-core";
import { $gadgetConnection } from "@gadgetinc/api-client-core";
import type { DocumentNode, OperationDefinitionNode } from "graphql";
import { find, findLast } from "lodash";
import type { ReactNode } from "react";
import React, { Suspense } from "react";
import { act } from "react-dom/test-utils";
import type { Client, GraphQLRequest, OperationContext, OperationResult } from "urql";
import { makeErrorResult } from "urql";
import type { Subject } from "wonka";
import { makeSubject } from "wonka";
import { Provider } from "../src/GadgetProvider";
import { bulkExampleApi, relatedProductsApi, superAuthApi } from "./apis";

export type MockOperationFn = jest.Mock & {
  subjects: Record<string, Subject<OperationResult>>;
  /**
   * Push a response to any subscribed listeners from an `executeXYZ` call in an urql client.
   *
   * The key word here is "subscribed". If no query/mutation/subscription call has been made yet, the pushed response will be "dropped".
   * One should ensure the appropriate `executeXYZ` call has been made by urql, then call this function.
   */
  pushResponse: (key: string, response: Omit<OperationResult, "operation">) => void;
};

export type MockFetchFn = jest.Mock & {
  requests: { args: any[]; resolve: (response: Response) => void; reject: (error: Error) => void }[];
  pushResponse: (response: Response) => Promise<void>;
};

export interface MockUrqlClient extends Client {
  executeQuery: MockOperationFn;
  executeMutation: MockOperationFn;
  executeSubscription: MockOperationFn;
  [$gadgetConnection]: {
    fetch: MockFetchFn;
  };
}

export const graphqlDocumentName = (doc: DocumentNode) => {
  const lastDefinition: OperationDefinitionNode | undefined = findLast(doc.definitions, { kind: "OperationDefinition" }) as any;
  if (lastDefinition) {
    if (lastDefinition.name) {
      return lastDefinition.name.value;
    }
    const firstSelection = find(lastDefinition.selectionSet.selections, { kind: "Field" }) as any;
    return firstSelection.name.value;
  }
};

/**
 * Create a new function for reading/writing to a mock graphql backend
 */
const newMockOperationFn = (assertions?: (request: GraphQLRequest) => void) => {
  const subjects: Record<string, Subject<OperationResult>> = {};

  const fn = jest.fn((request: GraphQLRequest, options?: Partial<OperationContext>) => {
    const { query } = request;
    const fetchOptions = options?.fetchOptions;
    const key = graphqlDocumentName(query) ?? "unknown";
    subjects[key] ??= makeSubject();

    if (fetchOptions && typeof fetchOptions != "function") {
      const signal = fetchOptions.signal;
      if (signal) {
        signal.addEventListener("abort", () => {
          subjects[key].next(makeErrorResult(null as any, new Error("AbortError")));
        });
      }
    }

    if (assertions) {
      assertions(request);
    }

    return subjects[key].source;
  }) as unknown as MockOperationFn;

  fn.subjects = subjects;
  fn.pushResponse = (key, response) => {
    if (!subjects[key]) {
      throw new Error(`No mock client subject started for key ${key}, options are ${Object.keys(subjects).join(", ")}`);
    }
    act(() => {
      subjects[key].next({
        operation: null as any,
        ...response,
      });
      subjects[key].complete();
      delete subjects[key];
    });
  };

  return fn;
};

/**
 * Create a new function for reading/writing to a mock graphql backend
 */
const newMockFetchFn = () => {
  const requests: any[] = [];

  const fn = jest.fn((...args) => {
    return new Promise<Response>((resolve, reject) => {
      requests.push({
        args,
        resolve,
        reject,
      });
    });
  }) as unknown as MockFetchFn;

  fn.requests = requests;
  fn.pushResponse = async (response) => {
    await act(async () => {
      const request = requests.shift();
      if (!request) {
        throw new Error("no requests started for response pushing");
      }
      await request.resolve(response);
    });
  };

  return fn;
};

export const mockUrqlClient = { suspense: true } as MockUrqlClient;
beforeEach(() => {
  mockUrqlClient.executeQuery = newMockOperationFn();
  mockUrqlClient.executeMutation = newMockOperationFn();
  mockUrqlClient.executeSubscription = newMockOperationFn();
  mockUrqlClient[$gadgetConnection] = {
    fetch: newMockFetchFn(),
  };
});

export const createMockUrqlCient = (assertions?: {
  mutationAssertions?: (request: GraphQLRequest) => void;
  queryAssertions?: (request: GraphQLRequest) => void;
}) => {
  return {
    executeQuery: newMockOperationFn(assertions?.queryAssertions),
    executeMutation: newMockOperationFn(assertions?.mutationAssertions),
    executeSubscription: newMockOperationFn(),
    [$gadgetConnection]: {
      fetch: newMockFetchFn(),
    },
    suspense: true,
  } as MockUrqlClient;
};

export const TestWrapper = (api: AnyClient) => (props: { children: ReactNode }) => {
  jest.spyOn(api.connection, "currentClient", "get").mockReturnValue(mockUrqlClient);

  return (
    <Provider api={api}>
      <Suspense fallback={<div>Loading...</div>}>
        {props.children}
      </Suspense>
    </Provider>
  );
};
