export interface SearchResult {
    value: string;
    debouncedValue: string;
    set: (value: string) => void;
    clear: () => void;
}
export declare const useDebouncedSearch: (props: {
    clearCursor: () => void;
    debounceMilliseconds?: number;
}) => {
    value: string;
    debouncedValue: string;
    set: (query: string) => void;
    clear: () => void;
};
