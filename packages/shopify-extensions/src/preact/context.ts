import type { AnyClient } from "@gadgetinc/core";
import type { Context } from "preact";
import { createContext } from "preact";
import { useContext } from "preact/hooks";

export type GadgetShopifyUIExtensionContextValue<Client extends AnyClient = AnyClient> = {
  /** Whether or not the api client is ready to make requests to with Shopify session token authentication */
  ready: boolean;
  /** An instance of your Gadget app's api client, which has been set up to use Shopify session token authentication */
  api: Client;
};

export const GadgetShopifyUIExtensionContext = createContext<GadgetShopifyUIExtensionContextValue>({
  ready: false,
  api: null as unknown as AnyClient,
});

export const useGadget = <Client extends AnyClient = AnyClient>() =>
  useContext<GadgetShopifyUIExtensionContextValue<Client>>(
    GadgetShopifyUIExtensionContext as unknown as Context<GadgetShopifyUIExtensionContextValue<Client>>
  );
