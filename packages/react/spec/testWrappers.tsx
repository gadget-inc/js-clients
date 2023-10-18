import type { AnyClient } from "@gadgetinc/api-client-core";
import type { ReactNode } from "react";
import React, { Suspense } from "react";
import type { MockUrqlClient } from "../../api-client-core/spec/mockUrqlClient.js";
import { createMockUrqlClient, mockGraphQLWSClient, mockUrqlClient } from "../../api-client-core/spec/mockUrqlClient.js";
import { Provider, type GadgetAuthConfiguration } from "../src/GadgetProvider.js";

export const MockClientWrapper =
  (api: AnyClient, urqlClient?: MockUrqlClient, auth?: Partial<GadgetAuthConfiguration>) => (props: { children: ReactNode }) => {
    const urql = urqlClient ?? mockUrqlClient;

    jest.spyOn(api.connection, "currentClient", "get").mockReturnValue(urql);

    return (
      <Provider api={api} auth={auth}>
        <Suspense fallback={<div>Loading...</div>}>{props.children}</Suspense>
      </Provider>
    );
  };

export const MockGraphQLWSClientWrapper = (api: AnyClient, auth?: Partial<GadgetAuthConfiguration>) => (props: { children: ReactNode }) => {
  jest.replaceProperty(api.connection, "baseSubscriptionClient", mockGraphQLWSClient as any);

  return (
    <Provider api={api} auth={auth}>
      <Suspense fallback={<div>Loading...</div>}>{props.children}</Suspense>
    </Provider>
  );
};

export { mockUrqlClient, mockGraphQLWSClient, createMockUrqlClient };
export type { MockUrqlClient };
