import { Provider as GadgetUrqlProvider } from "@gadgetinc/react";
import React, { useEffect, useState } from "react";
export const Provider = ({ children, api }) => {
    const [location, setLocation] = useState(null);
    const isReady = !!location;
    const { query } = location ?? {};
    const session = query?.get("session") ?? undefined;
    const gadgetAppUrl = new URL(api.connection.options.endpoint).origin;
    useEffect(() => {
        setLocation({
            query: new URLSearchParams(window.location.search),
        });
    }, []);
    console.debug("[gadget-react-big-commerce] provider rendering", {
        location,
        isReady,
        session,
        gadgetAppUrl,
    });
    return React.createElement(GadgetUrqlProvider, { api: api }, children);
};
//# sourceMappingURL=Provider.js.map