import { createContext, useContext } from "react";

export type GadgetBigCommerceContextValue = {
  /** Is the Gadget BigCommerce provider loading */
  loading: boolean;
  /** Any error that occurred when booting up the Gadget BigCommerce provider */
  error?: Error;
  /** Is this browser window authenticated and ready to make requests to the Gadget backend */
  isAuthenticated: boolean;
  /** The hash of the BigCommerce store that has loaded the app */
  storeHash?: string;
  /** The id of the user that is currently using the app */
  userId?: string;
};

export const GadgetBigCommerceContext = createContext<GadgetBigCommerceContextValue>({
  loading: true,
  isAuthenticated: false,
});

export const useGadget = () => useContext<GadgetBigCommerceContextValue>(GadgetBigCommerceContext);
