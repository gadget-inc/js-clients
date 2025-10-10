import type { AnyClient } from "@gadgetinc/api-client-core";
import { Provider as GadgetUrqlProvider } from "@gadgetinc/react";
import type { ReactNode } from "react";
import React, { useEffect, useState } from "react";

/** Get the backend auth token for the current widget using the special __getGadgetAuthTokenV1 backend tool */
export const getToken = async () => {
  const result = await window.openai.callTool("__getGadgetAuthTokenV1", {});
  const structuredContent = result.structuredContent as { token: string } | { token: null; error: string };
  if ("error" in structuredContent) {
    throw new Error(structuredContent.error);
  }
  return structuredContent.token;
};

/**
 * React Provider that ChatGPT Apps Widgets should be wrapped in to make calls to the Gadget backend.
 */
export const Provider = ({ children, api }: { children: ReactNode; api: AnyClient }) => {
  // eslint-disable-next-line prefer-const
  let [tokenPromise, setTokenPromise] = useState<Promise<string> | null>(null);

  useEffect(() => {
    if (!tokenPromise) {
      tokenPromise = getToken();
      setTokenPromise(tokenPromise);
    }

    api.connection.setAuthenticationMode({
      custom: {
        async processFetch(_input, init) {
          const token = await tokenPromise;
          const headers = new Headers(init.headers);
          headers.append("Authorization", `Bearer ${token}`);
          init.headers ??= {};
          headers.forEach(function (value, key) {
            (init.headers as Record<string, string>)[key] = value;
          });
        },
        async processTransactionConnectionParams(params) {
          const token = await tokenPromise;
          params.auth = { type: "custom", jwt: token };
        },
      },
    });
  }, [api, tokenPromise]);

  return <GadgetUrqlProvider api={api}>{children}</GadgetUrqlProvider>;
};
