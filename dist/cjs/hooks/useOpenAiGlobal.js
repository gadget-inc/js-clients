"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOpenAiGlobal = void 0;
const react_1 = require("react");
const index_js_1 = require("../index.js");
/**
 * Low-level hook for accessing OpenAI global values by key.
 *
 * This hook subscribes to changes in the OpenAI global context and returns the
 * current value for the specified key. It automatically re-renders the component
 * when the value changes.
 *
 * Most apps should use the more specific hooks like `useDisplayMode`, `useMaxHeight`,
 * `useWidgetProps`, etc. instead of using this hook directly.
 *
 * @param key - The key of the OpenAI global value to access
 * @returns The current value for the specified key, or null if not available
 *
 * @example
 * ```tsx
 * const theme = useOpenAiGlobal("theme");
 * const locale = useOpenAiGlobal("locale");
 * ```
 */
function useOpenAiGlobal(key) {
    return (0, react_1.useSyncExternalStore)((onChange) => {
        if (typeof window === "undefined") {
            return () => {
                // no op
            };
        }
        const handleSetGlobal = (event) => {
            const value = event.detail.globals[key];
            if (value === undefined) {
                return;
            }
            onChange();
        };
        window.addEventListener(index_js_1.SET_GLOBALS_EVENT_TYPE, handleSetGlobal, {
            passive: true,
        });
        return () => {
            window.removeEventListener(index_js_1.SET_GLOBALS_EVENT_TYPE, handleSetGlobal);
        };
    }, () => window.openai?.[key] ?? null, () => window.openai?.[key] ?? null);
}
exports.useOpenAiGlobal = useOpenAiGlobal;
//# sourceMappingURL=useOpenAiGlobal.js.map