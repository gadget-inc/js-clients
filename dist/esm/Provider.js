import { Provider as GadgetUrqlProvider, useQuery } from "@gadgetinc/react";
import React, { useEffect, useMemo } from "react";
import { GadgetBigCommerceContext } from "./index.js";
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
    const { api, sessionToken } = props;
    const [{ data, fetching, error }] = useQuery({
        query: BigCommerceSessionQuery,
    });
    useEffect(() => {
        if (!sessionToken) {
            console.log("[gadget-react-big-commerce] no session token, skipping auth setup");
            return;
        }
        api.connection.setAuthenticationMode({
            custom: {
                async processFetch(_input, init) {
                    const headers = new Headers(init.headers);
                    headers.append("Authorization", `BigCommerceSignedPayload ${sessionToken}`);
                    init.headers ?? (init.headers = {});
                    headers.forEach(function (value, key) {
                        init.headers[key] = value;
                    });
                },
                async processTransactionConnectionParams(params) {
                    params.auth.bigCommerceSignedPayload = sessionToken;
                },
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
        sessionToken,
        data,
        fetching,
        error,
        isAuthenticated,
        userId,
        storeHash,
    });
    return (React.createElement(GadgetBigCommerceContext.Provider, { value: {
            loading: fetching,
            error,
            isAuthenticated,
            userId,
            storeHash,
        } }, props.children));
};
export const Provider = ({ children, api }) => {
    const location = useMemo(() => {
        return {
            query: new URLSearchParams(window.location.search),
        };
    }, []);
    const { query } = location ?? {};
    const session = query?.get("session") ?? undefined;
    return (React.createElement(GadgetUrqlProvider, { api: api },
        React.createElement(InnerProvider, { api: api, sessionToken: session }, children)));
};
//# sourceMappingURL=Provider.js.map