import type { AnyVariables, DocumentInput } from "@urql/core";
import { AnyCoreImplementation } from "../../core/dist/esm/AnyCoreImplementation.js";
import type { GadgetApiContext, RuntimeAdapter } from "./adapter.js";
import {
  CoreHooks,
  UseApi,
  UseConnection,
  UseCoreImplementation,
  UseGadgetMutation,
  UseGadgetQuery,
  UseGadgetQueryArgs,
  type QueryOptions,
} from "./types.js";
import { noProviderErrorMessage } from "./utils.js";

const RegisteredHooks: ((adapter: RuntimeAdapter, coreHooks: CoreHooks) => void)[] = [];

export const createHookStub = (hook: string, registerFn?: (adapter: RuntimeAdapter, coreHooks: CoreHooks) => void) => {
  if (registerFn) {
    RegisteredHooks.push(registerFn);
  }
  return () => {
    throw new Error(
      `You are attempting to use the ${hook} hook, but you are not calling it from a component that is wrapped in a Gadget <Provider/> component. Please ensure you are wrapping this hook with the <Provider/> component from either @gadgetinc/react or @gadgetinc/preact.`
    );
  };
};

export let useApi: UseApi = createHookStub("useApi");
export let useConnection: UseConnection = createHookStub("useConnection");
export let useCoreImplementation: UseCoreImplementation = createHookStub("useCoreImplementation");
export let useQuery: UseGadgetQuery = createHookStub("useQuery");
export let useMutation: UseGadgetMutation = createHookStub("useMutation");

export const createHooks = (adapter: RuntimeAdapter) => {
  const coreHooks = createCoreHooks(adapter);

  useQuery = coreHooks.useGadgetQuery;
  useMutation = coreHooks.useGadgetMutation;
  useApi = coreHooks.useApi;
  useConnection = coreHooks.useConnection;
  useCoreImplementation = coreHooks.useCoreImplementation;

  for (const registration of RegisteredHooks) {
    registration(adapter, coreHooks);
  }
};

const createCoreHooks = (adapter: RuntimeAdapter): CoreHooks => {
  const { GadgetApiContext } = adapter;

  const useConnection: UseConnection = () => {
    const { connection } = adapter.framework.useContext<GadgetApiContext>(GadgetApiContext);

    if (!connection) {
      throw new Error(
        `urql client found in context was not set up by the Gadget API client. Please ensure you are wrapping this hook with the <Provider/> component from either @gadgetinc/react or @gadgetinc/preact.
  
        Possible remedies:
         - ensuring you have the <Provider/> component wrapped around your hook invocation
         - ensuring you are passing a value to the provider, usually <Provider api={api}>
         - ensuring your @gadget-client/<your-app> package and your @gadgetinc/react or @gadgetinc/preact package are up to date`
      );
    }

    return connection;
  };

  const useApi: UseApi = () => {
    const { api } = adapter.framework.useContext<GadgetApiContext>(GadgetApiContext);

    if (!api) {
      throw new Error(
        `useApi hook called in context where no Gadget API client is available. Please ensure you are wrapping this hook with the <Provider/> component from @gadgetinc/react.
  
        Possible remedies:
         - ensuring you have the <Provider/> component wrapped around your hook invocation
         - ensuring you are passing an api client instance to the provider, usually <Provider api={api}>
         - ensuring your @gadget-client/<your-app> package and your @gadgetinc/react package are up to date`
      );
    }

    return api;
  };

  const useCoreImplementation: UseCoreImplementation = () => {
    const { api } = adapter.framework.useContext<GadgetApiContext>(GadgetApiContext);

    if (!api) {
      throw new Error(noProviderErrorMessage);
    }

    return (api as any)[Symbol.for("gadget/coreImplementation")] as AnyCoreImplementation;
  };

  const useMemoizedQueryOptions = <Options extends QueryOptions>(options?: Options): Options => {
    const { context: _context, suspense: _suspense, ...rest } = options ?? {};

    // use a memo as urql rerenders on context identity changes
    const context = adapter.framework.useMemo(() => {
      return {
        suspense: !!options?.suspense,
        ...options?.context,
      };
    }, [options?.suspense, options?.context]);

    return {
      ...rest,
      context,
    } as unknown as Options;
  };

  const useStructuralMemo = <T>(value: T) => {
    const ref = adapter.framework.useRef<T>(value);

    if (!adapter.framework.deepEqual(value, ref.current)) {
      ref.current = value;
    }

    return ref.current;
  };

  const useGadgetQuery = <Data = any, Variables extends AnyVariables = AnyVariables>(args: UseGadgetQueryArgs<Variables, Data>) => {
    if (!adapter.framework.useContext(GadgetApiContext)) throw new Error(noProviderErrorMessage);
    const options = useMemoizedQueryOptions(args);
    return adapter.urql.useQuery<Data, Variables>(options);
  };

  const useGadgetMutation = <Data = any, Variables extends AnyVariables = AnyVariables>(query: DocumentInput<Data, Variables>) => {
    if (!adapter.framework.useContext(GadgetApiContext)) throw new Error(noProviderErrorMessage);
    return adapter.urql.useMutation<Data, Variables>(query);
  };

  return {
    useConnection,
    useApi,
    useCoreImplementation,
    useStructuralMemo,
    useGadgetQuery,
    useGadgetMutation,
  };
};
