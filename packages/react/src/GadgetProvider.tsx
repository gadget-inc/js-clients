import type { GadgetConnection } from "@gadgetinc/api-client-core";
import { $gadgetConnection } from "@gadgetinc/api-client-core";
import React from "react";
import type { Client } from "urql";
import { Provider } from "urql";

export const GadgetContext = React.createContext<Client | undefined>(undefined);
export const GadgetProvider: React.FC<React.PropsWithChildren<{ value: Client }>> = ({ children, value }) => {
  return (
    <GadgetContext.Provider value={value}>
      <Provider value={value}>{children}</Provider>
    </GadgetContext.Provider>
  );
};

export const useConnection = () => {
  const urqlClient = React.useContext(GadgetContext);
  if (!urqlClient) {
    throw new Error("No urql client object in React context, have you added the GadgetProvider wrapper?");
  }
  const connection = (urqlClient as any)[$gadgetConnection] as GadgetConnection | undefined;
  if (!connection) {
    throw new Error(
      `urql client found in context was not set up by the Gadget API client. Please ensure you are wrapping this hook with the <Provider/> component from @gadgetinc/react. 
      
      Possible remedies: 
       - ensuring you have the <Provider/> component wrapped around your hook invocation
       - ensuring you are passing a value to the provider, usually <Provider value={api.connection.currentClient}>
       - ensuring your @gadget-client/<your-app> package and your @gadgetinc/react package are up to date`
    );
  }

  return connection;
};
