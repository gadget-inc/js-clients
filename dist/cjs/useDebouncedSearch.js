"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDebouncedSearch = void 0;
const react_1 = require("react");
const utils_js_1 = require("./utils.js");
const useDebouncedSearch = (props) => {
    const { onDebouncedSearchValueChange, debounceMilliseconds } = props;
    const [searchValue, setSearchValue] = (0, react_1.useState)("");
    const [debouncedSearchValue, setDebouncedSearchValue] = (0, react_1.useState)("");
    const debouncedSetSearchValue = (0, react_1.useCallback)((0, utils_js_1.debounce)((query) => {
        setDebouncedSearchValue(query);
        onDebouncedSearchValueChange();
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
            onDebouncedSearchValueChange();
        },
    };
    return search;
};
exports.useDebouncedSearch = useDebouncedSearch;
//# sourceMappingURL=useDebouncedSearch.js.map