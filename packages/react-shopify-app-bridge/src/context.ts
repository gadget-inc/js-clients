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
  /** Is the app being rendered outside of a Shopify admin flow, this only applies if type is set to AppType.Embedded. e.g. navigating to this page through a link */
  isRootFrameRequest: boolean;
  /** The provider must run some initialization code to determine its embedded state and this flag will be true once those are complete. */
  isReady: boolean;
};

const DefaultContext = {
  loading: false,
  isEmbedded: false,
  isAuthenticated: false,
  canAuth: false,
  appBridge: null,
  isRootFrameRequest: false,
  isReady: false,
};

export const GadgetAuthContext = createContext<GadgetAuthContextValue>(DefaultContext);

export const useGadget = () => {
  const context = useContext<GadgetAuthContextValue>(GadgetAuthContext);

  if (context === DefaultContext) {
    throw new Error("useGadget must be used within a Gadget Provider");
  }

  return context;
};
