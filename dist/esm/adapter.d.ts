import type { Client, DocumentInput } from "@urql/core";
import * as React from "react";
import deepEqual from "react-fast-compare";
import type { UseQueryArgs } from "urql";
export declare const reactAdapter: {
    framework: {
        deepEqual: typeof deepEqual;
        useEffect: typeof React.useEffect;
        useMemo: typeof React.useMemo;
        useRef: typeof React.useRef;
        useState: typeof React.useState;
        useContext: typeof React.useContext;
        createContext: typeof React.createContext;
        useCallback: typeof React.useCallback;
        useReducer: typeof React.useReducer;
        Fragment: React.ExoticComponent<React.FragmentProps>;
    };
    urql: {
        Provider: (props: {
            client: Client;
            children: React.ReactNode;
        }) => React.JSX.Element;
        useQuery: (args: UseQueryArgs<any, any>) => import("urql").UseQueryResponse<any, any>;
        useMutation: (query: DocumentInput<any, any>) => import("urql").UseMutationResponse<any, any>;
    };
};
