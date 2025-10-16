import type { AnyClient } from "@gadgetinc/core";

export const registerShopifySessionTokenAuthentication = (api: AnyClient, getShopifySessionToken: () => string | Promise<string>) => {
  api.connection.setAuthenticationMode({
    custom: {
      async processFetch(_input: RequestInfo | URL, init: RequestInit) {
        const token = await getShopifySessionToken();
        const headers = new Headers(init.headers);
        headers.append("Authorization", `ShopifySessionToken ${token}`);
        init.headers ??= {};
        headers.forEach((value, key) => {
          (init.headers as Record<string, string>)[key] = value;
        });
      },
      async processTransactionConnectionParams(params: Record<string, any>) {
        const token = await getShopifySessionToken();
        params.auth.shopifySessionToken = token;
      },
    },
  });
};
