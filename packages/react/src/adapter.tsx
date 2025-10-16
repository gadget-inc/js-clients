import type { Client, DocumentInput } from "@urql/core";
import * as React from "react";
import deepEqual from "react-fast-compare";
import type { UseQueryArgs } from "urql";
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
    Provider: (props: { client: Client; children: React.ReactNode }) => <UrqlProvider value={props.client}>{props.children}</UrqlProvider>,
    useQuery: (args: UseQueryArgs<any, any>) => useQuery(args),
    useMutation: (query: DocumentInput<any, any>) => useMutation(query),
  },
};
