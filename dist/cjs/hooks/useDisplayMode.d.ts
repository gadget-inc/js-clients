import { type DisplayMode } from "../types.js";
/**
 * Hook for accessing the current display mode of the ChatGPT app.
 *
 * The display mode indicates how the app is currently being displayed to the user.
 * Possible values are:
 * - `"pip"` - Picture-in-picture mode (small floating window)
 * - `"inline"` - Inline mode (embedded in the chat)
 * - `"fullscreen"` - Fullscreen mode (takes up the entire screen)
 *
 * @returns The current display mode, or null if not available
 *
 * @example
 * ```tsx
 * const displayMode = useDisplayMode();
 * return <div>{displayMode === "fullscreen" ? "Full Screen View" : "Compact View"}</div>;
 * ```
 */
export declare const useDisplayMode: () => DisplayMode | null;
