/// <reference types="react" resolution-mode="require"/>
import { type AutoEnumInputProps } from "../shared/AutoInputTypes.js";
export declare const useEnumInputController: (props: AutoEnumInputProps) => {
    path: string;
    allowMultiple: boolean;
    allowOther: boolean;
    /** The list of selected options. */
    selectedOptions: string[];
    /** The list of options that are provided by the configuration. */
    providedOptions: string[];
    /** The list of options that are currently visible based on the search query. */
    filteredOptions: string[];
    /** The list of all options that are available to select by combining the selected and provided options. */
    allOptions: string[];
    searchQuery: {
        value: string;
        setValue: import("react").Dispatch<import("react").SetStateAction<string>>;
    };
    /** The callback to handle the selection change */
    onSelectionChange: (selected: string | null) => void;
    label: string;
    metadata: import("../../metadata.js").FieldMetadata;
    fieldProps: import("../../useActionForm.js").ControllerRenderProps<any, string>;
    isError: boolean;
    errorMessage: string | undefined;
};
