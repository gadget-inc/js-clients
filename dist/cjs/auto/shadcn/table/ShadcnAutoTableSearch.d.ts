import * as React from "react";
import { SearchResult } from "../../../useDebouncedSearch.js";
import { ShadcnElements } from "../elements.js";
/**
 * Renders table search controls for the ShadcnAutoTable
 */
export declare const makeShadcnAutoTableSearch: (elements: ShadcnElements) => (props: {
    search: SearchResult;
}) => React.JSX.Element;
