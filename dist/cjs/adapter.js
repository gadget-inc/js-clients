"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.preactAdapter = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("preact/jsx-runtime");
const preact_1 = require("@urql/preact");
const fast_deep_equal_1 = tslib_1.__importDefault(require("fast-deep-equal"));
const preact_2 = require("preact");
const hooks_1 = require("preact/hooks");
exports.preactAdapter = {
    framework: {
        deepEqual: fast_deep_equal_1.default,
        useEffect: hooks_1.useEffect,
        useMemo: hooks_1.useMemo,
        useRef: hooks_1.useRef,
        useState: hooks_1.useState,
        useContext: hooks_1.useContext,
        createContext: preact_2.createContext,
        useCallback: hooks_1.useCallback,
        useReducer: hooks_1.useReducer,
        Fragment: preact_2.Fragment,
    },
    urql: {
        Provider: (props) => (0, jsx_runtime_1.jsx)(preact_1.Provider, { value: props.client, children: props.children }),
        useQuery: (args) => (0, preact_1.useQuery)(args),
        useMutation: (query) => (0, preact_1.useMutation)(query),
    },
};
//# sourceMappingURL=adapter.js.map