import type { OpenAiGlobals } from "../types.js";
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
export declare function useOpenAiGlobal<K extends keyof OpenAiGlobals>(key: K): OpenAiGlobals[K] | null;
