import type { DocumentNode, OperationDefinitionNode } from "graphql";
import { find, findLast } from "lodash";
import React, { ReactNode } from "react";
import { act } from "react-dom/test-utils";
import type { Client, GraphQLRequest, OperationContext, OperationResult } from "urql";
import { makeErrorResult, Provider } from "urql";
import type { Subject } from "wonka";
import { makeSubject } from "wonka";

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

export interface MockUrqlClient extends Client {
  executeQuery: MockOperationFn;
  executeMutation: MockOperationFn;
  executeSubscription: MockOperationFn;
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
const newMockOperationFn = () => {
  const subjects: Record<string, Subject<OperationResult>> = {};

  const fn = jest.fn(({ query }: GraphQLRequest, options?: Partial<OperationContext>) => {
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

    return subjects[key].source;
  }) as unknown as MockOperationFn;

  fn.subjects = subjects;
  fn.pushResponse = (key, response) => {
    if (!subjects[key]) {
      throw new Error(`No mock client subject started for key ${key}`);
    }
    act(() => {
      subjects[key].next({
        operation: null as any,
        ...response,
      });
      subjects[key].complete();
    });
  };

  return fn;
};

export const mockClient = {} as MockUrqlClient;
beforeEach(() => {
  mockClient.executeQuery = newMockOperationFn();
  mockClient.executeMutation = newMockOperationFn();
  mockClient.executeSubscription = newMockOperationFn();
});

export const TestWrapper = (props: { children: ReactNode }) => {
  return <Provider value={mockClient}>{props.children}</Provider>;
};
