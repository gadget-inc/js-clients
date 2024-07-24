import { useCallback, useState } from "react";
import { debounce } from "./utils.js";

export interface SearchResult {
  value: string;
  debouncedValue: string;
  set: (value: string) => void;
  clear: () => void;
}

export const useDebouncedSearch = (props: { onDebouncedSearchValueChange: () => void; debounceMilliseconds?: number }) => {
  const { onDebouncedSearchValueChange, debounceMilliseconds } = props;
  const [searchValue, setSearchValue] = useState<string>("");
  const [debouncedSearchValue, setDebouncedSearchValue] = useState<string>("");

  const debouncedSetSearchValue = useCallback(
    debounce((query: string) => {
      setDebouncedSearchValue(query);
      onDebouncedSearchValueChange();
    }, debounceMilliseconds),
    []
  );

  const search = {
    value: searchValue,
    debouncedValue: debouncedSearchValue,
    set: (query: string) => {
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
