export const registerShopifySessionTokenAuthentication = (api, getShopifySessionToken) => {
    api.connection.setAuthenticationMode({
        custom: {
            async processFetch(_input, init) {
                const token = await getShopifySessionToken();
                const headers = new Headers(init.headers);
                headers.append("Authorization", `ShopifySessionToken ${token}`);
                init.headers ?? (init.headers = {});
                headers.forEach((value, key) => {
                    init.headers[key] = value;
                });
            },
            async processTransactionConnectionParams(params) {
                const token = await getShopifySessionToken();
                params.auth.shopifySessionToken = token;
            },
        },
    });
};
//# sourceMappingURL=utils.js.map