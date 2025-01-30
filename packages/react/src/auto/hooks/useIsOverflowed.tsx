import { useCallback, useEffect, useRef, useState } from "react";

export const useIsOverflowed = () => {
  const [isOverflowed, setIsOverflow] = useState(false);
  const childElementRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const checkOverflow = useCallback(() => {
    const container = containerRef.current;
    const childElement = childElementRef.current;
    if (!container || !childElement) {
      return;
    }
    const hasOverflow = container.offsetWidth < childElement.offsetWidth;

    setIsOverflow(hasOverflow);
  }, [containerRef, childElementRef, setIsOverflow]);

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
