"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerShopifySessionTokenAuthentication = void 0;
const registerShopifySessionTokenAuthentication = (api, getShopifySessionToken) => {
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
exports.registerShopifySessionTokenAuthentication = registerShopifySessionTokenAuthentication;
//# sourceMappingURL=utils.js.map