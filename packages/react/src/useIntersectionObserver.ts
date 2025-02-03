import { useCallback, useEffect, useRef } from "react";

export const useIntersectionObserver = (
  onIntersect: () => void,
  rootRef: React.RefObject<HTMLElement>,
  options?: IntersectionObserverInit
) => {
  const sentinelRef = useRef<HTMLDivElement>(null);

  const callback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        onIntersect();
      }
    },
    [onIntersect]
  );

  useEffect(() => {
    const root = rootRef.current || null;
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(callback, {
      root,
      threshold: 1.0,
      ...options,
    });
    observer.observe(sentinel);

    return () => {
      if (sentinel) observer.unobserve(sentinel);
      observer.disconnect();
    };
  }, [callback, rootRef, options]);

  return sentinelRef;
};
