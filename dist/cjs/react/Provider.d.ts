import type { AnyClient } from "@gadgetinc/core";
import type { ReactNode } from "react";
import React from "react";
export interface SessionToken {
    get: () => Promise<string>;
}
export declare const Provider: ({ api, sessionToken, children }: {
    api: AnyClient;
    sessionToken: SessionToken;
    children: ReactNode;
}) => React.JSX.Element;
