import type { Client, DocumentInput } from "@urql/core";
import { type UseQueryArgs } from "@urql/preact";
import { createContext } from "preact";
import { useCallback, useContext, useEffect, useMemo, useReducer, useRef, useState } from "preact/hooks";
export declare const preactAdapter: {
    framework: {
        deepEqual: (a: any, b: any) => boolean;
        useEffect: typeof useEffect;
        useMemo: typeof useMemo;
        useRef: typeof useRef;
        useState: typeof useState;
        useContext: typeof useContext;
        createContext: typeof createContext;
        useCallback: typeof useCallback;
        useReducer: typeof useReducer;
        Fragment: import("preact").FunctionComponent<{}>;
    };
    urql: {
        Provider: (props: {
            client: Client;
            children: any;
        }) => import("preact").JSX.Element;
        useQuery: (args: UseQueryArgs<any, any>) => import("@urql/preact").UseQueryResponse<any, any>;
        useMutation: (query: DocumentInput<any, any>) => import("@urql/preact").UseMutationResponse<any, any>;
    };
};
