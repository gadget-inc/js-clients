/**
 * Memoize and ensure a stable identity on a given value as long as it remains the same, structurally.
 */
export declare const useStructuralMemo: <T>(value: T) => T;
