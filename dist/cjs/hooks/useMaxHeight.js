"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMaxHeight = void 0;
const useOpenAiGlobal_js_1 = require("./useOpenAiGlobal.js");
/**
 * Hook for accessing the maximum height available for the ChatGPT app.
 *
 * Returns the maximum height (in pixels) that your app should use to ensure
 * it fits within the ChatGPT interface without scrolling or being cut off.
 * This value updates dynamically as the display mode or window size changes.
 *
 * @returns The maximum height in pixels, or null if not available
 *
 * @example
 * ```tsx
 * const maxHeight = useMaxHeight();
 * return <div style={{ maxHeight }}>Content</div>;
 * ```
 */
const useMaxHeight = () => {
    return (0, useOpenAiGlobal_js_1.useOpenAiGlobal)("maxHeight");
};
exports.useMaxHeight = useMaxHeight;
//# sourceMappingURL=useMaxHeight.js.map