"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reactAdapter = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_fast_compare_1 = tslib_1.__importDefault(require("react-fast-compare"));
const urql_1 = require("urql");
exports.reactAdapter = {
    framework: {
        deepEqual: react_fast_compare_1.default,
        useEffect: React.useEffect,
        useMemo: React.useMemo,
        useRef: React.useRef,
        useState: React.useState,
        useContext: React.useContext,
        createContext: React.createContext,
        useCallback: React.useCallback,
        useReducer: React.useReducer,
        Fragment: React.Fragment,
    },
    urql: {
        Provider: (props) => React.createElement(urql_1.Provider, { value: props.client }, props.children),
        useQuery: (args) => (0, urql_1.useQuery)(args),
        useMutation: (query) => (0, urql_1.useMutation)(query),
    },
};
//# sourceMappingURL=adaptor.js.map