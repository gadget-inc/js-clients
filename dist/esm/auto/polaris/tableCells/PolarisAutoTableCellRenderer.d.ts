import React from "react";
import type { GadgetFieldType } from "../../../internal/gql/graphql.js";
import type { ColumnValueType } from "../../../utils.js";
export declare const PolarisAutoTableCellRenderer: (props: {
    column: {
        fieldType: GadgetFieldType;
        relatedField?: {
            apiIdentifier: string;
            fieldType: GadgetFieldType;
        };
    };
    value: ColumnValueType;
}) => React.JSX.Element | null;
