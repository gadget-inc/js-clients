import type { Client, DocumentInput } from "@urql/core";
import { Provider as UrqlProvider, UseQueryArgs, useMutation, useQuery } from "@urql/preact";
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
    Provider: (props: { client: Client; children: any }) => <UrqlProvider value={props.client}>{props.children}</UrqlProvider>,
    useQuery: (args: UseQueryArgs<any, any>) => useQuery(args),
    useMutation: (query: DocumentInput<any, any>) => useMutation(query),
  },
};
