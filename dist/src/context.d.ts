import type { AppBridgeState, ClientApplication } from "@shopify/app-bridge";
import type { AppType } from "./Provider";
export type GadgetAuthContextValue = {
    /** Is the AppBridge provider or the Gadget auth system loading or redirecting the user to make requests elsewhere */
    loading: boolean;
    /** Any error that occurred when booting up the App Bridge or Gadget Auth provider */
    error?: Error;
    /** What kind of application is this Gadget provider configured to power */
    appType?: AppType;
    /** The current embedding state of this JS context. Will return true if running inside the iframe in the Shopify Admin, false otherwise */
    isEmbedded: boolean;
    /** An instance of the AppBridge object. Only available in embedded contexts. */
    appBridge: ClientApplication<AppBridgeState> | null;
    /** Is this browser window ready to authenticate in the current state */
    canAuth: boolean;
    /** Is this browser window authenticated and ready to make requests to the Gadget backend */
    isAuthenticated: boolean;
    /** Is the app being rendered outside of a Shopify admin flow, this only applies if type is set to AppType.Embedded. e.g. navigating to this page through a link */
    isRootFrameRequest: boolean;
};
export declare const GadgetAuthContext: import("react").Context<GadgetAuthContextValue>;
export declare const useGadget: () => GadgetAuthContextValue;
