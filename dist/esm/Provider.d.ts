import type { AnyClient } from "@gadgetinc/api-client-core";
import type { ReactNode } from "react";
import React from "react";
export declare enum AppType {
    Standalone = 0,
    Embedded = 1
}
type LocationObject = {
    pathname: string;
    search: string;
};
export declare const Provider: ({ type, children, api, location: _location, }: {
    type?: AppType;
    children: ReactNode;
    shopifyApiKey: string;
    api: AnyClient;
    location?: LocationObject;
}) => React.JSX.Element;
export {};
