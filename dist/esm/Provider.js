import { BrowserSessionStorageType } from "@gadgetinc/api-client-core";
import { Provider as GadgetUrqlProvider, useQuery } from "@gadgetinc/react";
import React, { useEffect, useState } from "react";
import { GadgetAuthContext } from "./index.js";
const BigCommerceSessionQuery = `
  query BigCommerceSession {
    currentSession {
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
            return;
        }
        api.connection.setAuthenticationMode({
            browserSession: {
                storageType: BrowserSessionStorageType.Temporary,
                initialToken: sessionToken,
            },
        });
    }, [api, sessionToken]);
    const isAuthenticated = !!data?.currentSession?.roles?.some((role) => role.key === "Role-BigCommerce-App");
    const userId = data?.currentSession?.bigCommerceUserId ?? undefined;
    const storeHash = data?.currentSession?.bigCommerceStore?.storeHash ?? undefined;
    useEffect(() => {
        if (!isAuthenticated) {
            return;
        }
        const BigCommerce = window.Bigcommerce;
        if (!BigCommerce) {
            console.warn("[gadget-react-big-commerce] BigCommerce global not found, not initializing BigCommerce SDK");
            return;
        }
        console.debug("[gadget-react-big-commerce] initializing BigCommerce SDK");
        BigCommerce.init();
    }, [isAuthenticated]);
    console.debug("[gadget-react-big-commerce] provider rendering", {
        locationLoaded,
        sessionToken,
        data,
        fetching,
        error,
        isAuthenticated,
        userId,
        storeHash,
    });
    return (React.createElement(GadgetAuthContext.Provider, { value: {
            loading: !locationLoaded || fetching,
            error,
            isAuthenticated,
            userId,
            storeHash,
        } }, props.children));
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