import React from "react";

export interface AutoInputComponent<P> extends React.FC<P> {
  __autoInput: true;
}

export function autoInput<P extends { field: string }>(Component: React.FC<P>): AutoInputComponent<P> {
  const WrappedComponent: React.FC<P> = (props) => {
    return <Component {...props} />;
  };

  (WrappedComponent as AutoInputComponent<P>).__autoInput = true;

  return WrappedComponent as AutoInputComponent<P>;
}
