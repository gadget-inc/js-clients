"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOpenExternal = void 0;
const react_1 = require("react");
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
function useOpenExternal() {
    const openExternal = (0, react_1.useCallback)((href) => {
        if (typeof window === "undefined") {
            throw new Error("window is not available. Cannot use useOpenExternal.");
        }
        // Try to use ChatGPT's native link handler
        if (window?.openai?.openExternal) {
            try {
                window.openai.openExternal({ href });
                return;
            }
            catch (error) {
                console.warn("openExternal failed, falling back to window.open", error);
            }
        }
        // Fallback to standard web behavior
        window.open(href, "_blank", "noopener,noreferrer");
    }, []);
    return openExternal;
}
exports.useOpenExternal = useOpenExternal;
//# sourceMappingURL=useOpenExternal.js.map