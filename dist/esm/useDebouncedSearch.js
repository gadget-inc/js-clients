import { useCallback, useState } from "react";
import { debounce } from "./utils.js";
export const useDebouncedSearch = (props) => {
    const { clearCursor, debounceMilliseconds } = props;
    const [searchValue, setSearchValue] = useState("");
    const [debouncedSearchValue, setDebouncedSearchValue] = useState("");
    const debouncedSetSearchValue = useCallback(debounce((query) => {
        setDebouncedSearchValue(query);
        clearCursor();
    }, debounceMilliseconds), []);
    const search = {
        value: searchValue,
        debouncedValue: debouncedSearchValue,
        set: (query) => {
            setSearchValue(query);
            debouncedSetSearchValue(query);
        },
        clear: () => {
            // Instant without debounce
            setSearchValue("");
            setDebouncedSearchValue("");
            clearCursor();
        },
    };
    return search;
};
//# sourceMappingURL=useDebouncedSearch.js.map