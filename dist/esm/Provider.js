import { Provider as GadgetUrqlProvider, useQuery } from "@gadgetinc/react";
import React, { useEffect, useState } from "react";
const BigCommerceSessionQuery = `
  query BigCommerceSession($session: String!) {
    currentSession {
      id
      bigCommerceUserId
      bigCommerceStore {
        storeHash
      }
      roles
    }
  }
`;
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
    const [{ data, fetching, error }] = useQuery({
        query: BigCommerceSessionQuery,
    });
    console.debug("[gadget-react-big-commerce] provider rendering", {
        location,
        isReady,
        session,
        gadgetAppUrl,
        data,
        fetching,
        error,
    });
    return React.createElement(GadgetUrqlProvider, { api: api }, children);
};
//# sourceMappingURL=Provider.js.map