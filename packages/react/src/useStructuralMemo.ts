import deepEqual from "deep-equal";
import { useRef } from "react";

/**
 * Memoize and ensure a stable identity on a given value as long as it remains the same, structurally.
 */
export const useStructuralMemo = <T>(value: T): T | undefined => {
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
