import type { Nullable, RoleAssignmentsValueType } from "../../utils.js";
export declare const useTagsForTableCellRenderer: (props: {
    value: Nullable<string> | Nullable<string>[] | RoleAssignmentsValueType[];
    maxTagCount?: number;
    maxTagLength?: number;
}) => {
    allTags: string[];
    shortenedTags: string[];
    originalLength: number;
    hasOmittedTags: boolean;
};
