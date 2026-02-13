import { useCallback, useEffect, useRef, useState } from "react";

export interface UseIsOverflowedOptions {
  /**
   * When true, overflow is detected via scrollWidth > clientWidth on the child
   * (works when the child is constrained with display:block + overflow:hidden + text-overflow:ellipsis).
   * When false or omitted, overflow is detected via container.offsetWidth < childElement.offsetWidth.
   */
  useScrollWidthCheck?: boolean;
}

export const useIsOverflowed = (options: UseIsOverflowedOptions = {}) => {
  const { useScrollWidthCheck = false } = options;
  const [isOverflowed, setIsOverflow] = useState(false);
  const childElementRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const checkOverflow = useCallback(() => {
    const container = containerRef.current;
    const childElement = childElementRef.current;
    if (!childElement) {
      return;
    }
    if (useScrollWidthCheck) {
      const hasOverflow = childElement.scrollWidth > childElement.clientWidth;
      setIsOverflow(hasOverflow);
    } else {
      if (!container) return;
      const hasOverflow = container.offsetWidth < childElement.offsetWidth;
      setIsOverflow(hasOverflow);
    }
  }, [useScrollWidthCheck]);

  useEffect(() => {
    checkOverflow(); // Initial check
  }, [checkOverflow]);

  return {
    isOverflowed,
    childElementRef,
    containerRef,
    checkOverflow,
  };
};
