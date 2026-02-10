import type React from "react";
import { useState } from "react";

/** Used for tracking hover state on an element */
export function useHover<T extends HTMLElement = any>(): [
  boolean,
  { onMouseEnter: React.MouseEventHandler<T>; onMouseLeave: React.MouseEventHandler<T> },
] {
  const [value, setValue] = useState(false);

  const onMouseEnter = () => setValue(true);
  const onMouseLeave = () => setValue(false);

  return [value, { onMouseEnter, onMouseLeave }];
}
