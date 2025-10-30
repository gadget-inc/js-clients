import type { GadgetApiContext as GadgetApiContextType } from "@gadgetinc/client-hooks";
import { registerClientHooks } from "@gadgetinc/client-hooks";
import type { AnyClient } from "@gadgetinc/core";
import { Provider as UrqlProvider } from "@urql/preact";
import type { ComponentChildren } from "preact";
import { createContext } from "preact";
import { preactAdapter } from "./adapter.js";

const GadgetApiContext = createContext<GadgetApiContextType>(null as unknown as GadgetApiContextType);

export interface ProviderProps {
  api: AnyClient;
  children: ComponentChildren;
}

export function Provider(props: ProviderProps) {
  const { gadgetClient, gadgetConnection, urqlClient } = registerClientHooks(props.api, { ...preactAdapter, GadgetApiContext });
  return (
    <GadgetApiContext.Provider
      value={{
        api: gadgetClient,
        connection: gadgetConnection,
      }}
    >
      <UrqlProvider value={urqlClient}>{props.children}</UrqlProvider>
    </GadgetApiContext.Provider>
  );
}
