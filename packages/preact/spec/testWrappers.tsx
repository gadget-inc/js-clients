import type { AnyClient } from "@gadgetinc/api-client-core";
import { jest } from "@jest/globals";
import { ComponentChildren } from "preact";
import { mockUrqlClient, type MockUrqlClient } from "../../api-client-core/spec/mockUrqlClient.js";
import { Provider } from "../src/GadgetProvider.js";

export const MockClientWrapper = (api: AnyClient, urqlClient?: MockUrqlClient) => (props: { children: ComponentChildren }) => {
  const urql = urqlClient ?? mockUrqlClient;

  jest.spyOn(api.connection, "currentClient" as any, "get").mockReturnValue(urql);
  api.connection.fetch = urql.mockFetch as any;

  return <Provider api={api}>{props.children}</Provider>;
};

export { mockUrqlClient };
