import { useCallback } from "react";
/**
 * Hook for requesting a change to the app's display mode.
 *
 * This hook provides a callback function to request that ChatGPT change how your
 * app is displayed. The host may reject the request or modify it (e.g., on mobile,
 * picture-in-picture is always coerced to fullscreen).
 *
 * @returns A callback function that takes a display mode and returns the granted mode
 *
 * @example
 * ```tsx
 * const requestDisplayMode = useRequestDisplayMode();
 * const goFullscreen = async () => {
 *   const result = await requestDisplayMode("fullscreen");
 *   console.log("Granted mode:", result.mode);
 * };
 * ```
 */
export function useRequestDisplayMode() {
    const requestDisplayMode = useCallback(async (mode) => {
        if (typeof window !== "undefined" && window?.openai?.requestDisplayMode) {
            return await window.openai.requestDisplayMode({ mode });
        }
        return { mode };
    }, []);
    return requestDisplayMode;
}
//# sourceMappingURL=useRequestDisplayMode.js.map