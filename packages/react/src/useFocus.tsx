import type { FocusEvent } from "react";
import { useRef, useState } from "react";

/** Used for tracking focus state on an element */
export function useFocus<T extends HTMLElement = any>(
  outerRef?: React.RefObject<T>
): [
  boolean,
  { onFocus: (event?: FocusEvent<T>) => void; onBlur: (event?: FocusEvent<T>) => void; ref: React.RefObject<T | null> },
  boolean,
] {
  const [hasFocus, setFocus] = useState(false);
  const [hasFocusWithin, setFocusWithin] = useState(false);
  const innerRef = useRef<T | null>(null);
  const ref = outerRef ?? innerRef;

  const onFocus = (e?: FocusEvent) => {
    if (!e) return;
    const isRef = e.target === ref.current;
    setFocus(true);
    if (!isRef) {
      setFocusWithin(true);
    }
  };
  const onBlur = (e?: FocusEvent) => {
    if (!e) return;
    const isRef = e.target === ref.current;
    setFocus(false);
    if (!isRef) {
      setFocusWithin(false);
    }
  };

  return [hasFocus, { onFocus, onBlur, ref }, hasFocusWithin];
}
