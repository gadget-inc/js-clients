import type { AnyClient } from "@gadgetinc/api-client-core";

export const registerShopifySessionTokenAuthentication = (api: AnyClient, getShopifySessionToken: () => string | Promise<string>) => {
  api.connection.setAuthenticationMode({
    custom: {
      async processFetch(_input, init) {
        const token = await getShopifySessionToken();
        const headers = new Headers(init.headers);
        headers.append("Authorization", `ShopifySessionToken ${token}`);
        init.headers ??= {};
        headers.forEach((value, key) => {
          (init.headers as Record<string, string>)[key] = value;
        });
      },
      async processTransactionConnectionParams(params) {
        const token = await getShopifySessionToken();
        params.auth.shopifySessionToken = token;
      },
    },
  });
};
