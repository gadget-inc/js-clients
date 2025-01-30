import React from "react";

export const ShadcnRequired = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-red-500">{children}</span>;
};
