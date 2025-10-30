import type { AnyClient } from "@gadgetinc/core";
import { createMockUrqlClient, mockGraphQLWSClient, mockUrqlClient, type MockUrqlClient } from "@gadgetinc/core/testing";
import { jest } from "@jest/globals";
import type { ComponentChildren } from "preact";
import { Suspense } from "preact/compat";
import { Provider } from "../src/GadgetProvider.js";

export const MockClientWrapper = (api: AnyClient, urqlClient?: MockUrqlClient) => (props: { children: ComponentChildren }) => {
  const urql = urqlClient ?? mockUrqlClient;

  jest.spyOn(api.connection, "currentClient" as any, "get").mockReturnValue(urql);
  api.connection.fetch = urql.mockFetch as any;

  return (
    <Provider api={api}>
      <Suspense fallback={<div id="MockClientWrapperSuspenseFallback">Loading...</div>}>{props.children}</Suspense>
    </Provider>
  );
};

export const MockGraphQLWSClientWrapper = (api: AnyClient) => (props: { children: ComponentChildren }) => {
  if (!("baseSubscriptionClient" in (api.connection as any))) {
    (api.connection as any).baseSubscriptionClient = undefined;
  }
  jest.replaceProperty(api.connection as any, "baseSubscriptionClient", mockGraphQLWSClient as any);

  return (
    <Provider api={api}>
      <Suspense fallback={<div id="MockGraphQLWSClientWrapperSuspenseFallback">Loading...</div>}>{props.children}</Suspense>
    </Provider>
  );
};

export { createMockUrqlClient, mockGraphQLWSClient, mockUrqlClient };
