import type { AnyClient } from "@gadgetinc/core";
import type { MockUrqlClient } from "@gadgetinc/core/testing";
import { createMockUrqlClient, mockGraphQLWSClient, mockUrqlClient } from "@gadgetinc/core/testing";
import { jest } from "@jest/globals";
import type { ReactNode } from "react";
import React, { Suspense } from "react";
import { Provider, type GadgetAuthConfiguration } from "../src/GadgetProvider.js";

export const MockClientWrapper =
  (
    api: AnyClient,
    urqlClient?: MockUrqlClient,
    propOverrides?: {
      auth?: Partial<GadgetAuthConfiguration>;
      navigate?: (url: string) => void;
    }
  ) =>
  (props: { children: ReactNode }) => {
    const urql = urqlClient ?? mockUrqlClient;

    jest.spyOn(api.connection, "currentClient" as any, "get").mockReturnValue(urql);
    api.connection.fetch = urql.mockFetch as any;

    return (
      <Provider api={api} navigate={propOverrides?.navigate} auth={propOverrides?.auth}>
        <Suspense fallback={<div id="MockClientWrapperSuspenseFallback">Loading...</div>}>{props.children}</Suspense>
      </Provider>
    );
  };

export const MockClientProvider = (props: {
  children: ReactNode;
  api: AnyClient;
  urqlClient?: MockUrqlClient;
  propOverrides?: {
    auth?: Partial<GadgetAuthConfiguration>;
    navigate?: (url: string) => void;
  };
}) => {
  const WrapperComponent = MockClientWrapper(props.api, props.urqlClient, props.propOverrides);

  return <WrapperComponent>{props.children}</WrapperComponent>;
};

export const LiveClientWrapper =
  (
    api: AnyClient,
    propOverrides?: {
      auth?: Partial<GadgetAuthConfiguration>;
      navigate?: (url: string) => void;
    }
  ) =>
  (props: { children: ReactNode }) => {
    return (
      <Provider api={api} navigate={propOverrides?.navigate} auth={propOverrides?.auth}>
        <Suspense fallback={<div id="LiveClientWrapperSuspenseFallback">Loading...</div>}>{props.children}</Suspense>
      </Provider>
    );
  };

export const MockGraphQLWSClientWrapper = (api: AnyClient, auth?: Partial<GadgetAuthConfiguration>) => (props: { children: ReactNode }) => {
  if (!("baseSubscriptionClient" in (api.connection as any))) {
    (api.connection as any).baseSubscriptionClient = undefined;
  }
  jest.replaceProperty(api.connection as any, "baseSubscriptionClient", mockGraphQLWSClient as any);

  return (
    <Provider api={api} auth={auth}>
      <Suspense fallback={<div id="MockGraphQLWSClientWrapperSuspenseFallback">Loading...</div>}>{props.children}</Suspense>
    </Provider>
  );
};

export { createMockUrqlClient, mockGraphQLWSClient, mockUrqlClient };
export type { MockUrqlClient };
