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
    /**
     * The location object to use for the provider. This is required in server-side rendering.
     *
     * By default, the provider will use the current window location object.
     * */
    location?: Pick<Window["location"], "pathname" | "search">;
    /**
     * Manually specify the Shopify install state.
     * This can be useful when the install state is known before the provider is rendered or in server-side rendering to skip some of the initial checks.
     *
     * By default, the provider will look for the state in the `window.gadgetConfig.shopifyInstallState` object.
     * */
    shopifyInstallState?: ShopifyInstallState;
}) => React.JSX.Element;
export {};
