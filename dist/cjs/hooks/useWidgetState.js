"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWidgetState = void 0;
const react_1 = require("react");
const useOpenAiGlobal_js_1 = require("./useOpenAiGlobal.js");
function useWidgetState(defaultState) {
    const widgetStateFromWindow = (0, useOpenAiGlobal_js_1.useOpenAiGlobal)("widgetState");
    const [widgetState, _setWidgetState] = (0, react_1.useState)(() => {
        if (widgetStateFromWindow != null) {
            return widgetStateFromWindow;
        }
        return typeof defaultState === "function" ? defaultState() : defaultState ?? null;
    });
    (0, react_1.useEffect)(() => {
        _setWidgetState(widgetStateFromWindow);
    }, [widgetStateFromWindow]);
    const setWidgetState = (0, react_1.useCallback)((state) => {
        _setWidgetState((prevState) => {
            const newState = typeof state === "function" ? state(prevState) : state;
            if (newState != null) {
                void window.openai.setWidgetState(newState);
            }
            return newState;
        });
    }, [window.openai.setWidgetState]);
    return [widgetState, setWidgetState];
}
exports.useWidgetState = useWidgetState;
//# sourceMappingURL=useWidgetState.js.map