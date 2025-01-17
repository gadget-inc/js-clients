import React, { useEffect, useState } from "react";
import { useFieldsFromChildComponents } from "./AutoFormContext.js";

export interface AutoInputComponent<P> extends React.FC<P> {
  __autoInput: true;
}

export function autoInput<P extends { field: string }>(Component: React.FC<P>): AutoInputComponent<P & { selectPaths?: string[] }> {
  const WrappedComponent: React.FC<P> = (props) => {
    const { registerField } = useFieldsFromChildComponents();

    const [isRegistered, setIsRegistered] = useState(false);

    useEffect(() => {
      registerField(props.field);
      setIsRegistered(true);
    }, [registerField, setIsRegistered]);

    if (!isRegistered) {
      return null;
    }

    return <Component {...props} />;
  };

  (WrappedComponent as AutoInputComponent<P>).__autoInput = true;

  return WrappedComponent as AutoInputComponent<P>;
}

export function isAutoInput(component: React.ReactElement): component is React.ReactElement<any, AutoInputComponent<any>> {
  return typeof component.type === "function" && "__autoInput" in component.type;
}
