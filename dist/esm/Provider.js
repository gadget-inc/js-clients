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
    const { api, signedPayload } = props;
    const [{ data, fetching, error }] = useQuery({
        query: BigCommerceSessionQuery,
    });
    useEffect(() => {
        if (!signedPayload) {
            console.log("[gadget-react-big-commerce] no signed payload, skipping auth setup");
            return;
        }
        api.connection.setAuthenticationMode({
            custom: {
                async processFetch(_input, init) {
                    const headers = new Headers(init.headers);
                    headers.append("Authorization", `BigCommerceSignedPayload ${signedPayload}`);
                    init.headers ?? (init.headers = {});
                    headers.forEach(function (value, key) {
                        init.headers[key] = value;
                    });
                },
                async processTransactionConnectionParams(params) {
                    params.auth.bigCommerceSignedPayload = signedPayload;
                },
            },
        });
    }, [api, signedPayload]);
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
        signedPayload,
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
    const signed_payload = query?.get("signed_payload") ?? undefined;
    return (React.createElement(GadgetUrqlProvider, { api: api },
        React.createElement(InnerProvider, { api: api, signedPayload: signed_payload }, children)));
};
//# sourceMappingURL=Provider.js.map