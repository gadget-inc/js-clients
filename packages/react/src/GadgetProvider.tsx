import React from "react";
import { Client, Provider } from "urql";

export const GadgetContext = React.createContext<Client | null>(null);
export const GadgetProvider: React.FC<React.PropsWithChildren<{ value: Client }>> = ({ children, value }) => {
  return (
    <GadgetContext.Provider value={value}>
      <Provider value={value}>{children}</Provider>
    </GadgetContext.Provider>
  );
};
