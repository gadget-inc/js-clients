import { AppBridgeState, ClientApplication } from "@shopify/app-bridge";
import { createContext, useContext } from "react";
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
};

export const GadgetAuthContext = createContext<GadgetAuthContextValue>({
  loading: false,
  isEmbedded: false,
  isAuthenticated: false,
  canAuth: false,
  appBridge: null,
});

export const useGadget = () => useContext<GadgetAuthContextValue>(GadgetAuthContext);
