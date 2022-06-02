import { AppBridgeState, ClientApplication } from "@shopify/app-bridge";
import { createContext, useContext } from "react";
import { AppType } from "./index";

export type GadgetContext = {
  loading: boolean;
  appType?: AppType;
  isEmbedded: boolean;
  appBridge?: ClientApplication<AppBridgeState>;
  canAuth: boolean;
  isAuthenticated: boolean;
};

export const GadgetAuthContext = createContext({
  loading: false,
  isEmbedded: false,
  isAuthenticated: false,
  canAuth: false,
});

export const useGadgetContext = () => useContext<GadgetContext>(GadgetAuthContext);
