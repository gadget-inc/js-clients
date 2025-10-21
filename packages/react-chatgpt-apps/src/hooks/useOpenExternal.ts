import { useCallback } from "react";

/**
 * Hook for opening external URLs in a new tab or window.
 *
 * This hook provides a callback function that attempts to use ChatGPT's native
 * link handler (`window.openai.openExternal`) when available, falling back to
 * the standard `window.open` behavior if not. Using this hook ensures links
 * are opened in the most appropriate way for the ChatGPT environment.
 *
 * @returns A callback function that takes a URL string and opens it externally
 *
 * @example
 * ```tsx
 * const openExternal = useOpenExternal();
 * return <button onClick={() => openExternal("https://example.com")}>Open Link</button>;
 * ```
 */
export function useOpenExternal() {
  const openExternal = useCallback((href: string) => {
    if (typeof window === "undefined") {
      throw new Error("window is not available. Cannot use useOpenExternal.");
    }

    // Try to use ChatGPT's native link handler
    if (window?.openai?.openExternal) {
      try {
        window.openai.openExternal({ href });
        return;
      } catch (error) {
        console.warn("openExternal failed, falling back to window.open", error);
      }
    }

    // Fallback to standard web behavior
    window.open(href, "_blank", "noopener,noreferrer");
  }, []);

  return openExternal;
}
