import { jsx as _jsx } from "preact/jsx-runtime";
import { Provider as UrqlProvider, useMutation, useQuery } from "@urql/preact";
import deepEqual from "fast-deep-equal";
import { Fragment, createContext } from "preact";
import { useCallback, useContext, useEffect, useMemo, useReducer, useRef, useState } from "preact/hooks";
export const preactAdapter = {
    framework: {
        deepEqual,
        useEffect,
        useMemo,
        useRef,
        useState,
        useContext,
        createContext,
        useCallback,
        useReducer,
        Fragment,
    },
    urql: {
        Provider: (props) => _jsx(UrqlProvider, { value: props.client, children: props.children }),
        useQuery: (args) => useQuery(args),
        useMutation: (query) => useMutation(query),
    },
};
//# sourceMappingURL=adapter.js.map