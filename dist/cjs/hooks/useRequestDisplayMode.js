"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRequestDisplayMode = void 0;
const react_1 = require("react");
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
function useRequestDisplayMode() {
    const requestDisplayMode = (0, react_1.useCallback)(async (mode) => {
        if (typeof window !== "undefined" && window?.openai?.requestDisplayMode) {
            return await window.openai.requestDisplayMode({ mode });
        }
        return { mode };
    }, []);
    return requestDisplayMode;
}
exports.useRequestDisplayMode = useRequestDisplayMode;
//# sourceMappingURL=useRequestDisplayMode.js.map