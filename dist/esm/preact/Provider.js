import { Provider as GadgetPreactProvider } from "@gadgetinc/preact";
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { registerShopifySessionTokenAuthentication } from "../index.js";
import { GadgetShopifyUIExtensionContext } from "./context.js";
export const Provider = ({ api, sessionToken, children }) => {
    const [ready, setReady] = useState(false);
    useEffect(() => {
        registerShopifySessionTokenAuthentication(api, sessionToken.get);
        setReady(true);
    }, [api, sessionToken]);
    return h(GadgetPreactProvider, { api, children: h(GadgetShopifyUIExtensionContext.Provider, { value: { api, ready }, children }) });
};
//# sourceMappingURL=Provider.js.map