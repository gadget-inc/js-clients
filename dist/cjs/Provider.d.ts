import type { AnyClient } from "@gadgetinc/api-client-core";
import type { ReactNode } from "react";
import React from "react";
export declare enum AppType {
    Standalone = 0,
    Embedded = 1
}
type ShopifyInstallState = NonNullable<NonNullable<Window["gadgetConfig"]>["shopifyInstallState"]>;
export declare const Provider: ({ type, children, api, location: _location, shopifyInstallState, }: {
    type?: AppType;
    children: ReactNode;
    shopifyApiKey: string;
    api: AnyClient;
    location?: Pick<Window["location"], "pathname" | "search">;
    shopifyInstallState?: ShopifyInstallState;
}) => React.JSX.Element;
export {};
