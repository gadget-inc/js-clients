import type { AnyClient } from "@gadgetinc/core";
import type { ComponentChildren } from "preact";
export interface SessionToken {
    get: () => Promise<string>;
}
export declare const Provider: ({ api, sessionToken, children }: {
    api: AnyClient;
    sessionToken: SessionToken;
    children: ComponentChildren;
}) => import("preact").VNode<import("preact").Attributes & {
    api: AnyClient;
    children: import("preact").VNode<import("preact").Attributes & {
        value: import("./context.js").GadgetShopifyUIExtensionContextValue<AnyClient>;
        children?: ComponentChildren;
    }>;
}>;
