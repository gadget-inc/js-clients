import { useCallback } from "react";
/**
 * Hook for calling external tools/APIs from within a ChatGPT app.
 *
 * This hook provides access to the OpenAI `callTool` function, which allows your
 * app to invoke external APIs or tools that have been configured in your ChatGPT app.
 *
 * @returns A callback function that takes a tool name and arguments, returning the tool's response or null if unavailable
 *
 * @example
 * ```tsx
 * const callTool = useCallTool();
 * const response = await callTool("weatherApi", { city: "San Francisco" });
 * console.log(response?.result);
 * ```
 */
export function useCallTool() {
    const callTool = useCallback(async (name, args) => {
        if (typeof window === "undefined" || !window?.openai?.callTool) {
            throw new Error("window.openai.callTool is not available. Cannot use useCallTool.");
        }
        return await window.openai.callTool(name, args);
    }, []);
    return callTool;
}
//# sourceMappingURL=useCallTool.js.map