import type { AnyClient } from "@gadgetinc/api-client-core";
import type { ReactNode } from "react";
import React from "react";
/** Get the backend auth token for the current widget using the special __getGadgetAuthTokenV1 backend tool */
export declare const getToken: () => Promise<string>;
/**
 * React Provider that ChatGPT Apps Widgets should be wrapped in to make calls to the Gadget backend.
 */
export declare const Provider: ({ children, api }: {
    children: ReactNode;
    api: AnyClient;
}) => React.JSX.Element;
