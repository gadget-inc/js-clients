/// <reference types="react" />
import type { AnyClient } from "@gadgetinc/api-client-core";
export type GadgetShopifyUiExtensionContextValue = {
    /** Whether or not the api client is ready to make requests to with Shopify session token authentication */
    ready: boolean;
    /** An instance of the Gadget application's api client set up to use Shopify session token authentication */
    api: AnyClient;
};
export declare const GadgetShopifyUiExtensionContext: import("react").Context<GadgetShopifyUiExtensionContextValue>;
export declare const useGadget: () => GadgetShopifyUiExtensionContextValue;
