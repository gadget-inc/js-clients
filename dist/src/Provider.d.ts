import type { AnyClient } from "@gadgetinc/api-client-core";
import type { History, LocationOrHref } from "@shopify/app-bridge-react";
import React from "react";
export declare enum AppType {
    Standalone = 0,
    Embedded = 1
}
export declare const Provider: ({ type, children, shopifyApiKey, api, router, }: {
    type?: AppType | undefined;
    children: JSX.Element | JSX.Element[];
    shopifyApiKey: string;
    api: AnyClient;
    router?: {
        location: LocationOrHref;
        history: History;
    } | undefined;
}) => React.JSX.Element;
