"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockGraphQLWSClient = exports.mockUrqlClient = exports.createMockUrqlClient = exports.graphqlDocumentName = exports.withPromise = exports.setAct = void 0;
const tslib_1 = require("tslib");
const globals_1 = require("@jest/globals");
const core_1 = require("@urql/core");
const lodash_es_1 = require("lodash-es");
const p_retry_1 = tslib_1.__importDefault(require("p-retry"));
const wonka_1 = require("wonka");
let act = async (fn) => {
    return await fn();
};
const setAct = (actFn) => {
    act = actFn;
};
exports.setAct = setAct;
/** Patches a `toPromise` method onto the `Source` passed to it.
 * @param source$ - the Wonka {@link Source} to patch.
 * @returns The passed `source$` with a patched `toPromise` method as a {@link PromisifiedSource}.
 * copied from https://github.com/urql-graphql/urql/blob/656495100ea3861075b70b48516b10914efbcfd6/packages/core/src/utils/streamUtils.ts#L10
 */
function withPromise(_source$) {
    const source$ = ((sink) => _source$(sink));
    source$.toPromise = () => (0, wonka_1.pipe)(source$, (0, wonka_1.filter)((result) => !result.stale && !result.hasNext), (0, wonka_1.take)(1), wonka_1.toPromise);
    source$.then = (onResolve, onReject) => source$.toPromise().then(onResolve, onReject);
    source$.subscribe = (onResult) => (0, wonka_1.subscribe)(onResult)(source$);
    return source$;
}
exports.withPromise = withPromise;
const $gadgetConnection = Symbol.for("gadget/connection");
const graphqlDocumentName = (doc) => {
    const lastDefinition = (0, lodash_es_1.findLast)(doc.definitions, { kind: "OperationDefinition" });
    if (lastDefinition) {
        if (lastDefinition.name) {
            return lastDefinition.name.value;
        }
        const firstSelection = (0, lodash_es_1.find)(lastDefinition.selectionSet.selections, { kind: "Field" });
        return firstSelection.name.value;
    }
};
exports.graphqlDocumentName = graphqlDocumentName;
/**
 * Create a new function for reading/writing to a mock graphql backend
 */
const newMockOperationFn = (assertions) => {
    const subjects = {};
    const fn = globals_1.jest.fn((request, options) => {
        var _a, _b;
        const { query } = request;
        const fetchOptions = options === null || options === void 0 ? void 0 : options.fetchOptions;
        const key = (_a = (0, exports.graphqlDocumentName)(query)) !== null && _a !== void 0 ? _a : "unknown";
        (_b = subjects[key]) !== null && _b !== void 0 ? _b : (subjects[key] = (0, wonka_1.makeSubject)());
        if (fetchOptions && typeof fetchOptions != "function") {
            const signal = fetchOptions.signal;
            if (signal) {
                signal.addEventListener("abort", () => {
                    subjects[key].next((0, core_1.makeErrorResult)(null, new Error("AbortError")));
                });
            }
        }
        if (assertions) {
            assertions(request);
        }
        return withPromise(subjects[key].source);
    });
    fn.subjects = subjects;
    fn.pushResponse = (key, response) => {
        if (!subjects[key]) {
            throw new Error(`No mock client subject started for key ${key}, options are ${Object.keys(subjects).join(", ")}`);
        }
        act(() => {
            subjects[key].next({
                operation: null,
                ...response,
            });
            if (!response.hasNext) {
                subjects[key].complete();
                delete subjects[key];
            }
        });
    };
    fn.waitForSubject = async (key, options) => {
        await (0, p_retry_1.default)(() => {
            if (subjects[key]) {
                return;
            }
            throw new Error(`No mock client subject started for key ${key}, options are ${Object.keys(subjects).join(", ")}`);
        }, (0, lodash_es_1.defaults)(options, {
            attempts: 20,
            minTimeout: 10,
            maxTimeout: 250,
        }));
    };
    return fn;
};
/**
 * Create a new function for reading/writing to a mock graphql backend
 */
const newMockFetchFn = () => {
    const requests = [];
    const fn = globals_1.jest.fn((...args) => {
        return new Promise((resolve, reject) => {
            var _a;
            const signal = (_a = args[1]) === null || _a === void 0 ? void 0 : _a.signal;
            const request = {
                args,
                resolve,
                reject,
            };
            if (signal) {
                signal.addEventListener("abort", () => {
                    const idx = requests.findIndex((r) => r === request);
                    if (idx !== -1) {
                        request.reject(new Error("AbortError: The user aborted a request."));
                        requests.splice(idx, 1);
                    }
                });
            }
            requests.push(request);
        });
    });
    fn.requests = requests;
    fn.pushResponse = async (response) => {
        await act(async () => {
            var _a;
            const request = requests.shift();
            if (!request) {
                throw new Error("no requests started for response pushing");
            }
            const signal = (_a = request.args[1]) === null || _a === void 0 ? void 0 : _a.signal;
            if (signal && signal.aborted) {
                throw new Error("signal on request has been aborted, can't respond to a mock fetch that has been aborted");
            }
            await request.resolve(response);
        });
    };
    fn.waitForRequest = async (options) => {
        const requestCount = requests.length;
        await act(async () => {
            await (0, p_retry_1.default)(async () => {
                if (requests.length > requestCount) {
                    return;
                }
                throw new Error("request not found");
            }, (0, lodash_es_1.defaults)(options, {
                attempts: 20,
                minTimeout: 10,
                maxTimeout: 250,
            }));
        });
    };
    return fn;
};
const createMockUrqlClient = (assertions) => {
    const fetch = newMockFetchFn();
    return {
        executeQuery: newMockOperationFn(assertions === null || assertions === void 0 ? void 0 : assertions.queryAssertions),
        executeMutation: newMockOperationFn(assertions === null || assertions === void 0 ? void 0 : assertions.mutationAssertions),
        executeSubscription: newMockOperationFn(),
        [$gadgetConnection]: {
            fetch,
        },
        mockFetch: fetch,
        suspense: true,
        query(query, variables, context) {
            return this.executeQuery((0, core_1.createRequest)(query, variables), context);
        },
        subscription(query, variables, context) {
            return this.executeSubscription((0, core_1.createRequest)(query, variables), context);
        },
        mutation(query, variables, context) {
            return this.executeMutation((0, core_1.createRequest)(query, variables), context);
        },
    };
};
exports.createMockUrqlClient = createMockUrqlClient;
/**
 * Create a new function for mocking subscriptions passed to graphql-ws
 */
function newMockSubscribeFn() {
    const subscriptions = [];
    const fn = (payload, sink) => {
        const subscription = {
            payload,
            sink,
            disposed: false,
            push: (result) => {
                act(() => {
                    sink.next(result);
                });
            },
        };
        subscriptions.push(subscription);
        return () => {
            subscription.disposed = true;
        };
    };
    return Object.assign(fn, { subscriptions });
}
exports.mockUrqlClient = (0, exports.createMockUrqlClient)();
exports.mockGraphQLWSClient = {};
beforeEach(() => {
    const fetch = newMockFetchFn();
    exports.mockUrqlClient.executeQuery = newMockOperationFn();
    exports.mockUrqlClient.executeMutation = newMockOperationFn();
    exports.mockUrqlClient.executeSubscription = newMockOperationFn();
    exports.mockUrqlClient[$gadgetConnection] = {
        fetch,
    };
    exports.mockUrqlClient.mockFetch = fetch;
    exports.mockGraphQLWSClient.subscribe = newMockSubscribeFn();
});
afterEach(() => {
    // force clear _react, which useQuery sets on the client if not present
    exports.mockUrqlClient._react = undefined;
    globals_1.jest.clearAllMocks();
});
//# sourceMappingURL=mockUrqlClient.js.map