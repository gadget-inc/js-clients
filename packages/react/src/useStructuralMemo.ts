import { useRef } from "react";
import deepEqual from "react-fast-compare";

/**
 * Memoize and ensure a stable identity on a given value as long as it remains the same, structurally.
 */
export const useStructuralMemo = <T>(value: T): T => {
  const ref = useRef<T>(value);

  if (!deepEqual(value, ref.current)) {
    ref.current = value;
  }

  return ref.current;
};
