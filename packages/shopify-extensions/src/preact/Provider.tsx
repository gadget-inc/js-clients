import type { AnyClient } from "@gadgetinc/core";
import { Provider as GadgetPreactProvider } from "@gadgetinc/preact";
import type { ComponentChildren } from "preact";
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { registerShopifySessionTokenAuthentication } from "../index.js";
import { GadgetShopifyUIExtensionContext } from "./context.js";

export interface SessionToken {
  get: () => Promise<string>;
}

export const Provider = ({ api, sessionToken, children }: { api: AnyClient; sessionToken: SessionToken; children: ComponentChildren }) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    registerShopifySessionTokenAuthentication(api, sessionToken.get);
    setReady(true);
  }, [api, sessionToken]);

  return h(GadgetPreactProvider, { api, children: h(GadgetShopifyUIExtensionContext.Provider, { value: { api, ready }, children }) });
};
