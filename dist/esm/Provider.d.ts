import type { AnyClient } from "@gadgetinc/api-client-core";
import type { ReactNode } from "react";
import React from "react";
export declare enum AppType {
    Standalone = 0,
    Embedded = 1
}
type ShopifyInstallState = NonNullable<NonNullable<Window["gadgetConfig"]>["shopifyInstallState"]>;
type LocationObject = {
    pathname: string;
    search: string;
};
export declare const Provider: ({ type, children, api, location: _location, shopifyInstallState, }: {
    type?: AppType;
    children: ReactNode;
    shopifyApiKey: string;
    api: AnyClient;
    location?: LocationObject;
    shopifyInstallState?: ShopifyInstallState;
}) => React.JSX.Element;
export {};
