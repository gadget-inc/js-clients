"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHooks = exports.useMutation = exports.useQuery = exports.useCoreImplementation = exports.useConnection = exports.useApi = exports.createHookStub = exports.hookErrorMessage = void 0;
const core_1 = require("@gadgetinc/core");
const utils_js_1 = require("./utils.js");
const RegisteredHooks = [];
const hookErrorMessage = (hook) => `You are attempting to use the ${hook} hook, but you are not calling it from a component that is wrapped in a Gadget <Provider/> component. Please ensure you are wrapping this hook with the <Provider/> component from either @gadgetinc/react or @gadgetinc/preact.`;
exports.hookErrorMessage = hookErrorMessage;
const createHookStub = (hook, registerFn) => {
    if (registerFn) {
        RegisteredHooks.push(registerFn);
    }
    return () => {
        throw new Error((0, exports.hookErrorMessage)(hook));
    };
};
exports.createHookStub = createHookStub;
exports.useApi = (0, exports.createHookStub)("useApi");
exports.useConnection = (0, exports.createHookStub)("useConnection");
exports.useCoreImplementation = (0, exports.createHookStub)("useCoreImplementation");
exports.useQuery = (0, exports.createHookStub)("useQuery");
exports.useMutation = (0, exports.createHookStub)("useMutation");
const createHooks = (adapter) => {
    const coreHooks = createCoreHooks(adapter);
    exports.useQuery = coreHooks.useGadgetQuery;
    exports.useMutation = coreHooks.useGadgetMutation;
    exports.useApi = coreHooks.useApi;
    exports.useConnection = coreHooks.useConnection;
    exports.useCoreImplementation = coreHooks.useCoreImplementation;
    for (const registration of RegisteredHooks) {
        registration(adapter, coreHooks);
    }
};
exports.createHooks = createHooks;
const createCoreHooks = (adapter) => {
    const { GadgetApiContext } = adapter;
    const useConnection = () => {
        const { connection } = adapter.framework.useContext(GadgetApiContext);
        if (!connection) {
            throw new Error(`urql client found in context was not set up by the Gadget API client. Please ensure you are wrapping this hook with the <Provider/> component from either @gadgetinc/react or @gadgetinc/preact.
  
        Possible remedies:
         - ensuring you have the <Provider/> component wrapped around your hook invocation
         - ensuring you are passing a value to the provider, usually <Provider api={api}>
         - ensuring your @gadget-client/<your-app> package and your @gadgetinc/react or @gadgetinc/preact package are up to date`);
        }
        return connection;
    };
    const useApi = () => {
        const { api } = adapter.framework.useContext(GadgetApiContext);
        if (!api) {
            throw new Error(`useApi hook called in context where no Gadget API client is available. Please ensure you are wrapping this hook with the <Provider/> component from @gadgetinc/react.
  
        Possible remedies:
         - ensuring you have the <Provider/> component wrapped around your hook invocation
         - ensuring you are passing an api client instance to the provider, usually <Provider api={api}>
         - ensuring your @gadget-client/<your-app> package and your @gadgetinc/react package are up to date`);
        }
        return api;
    };
    const useCoreImplementation = () => {
        const { api } = adapter.framework.useContext(GadgetApiContext);
        if (!api) {
            throw new Error(utils_js_1.noProviderErrorMessage);
        }
        if (!api[core_1.$coreImplementation]) {
            throw new Error(`useCoreImplementation hook called in context where no Gadget core implementation is available. Please ensure you are wrapping this hook with the <Provider/> component from @gadgetinc/react.
  
        Possible remedies:
         - ensuring you have the <Provider/> component wrapped around your hook invocation
         - ensuring you are passing an api client instance to the provider, usually <Provider api={api}>
         - ensuring your @gadget-client/<your-app> package and your @gadgetinc/react package are up to date`);
        }
        return api[core_1.$coreImplementation];
    };
    const useMemoizedQueryOptions = (options) => {
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
        };
    };
    const useStructuralMemo = (value) => {
        const ref = adapter.framework.useRef(value);
        if (!adapter.framework.deepEqual(value, ref.current)) {
            ref.current = value;
        }
        return ref.current;
    };
    const useGadgetQuery = (args) => {
        if (!adapter.framework.useContext(GadgetApiContext))
            throw new Error(utils_js_1.noProviderErrorMessage);
        const options = useMemoizedQueryOptions(args);
        return adapter.urql.useQuery(options);
    };
    const useGadgetMutation = (query) => {
        if (!adapter.framework.useContext(GadgetApiContext))
            throw new Error(utils_js_1.noProviderErrorMessage);
        return adapter.urql.useMutation(query);
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
//# sourceMappingURL=createHooks.js.map