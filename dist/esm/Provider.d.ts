import type { AnyClient } from "@gadgetinc/api-client-core";
import type { ReactNode } from "react";
import React from "react";
export declare enum AppType {
    Standalone = 0,
    Embedded = 1
}
export declare const Provider: ({ type, children, api }: {
    type?: AppType | undefined;
    children: ReactNode;
    shopifyApiKey: string;
    api: AnyClient;
}) => React.JSX.Element;
