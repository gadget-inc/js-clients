"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHooks = void 0;
const GadgetConnection_js_1 = require("./GadgetConnection.js");
const createContexts_js_1 = require("./createContexts.js");
const utils_js_1 = require("./hooks/utils.js");
const createHooks = (adapter) => {
    const { GadgetUrqlClientContext, GadgetConfigurationContext } = (0, createContexts_js_1.createContexts)(adapter);
    const useConnection = () => {
        const urqlClient = adapter.framework.useContext(GadgetUrqlClientContext);
        if (!urqlClient)
            throw new Error(utils_js_1.noProviderErrorMessage);
        const connection = urqlClient[GadgetConnection_js_1.$gadgetConnection];
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
        const gadgetContext = adapter.framework.useContext(GadgetConfigurationContext);
        const urqlClient = adapter.framework.useContext(GadgetUrqlClientContext);
        if (!gadgetContext || !gadgetContext.api) {
            if (urqlClient) {
                throw new Error(`useApi hook called in context with deprecated <Provider/> convention. Please ensure you are wrapping this hook with the <Provider/> component from @gadgetinc/react and passing it an instance of your api client, like <Provider api={api} />.
  
          The <Provider /> component is currently being passed a value, like <Provider value={api.connection.currentClient}/>. Please update this to <Provider api={api} />.`);
            }
            else {
                throw new Error(`useApi hook called in context where no Gadget API client is available. Please ensure you are wrapping this hook with the <Provider/> component from @gadgetinc/react.
  
        Possible remedies:
         - ensuring you have the <Provider/> component wrapped around your hook invocation
         - ensuring you are passing an api client instance to the provider, usually <Provider api={api}>
         - ensuring your @gadget-client/<your-app> package and your @gadgetinc/react package are up to date`);
            }
        }
        return gadgetContext.api;
    };
    const useMemoizedQueryOptions = (options) => {
        const { context: _context, suspense: _suspense, ...rest } = options !== null && options !== void 0 ? options : {};
        // use a memo as urql rerenders on context identity changes
        const context = adapter.framework.useMemo(() => {
            return {
                suspense: !!(options === null || options === void 0 ? void 0 : options.suspense),
                ...options === null || options === void 0 ? void 0 : options.context,
            };
        }, [options === null || options === void 0 ? void 0 : options.suspense, options === null || options === void 0 ? void 0 : options.context]);
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
    const useDebouncedSearch = (props) => {
        const { onDebouncedSearchValueChange, debounceMilliseconds } = props;
        const [searchValue, setSearchValue] = adapter.framework.useState("");
        const [debouncedSearchValue, setDebouncedSearchValue] = adapter.framework.useState("");
        const debouncedSetSearchValue = adapter.framework.useCallback((0, utils_js_1.debounce)((query) => {
            setDebouncedSearchValue(query);
            onDebouncedSearchValueChange === null || onDebouncedSearchValueChange === void 0 ? void 0 : onDebouncedSearchValueChange();
        }, debounceMilliseconds), []);
        const search = {
            value: searchValue,
            debouncedValue: debouncedSearchValue,
            set: (query) => {
                setSearchValue(query);
                debouncedSetSearchValue(query);
            },
            clear: () => {
                // Instant without debounce
                setSearchValue("");
                setDebouncedSearchValue("");
                onDebouncedSearchValueChange === null || onDebouncedSearchValueChange === void 0 ? void 0 : onDebouncedSearchValueChange();
            },
        };
        return search;
    };
    const useGadgetQuery = (args) => {
        if (!adapter.framework.useContext(GadgetUrqlClientContext))
            throw new Error(utils_js_1.noProviderErrorMessage);
        const options = useMemoizedQueryOptions(args);
        return adapter.urql.useQuery(options);
    };
    const useGadgetMutation = (query) => {
        if (!adapter.framework.useContext(GadgetUrqlClientContext))
            throw new Error(utils_js_1.noProviderErrorMessage);
        return adapter.urql.useMutation(query);
    };
    return {
        useConnection,
        useApi,
        useStructuralMemo,
        useGadgetQuery,
        useGadgetMutation,
    };
};
exports.createHooks = createHooks;
//# sourceMappingURL=createHooks.js.map