import * as React from "react";
import deepEqual from "react-fast-compare";
import { Provider as UrqlProvider, useMutation, useQuery } from "urql";
export const reactAdapter = {
    framework: {
        deepEqual,
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
        Provider: (props) => React.createElement(UrqlProvider, { value: props.client }, props.children),
        useQuery: (args) => useQuery(args),
        useMutation: (query) => useMutation(query),
    },
};
//# sourceMappingURL=adapter.js.map