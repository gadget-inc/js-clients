import { BrowserSessionStorageType } from "@gadgetinc/api-client-core";
import { Provider as GadgetUrqlProvider, useQuery } from "@gadgetinc/react";
import React, { useEffect, useState } from "react";
const BigCommerceSessionQuery = `
  query BigCommerceSession {
    currentSession {
      id
      bigCommerceUserId
      bigCommerceStore {
        storeHash
      }
      roles {
        key
      }
    }
  }
`;
const InnerProvider = (props) => {
    const { api, locationLoaded, sessionToken } = props;
    const [{ data, fetching, error }] = useQuery({
        query: BigCommerceSessionQuery,
        pause: !locationLoaded,
    });
    useEffect(() => {
        if (!sessionToken) {
            console.log("[gadget-react-big-commerce] no session token, skipping auth setup");
        }
        api.connection.setAuthenticationMode({
            browserSession: {
                storageType: BrowserSessionStorageType.Temporary,
                initialToken: sessionToken,
            },
        });
    }, [api, sessionToken]);
    console.debug("[gadget-react-big-commerce] provider rendering", {
        locationLoaded,
        sessionToken,
        data,
        fetching,
        error,
    });
    return React.createElement(React.Fragment, null, props.children);
};
export const Provider = ({ children, api }) => {
    const [location, setLocation] = useState(null);
    const locationLoaded = !!location;
    const { query } = location ?? {};
    const session = query?.get("session") ?? undefined;
    useEffect(() => {
        setLocation({
            query: new URLSearchParams(window.location.search),
        });
    }, []);
    return (React.createElement(GadgetUrqlProvider, { api: api },
        React.createElement(InnerProvider, { api: api, sessionToken: session, locationLoaded: locationLoaded }, children)));
};
//# sourceMappingURL=Provider.js.map