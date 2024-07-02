import type { AnyClient } from "@gadgetinc/api-client-core";
import { BrowserSessionStorageType } from "@gadgetinc/api-client-core";
import { Provider as GadgetUrqlProvider, useQuery } from "@gadgetinc/react";
import type { ReactNode } from "react";
import React, { useEffect, useState } from "react";
import { GadgetAuthContext } from "./index.js";

type ProviderLocation = {
  query?: URLSearchParams;
};

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

const InnerProvider = (props: { children: ReactNode; api: AnyClient; locationLoaded: boolean; sessionToken: string | undefined }) => {
  const { api, locationLoaded, sessionToken } = props;

  const [{ data, fetching, error }] = useQuery<{
    currentSession: { bigCommerceUserId: string; bigCommerceStore: { storeHash: string }; roles: { key: string }[] };
  }>({
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

  const isAuthenticated = !!data?.currentSession?.roles?.some((role) => role.key === "Role-BigCommerce-App");
  const userId = data?.currentSession?.bigCommerceUserId;
  const storeHash = data?.currentSession?.bigCommerceStore?.storeHash;

  useEffect(() => {
    if (!isAuthenticated) {
      return;
    }

    const BigCommerce = (window as any).Bigcommerce;

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

  return (
    <GadgetAuthContext.Provider
      value={{
        loading: !locationLoaded || fetching,
        error,
        isAuthenticated,
        userId,
        storeHash,
      }}
    >
      {props.children}
    </GadgetAuthContext.Provider>
  );
};

export const Provider = ({ children, api }: { children: ReactNode; api: AnyClient }) => {
  const [location, setLocation] = useState<ProviderLocation | null>(null);
  const locationLoaded = !!location;
  const { query } = location ?? {};
  const session = query?.get("session") ?? undefined;

  useEffect(() => {
    setLocation({
      query: new URLSearchParams(window.location.search),
    });
  }, []);

  return (
    <GadgetUrqlProvider api={api}>
      <InnerProvider api={api} sessionToken={session} locationLoaded={locationLoaded}>
        {children}
      </InnerProvider>
    </GadgetUrqlProvider>
  );
};
