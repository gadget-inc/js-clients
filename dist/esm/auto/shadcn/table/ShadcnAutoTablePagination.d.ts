import * as React from "react";
import { PaginationResult } from "../../../useList.js";
import { ShadcnElements } from "../elements.js";
/**
 * Renders pagination controls for the ShadcnAutoTable
 */
export declare const makeShadcnAutoTablePagination: (elements: ShadcnElements) => (props: {
    page: PaginationResult;
}) => React.JSX.Element;
