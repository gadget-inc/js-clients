/// <reference types="react" />
export type GadgetAuthContextValue = {
    /** Is the Gadget BigCommerce provider loading */
    loading: boolean;
    /** Any error that occurred when booting up the Gadget BigCommerce provider */
    error?: Error;
    /** Is this browser window authenticated and ready to make requests to the Gadget backend */
    isAuthenticated: boolean;
};
export declare const GadgetAuthContext: import("react").Context<GadgetAuthContextValue>;
export declare const useGadget: () => GadgetAuthContextValue;
