import { useOpenAiGlobal } from "./useOpenAiGlobal.js";

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
export function useWidgetProps<T extends Record<string, unknown>>(defaultState?: T | (() => T)): T {
  const props = useOpenAiGlobal("toolOutput") as T;

  const fallback = typeof defaultState === "function" ? (defaultState as () => T | null)() : (defaultState ?? null);

  return props ?? fallback;
}
