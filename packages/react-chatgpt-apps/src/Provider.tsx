import type { AnyClient } from "@gadgetinc/api-client-core";
import { Provider as GadgetUrqlProvider } from "@gadgetinc/react";
import type { ReactNode } from "react";
import React, { useEffect, useRef } from "react";

const AUTH_TOKEN_TOOL_NAME = "__getGadgetAuthTokenV1";

/** Get the backend auth token for the current widget using the special __getGadgetAuthTokenV1 backend tool */
export const getToken = async () => {
  let result;
  try {
    result = await window.openai.callTool(AUTH_TOKEN_TOOL_NAME, {});
  } catch (error: any) {
    if (error.message.includes("MCP Resource not found")) {
      throw new Error(
        `Backend Gadget MCP server does not have the ${AUTH_TOKEN_TOOL_NAME} tool defined which is required for authentication.`
      );
    } else {
      throw error;
    }
  }

  const structuredContent = result.structuredContent as { token: string } | { token: null; error: string };
  if ("error" in structuredContent) {
    throw new Error(structuredContent.error);
  }
  return structuredContent.token;
};

/**
 * React Provider that ChatGPT Apps Widgets should be wrapped in to make calls to the Gadget backend.
 */
export const Provider = ({ children, api, authenticate = true }: { children: ReactNode; api: AnyClient; authenticate?: boolean }) => {
  const tokenPromiseRef = useRef<Promise<string> | null>(null);

  useEffect(() => {
    if (!authenticate) {
      api.connection.setAuthenticationMode({
        browserSession: true,
      });
      return;
    }

    let tokenPromise = tokenPromiseRef.current;
    if (!tokenPromise) {
      tokenPromise = getToken();
      tokenPromiseRef.current = tokenPromise;
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
  }, [api, authenticate]);

  return <GadgetUrqlProvider api={api}>{children}</GadgetUrqlProvider>;
};
