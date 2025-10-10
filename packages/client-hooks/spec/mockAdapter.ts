import type { AnyClient, AnyConnection } from "@gadgetinc/core";
import type { MockUrqlClient } from "@gadgetinc/core/testing";
import { createMockUrqlClient } from "@gadgetinc/core/testing";
import { jest } from "@jest/globals";
import { createRequest } from "@urql/core";
import type { GadgetApiContext, RuntimeAdapter } from "../src/adapter.js";

/**
 * Creates a mock RuntimeAdapter for testing
 * This simulates the behavior of a framework adapter (React, Preact, etc.)
 * without depending on any specific framework
 */
export const createMockAdapter = (
  api: AnyClient,
  connection: AnyConnection,
  urqlClient?: MockUrqlClient
): RuntimeAdapter & { urqlClient: MockUrqlClient } => {
  // Use provided client or create a new one
  const mockClient = urqlClient || createMockUrqlClient();

  // Set the connection's currentClient to return our mock URQL client
  Object.defineProperty(connection, "currentClient", {
    get: () => mockClient,
    configurable: true,
  });

  // Track hook state across calls using a simple state store
  const stateStore = new Map<number, any>();
  let stateCounter = 0;

  // Mock context
  const contextValue: GadgetApiContext = { api, connection };
  const GadgetApiContext: any = {
    Provider: null,
    Consumer: null,
    _currentValue: contextValue,
  };

  // Mock framework bindings
  const framework = {
    deepEqual: <A, B>(a: A, b: B): boolean => {
      return JSON.stringify(a) === JSON.stringify(b);
    },

    useEffect: jest.fn((fn: () => void | (() => void), _deps?: any[]) => {
      const cleanup = fn();
      return cleanup;
    }),

    useMemo: jest.fn(<T>(factory: () => T, _deps: any[]): T => {
      return factory();
    }),

    useRef: jest.fn(<T>(initial: T): { current: T } => {
      return { current: initial };
    }),

    useState: jest.fn(<T>(initial: T | (() => T)): [T, (next: T) => void] => {
      const id = stateCounter++;
      if (!stateStore.has(id)) {
        stateStore.set(id, typeof initial === "function" ? (initial as () => T)() : initial);
      }
      const setState = (next: T) => {
        stateStore.set(id, next);
      };
      return [stateStore.get(id), setState];
    }),

    useContext: jest.fn(<T>(_ctx: any): T => {
      return contextValue as any;
    }),

    createContext: jest.fn(<T>(defaultValue: T): any => {
      return {
        Provider: null,
        Consumer: null,
        _currentValue: defaultValue,
      };
    }),

    useCallback: jest.fn(<T extends (...args: any[]) => any>(fn: T, _deps: any[]): T => {
      return fn;
    }),

    useReducer: jest.fn(
      <S, I, A extends any[]>(reducer: (prevState: S, ...args: A) => S, initialArg: I, init?: (i: I) => S): [S, (...args: A) => void] => {
        const id = stateCounter++;
        if (!stateStore.has(id)) {
          stateStore.set(id, init ? init(initialArg) : initialArg);
        }
        const dispatch = (...args: A) => {
          const currentState = stateStore.get(id);
          const newState = reducer(currentState, ...args);
          stateStore.set(id, newState);
        };
        return [stateStore.get(id), dispatch];
      }
    ),

    Fragment: null as any,
  };

  // Mock URQL hooks that integrate with the real mock client
  // This allows us to test the actual query/mutation execution without requiring React
  const urql = {
    Provider: jest.fn((props: { client: any; children: any }) => props.children),

    useQuery: jest.fn((args: any) => {
      // Create a proper GraphQL request
      const request = createRequest(args.query, args.variables);

      // Execute the query using the mock client
      const result = mockClient.executeQuery(request, args);

      // Subscribe to the result and track the latest state
      const state = { fetching: true, stale: false, data: undefined, error: undefined };
      result.subscribe((value: any) => {
        Object.assign(state, value);
      });

      const reexecute = jest.fn(() => {
        // Re-execute the query
        const newRequest = createRequest(args.query, args.variables);
        mockClient.executeQuery(newRequest, args);
      });

      return [state, reexecute] as any;
    }),

    useMutation: jest.fn((query: any) => {
      const state = { fetching: false, stale: false, data: undefined, error: undefined };

      const executeMutation = jest.fn(async (variables: any) => {
        // Create a proper GraphQL request
        const request = createRequest(query, variables);
        const result = mockClient.executeMutation(request);

        // Subscribe to the result
        return new Promise((resolve) => {
          result.subscribe((value: any) => {
            Object.assign(state, value);
            resolve(value);
          });
        });
      });

      return [state, executeMutation] as any;
    }),
  };

  return {
    GadgetApiContext,
    framework: framework as any,
    urql,
    urqlClient: mockClient,
  };
};

/**
 * Mock API client builder
 */
export const createMockApiClient = (): AnyClient => {
  const mockCoreImplementation = {
    GadgetRecord: {} as any,
    disambiguateActionVariables: jest.fn((action: any, input: any) => input || {}),
    disambiguateBulkActionVariables: jest.fn((action: any, inputs: any) => inputs || {}),
    capitalizeIdentifier: jest.fn((identifier: string) => identifier.charAt(0).toUpperCase() + identifier.slice(1)),
    wrapClientSideError: jest.fn((error: any, response?: any) => error),
    errorIfDataAbsent: jest.fn((data: any, dataPath: string[], paused?: boolean) => {
      // Only return error if not paused and data is explicitly null or false (not undefined)
      // undefined means data hasn't loaded yet
      if (!paused && data === null) {
        return { message: "Data not found" } as any;
      }
      return undefined;
    }),
  };

  return {
    connection: createMockConnection(),
    [Symbol.for("gadget/coreImplementation")]: mockCoreImplementation,
  } as any;
};

/**
 * Mock GadgetConnection builder
 */
export const createMockConnection = (): AnyConnection => {
  return {
    currentClient: {} as any,
    endpoint: "https://test.gadget.app/api",
    actionOperation: jest.fn(),
    findOneOperation: jest.fn(),
    findManyOperation: jest.fn(),
    findFirstOperation: jest.fn(),
    getOperation: jest.fn(),
    viewOperation: jest.fn(),
    hydrateRecord: jest.fn((_result, data) => data),
    processActionResponse: jest.fn((_defaultSelection, _result, mutationData: any, modelSelectionField: string, hasReturnType: boolean) => {
      if (hasReturnType) {
        return mutationData?.result;
      }
      return mutationData?.[modelSelectionField];
    }),
    fetch: jest.fn() as any,
    enqueue: {} as any,
  } as any;
};

/**
 * Creates a mock processResult function for actions and queries
 */
export const createMockProcessResult = () => {
  return jest.fn((data: any, error: any) => {
    return { data, error };
  });
};
