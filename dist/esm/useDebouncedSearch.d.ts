export interface SearchResult {
    value: string;
    debouncedValue: string;
    set: (value: string) => void;
    clear: () => void;
}
export declare const useDebouncedSearch: (props: {
    onDebouncedSearchValueChange: () => void;
    debounceMilliseconds?: number;
}) => {
    value: string;
    debouncedValue: string;
    set: (query: string) => void;
    clear: () => void;
};
