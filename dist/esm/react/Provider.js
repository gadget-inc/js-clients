import { Provider as GadgetReactProvider } from "@gadgetinc/react";
import React, { useEffect, useState } from "react";
import { registerShopifySessionTokenAuthentication } from "../index.js";
import { GadgetShopifyUiExtensionContext } from "./index.js";
export const Provider = ({ api, sessionToken, children }) => {
    const [ready, setReady] = useState(false);
    useEffect(() => {
        registerShopifySessionTokenAuthentication(api, sessionToken.get);
        setReady(true);
    }, [api, sessionToken]);
    return (React.createElement(GadgetReactProvider, { api: api },
        React.createElement(GadgetShopifyUiExtensionContext.Provider, { value: { api, ready } }, children),
        ";"));
};
//# sourceMappingURL=Provider.js.map