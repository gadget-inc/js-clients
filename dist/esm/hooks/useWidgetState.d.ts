import { type SetStateAction } from "react";
import { type UnknownObject } from "../types.js";
/**
 * Hook for managing persistent widget state in a ChatGPT app.
 *
 * Similar to React's `useState`, but the state is synchronized with ChatGPT's
 * widget state system. This allows state to persist across re-renders and
 * display mode changes. When the state is updated, it's automatically saved
 * to ChatGPT's storage system.
 *
 * @param defaultState - Default state value or function returning default state
 * @returns A tuple of [state, setState] similar to React's useState
 *
 * @example
 * ```tsx
 * const [count, setCount] = useWidgetState({ count: 0 });
 * return (
 *   <button onClick={() => setCount({ count: count.count + 1 })}>
 *     Count: {count?.count ?? 0}
 *   </button>
 * );
 * ```
 */
export declare function useWidgetState<T extends UnknownObject>(defaultState: T | (() => T)): readonly [T, (state: SetStateAction<T>) => void];
export declare function useWidgetState<T extends UnknownObject>(defaultState?: T | (() => T | null) | null): readonly [T | null, (state: SetStateAction<T | null>) => void];
