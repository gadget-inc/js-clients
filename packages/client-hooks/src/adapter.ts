import type { AnyClient, GadgetConnection } from "@gadgetinc/api-client-core";
import type {
  AnyVariables,
  Client,
  CombinedError,
  DocumentInput,
  GraphQLRequestParams,
  Operation,
  OperationContext,
  OperationResult,
  RequestPolicy,
} from "@urql/core";

type Dispose = void | (() => void);
type AnyActionArg = [] | [any];
type ActionDispatch<ActionArg extends AnyActionArg> = (...args: ActionArg) => void;

type Context<_T> = {
  Provider: unknown;
  Consumer: unknown;
};

interface FrameworkBindings {
  deepEqual: <A, B>(a: A, b: B) => boolean;
  useEffect: (fn: () => Dispose, deps?: any[]) => void;
  useMemo: <T>(factory: () => T, deps: any[]) => T;
  useRef: <T>(initial: T) => { current: T };
  useState: <T>(initial: T | (() => T)) => [T, (next: T) => void];
  useContext: <T>(ctx: any) => T;
  createContext: <T>(defaultValue: T) => Context<T>;
  useCallback: <T extends (...args: any[]) => any>(fn: T, deps: any[]) => T;
  useReducer: <S, I, A extends AnyActionArg>(
    reducer: (prevState: S, ...args: A) => S,
    initialArg: I,
    init?: (i: I) => S
  ) => [S, ActionDispatch<A>];
  Fragment: unknown;
}

export type UseQueryArgs<Variables extends AnyVariables = AnyVariables, Data = any> = {
  requestPolicy?: RequestPolicy;
  context?: Partial<OperationContext>;
  pause?: boolean;
} & GraphQLRequestParams<Data, Variables>;

export interface UseQueryState<Data = any, Variables extends AnyVariables = AnyVariables> {
  fetching: boolean;
  stale: boolean;
  data?: Data;
  error?: CombinedError;
  extensions?: Record<string, any>;
  operation?: Operation<Data, Variables>;
}

type UseQueryExecute = (opts?: Partial<OperationContext>) => void;

export type UseQueryResponse<Data = any, Variables extends AnyVariables = AnyVariables> = [UseQueryState<Data, Variables>, UseQueryExecute];

export interface UseMutationState<Data = any, Variables extends AnyVariables = AnyVariables> {
  fetching: boolean;
  stale: boolean;
  data?: Data;
  error?: CombinedError;
  extensions?: Record<string, any>;
  operation?: Operation<Data, Variables>;
}

type UseMutationExecute<Data = any, Variables extends AnyVariables = AnyVariables> = (
  variables: Variables,
  context?: Partial<OperationContext>
) => Promise<OperationResult<Data, Variables>>;

export type UseMutationResponse<Data = any, Variables extends AnyVariables = AnyVariables> = [
  UseMutationState<Data, Variables>,
  UseMutationExecute<Data, Variables>
];

interface UrqlBindings {
  Provider: (props: { client: Client; children: any }) => any;
  useQuery: <Data = any, Variables extends AnyVariables = AnyVariables>(
    args: UseQueryArgs<Variables, Data>
  ) => UseQueryResponse<Data, Variables>;
  useMutation: <Data = any, Variables extends AnyVariables = AnyVariables>(
    query: DocumentInput<Data, Variables>
  ) => UseMutationResponse<Data, Variables>;
}

export interface GadgetApiContext {
  api: AnyClient;
  connection: GadgetConnection;
}

export interface RuntimeAdapter {
  GadgetApiContext: Context<GadgetApiContext>;
  framework: FrameworkBindings;
  urql: UrqlBindings;
}
