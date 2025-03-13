import { X } from "lucide-react";
import * as React from "react";
import type { SearchResult } from "../../../useDebouncedSearch.js";
import type { ShadcnElements } from "../elements.js";

/**
 * Renders table search controls for the ShadcnAutoTable
 */
export const makeShadcnAutoTableSearch = (elements: ShadcnElements) => {
  const { Button, Input } = elements;

  function ShadcnAutoTableSearch(props: { search: SearchResult }) {
    const { clear, set, value } = props.search;

    return (
      <div className="flex flex-row items-center gap-2">
        <Input placeholder="Search" onChange={(e) => set(e.target.value)} value={value} className="min-w-[300px]"></Input>
        {value.length > 0 && (
          <Button disabled={!value} onClick={clear} variant="ghost">
            Reset <X />
          </Button>
        )}
      </div>
    );
  }

  return ShadcnAutoTableSearch;
};
