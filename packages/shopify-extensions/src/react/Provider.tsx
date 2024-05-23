import type { AnyClient } from "@gadgetinc/api-client-core";
import { Provider as GadgetReactProvider } from "@gadgetinc/react";
import type { ReactNode } from "react";
import React, { useEffect, useState } from "react";
import { registerShopifySessionTokenAuthentication } from "../index.js";
import { GadgetShopifyUIExtensionContext } from "./index.js";

export interface SessionToken {
  get: () => Promise<string>;
}

export const Provider = ({ api, sessionToken, children }: { api: AnyClient; sessionToken: SessionToken; children: ReactNode }) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    registerShopifySessionTokenAuthentication(api, sessionToken.get);
    setReady(true);
  }, [api, sessionToken]);

  return (
    <GadgetReactProvider api={api}>
      <GadgetShopifyUIExtensionContext.Provider value={{ api, ready }}>{children}</GadgetShopifyUIExtensionContext.Provider>
    </GadgetReactProvider>
  );
};
