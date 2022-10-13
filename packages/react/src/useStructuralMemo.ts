import deepEqual from "deep-equal";
import { useContext, useRef } from "react";
import { GadgetContext } from "./GadgetProvider";
import { noProviderErrorMessage } from "./utils";

/**
 * Memoize and ensure a stable identity on a given value as long as it remains the same, structurally.
 */
export const useStructuralMemo = <T>(value: T): T | undefined => {
  if (!useContext(GadgetContext)) throw new Error(noProviderErrorMessage);

  const ref = useRef<T>();
  if (value) {
    if (ref.current === undefined || !deepEqual(value, ref.current)) {
      ref.current = value;
    }
  } else {
    ref.current = undefined;
  }

  return ref.current;
};
