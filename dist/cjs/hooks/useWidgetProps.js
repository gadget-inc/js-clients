"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWidgetProps = void 0;
const useOpenAiGlobal_js_1 = require("./useOpenAiGlobal.js");
/**
 * Hook for accessing the tool output props passed to your ChatGPT app.
 *
 * When ChatGPT invokes your app, it may provide initial data or configuration
 * through the `toolOutput` property. This hook retrieves that data and falls
 * back to a default value if no data is provided.
 *
 * @param defaultState - Default value or function returning default value to use if no tool output is available
 * @returns The tool output props, or the default value if not available
 *
 * @example
 * ```tsx
 * const props = useWidgetProps({ userId: "unknown", theme: "light" });
 * return <div>User ID: {props.userId}</div>;
 * ```
 */
function useWidgetProps(defaultState) {
    const props = (0, useOpenAiGlobal_js_1.useOpenAiGlobal)("toolOutput");
    const fallback = typeof defaultState === "function" ? defaultState() : defaultState ?? null;
    return props ?? fallback;
}
exports.useWidgetProps = useWidgetProps;
//# sourceMappingURL=useWidgetProps.js.map