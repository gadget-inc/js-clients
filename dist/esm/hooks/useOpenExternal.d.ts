/**
 * Hook for opening external URLs in a new tab or window.
 *
 * This hook provides a callback function that attempts to use ChatGPT's native
 * link handler (`window.openai.openExternal`) when available, falling back to
 * the standard `window.open` behavior if not. Using this hook ensures links
 * are opened in the most appropriate way for the ChatGPT environment.
 *
 * @returns A callback function that takes a URL string and opens it externally
 *
 * @example
 * ```tsx
 * const openExternal = useOpenExternal();
 * return <button onClick={() => openExternal("https://example.com")}>Open Link</button>;
 * ```
 */
export declare function useOpenExternal(): (href: string) => void;
