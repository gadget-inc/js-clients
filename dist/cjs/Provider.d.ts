import type { AnyClient } from "@gadgetinc/core";
import type { ReactNode } from "react";
import React from "react";
export declare const Provider: ({ children, api }: {
    children: ReactNode;
    api: AnyClient;
}) => React.JSX.Element;
