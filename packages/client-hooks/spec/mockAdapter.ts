import type { AnyClient, GadgetConnection } from "@gadgetinc/api-client-core";
import { jest } from "@jest/globals";
import type { GadgetApiContext, RuntimeAdapter, UseMutationResponse, UseQueryArgs, UseQueryResponse } from "../src/adapter.js";

/**
 * Creates a mock RuntimeAdapter for testing
 * This simulates the behavior of a framework adapter (React, Preact, etc.)
 * without depending on any specific framework
 */
export const createMockAdapter = (api: AnyClient, connection: GadgetConnection): RuntimeAdapter => {
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

  // Mock urql bindings
  const urql = {
    Provider: jest.fn((props: { client: any; children: any }) => props.children),

    useQuery: jest.fn(<Data = any, Variables = any>(_args: UseQueryArgs<Variables, Data>): UseQueryResponse<Data, Variables> => {
      return [
        {
          fetching: false,
          stale: false,
          data: undefined,
          error: undefined,
        },
        jest.fn(),
      ] as any;
    }),

    useMutation: jest.fn(<Data = any, Variables = any>(_query: any): UseMutationResponse<Data, Variables> => {
      return [
        {
          fetching: false,
          stale: false,
          data: undefined,
          error: undefined,
        },
        jest.fn(async () => ({
          fetching: false,
          stale: false,
          data: undefined,
          error: undefined,
          operation: undefined,
        })),
      ] as any;
    }),
  };

  return {
    GadgetApiContext,
    framework,
    urql,
  };
};

/**
 * Mock API client builder
 */
export const createMockApiClient = (): AnyClient => {
  return {
    connection: createMockConnection(),
  } as any;
};

/**
 * Mock GadgetConnection builder
 */
export const createMockConnection = (): GadgetConnection => {
  return {
    currentClient: {} as any,
    endpoint: "https://test.gadget.app/api",
    actionOperation: jest.fn(),
    findOneOperation: jest.fn(),
    findManyOperation: jest.fn(),
    findFirstOperation: jest.fn(),
    getOperation: jest.fn(),
    viewOperation: jest.fn(),
    hydrateRecord: jest.fn((result, data) => data),
    processActionResponse: jest.fn((defaultSelection, result, mutationData, modelSelectionField, hasReturnType) => {
      if (hasReturnType) {
        return mutationData.result;
      }
      return mutationData[modelSelectionField];
    }),
  } as any;
};
