import { useCallback, useEffect, useState } from "react";
import { useOpenAiGlobal } from "./useOpenAiGlobal.js";
export function useWidgetState(defaultState) {
    const widgetStateFromWindow = useOpenAiGlobal("widgetState");
    const [widgetState, _setWidgetState] = useState(() => {
        if (widgetStateFromWindow != null) {
            return widgetStateFromWindow;
        }
        return typeof defaultState === "function" ? defaultState() : defaultState ?? null;
    });
    useEffect(() => {
        _setWidgetState(widgetStateFromWindow);
    }, [widgetStateFromWindow]);
    const setWidgetState = useCallback((state) => {
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
//# sourceMappingURL=useWidgetState.js.map