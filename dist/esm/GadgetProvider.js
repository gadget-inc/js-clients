import { jsx as _jsx } from "preact/jsx-runtime";
import { registerClientHooks } from "@gadgetinc/client-hooks";
import { Provider as UrqlProvider } from "@urql/preact";
import { createContext } from "preact";
import { preactAdapter } from "./adapter.js";
const GadgetApiContext = createContext(null);
export function Provider(props) {
    const { gadgetClient, gadgetConnection, urqlClient } = registerClientHooks(props.api, { ...preactAdapter, GadgetApiContext });
    return (_jsx(GadgetApiContext.Provider, { value: {
            api: gadgetClient,
            connection: gadgetConnection,
        }, children: _jsx(UrqlProvider, { value: urqlClient, children: props.children }) }));
}
//# sourceMappingURL=GadgetProvider.js.map