import { Control } from "react-hook-form";
export declare const useRoleInputController: (props: {
    field: string;
    control?: Control<any>;
}) => {
    selectedRoleKeys: string[];
    metadata: import("../../internal/gql/graphql.js").FieldMetadataFragment;
    options: {
        value: string;
        label: string;
        selected: boolean;
    }[];
    fieldProps: import("react-hook-form").ControllerRenderProps<any, string>;
    loading: boolean;
    rolesError: import("../../utils.js").ErrorWrapper | undefined;
    fieldError: import("react-hook-form").FieldError | undefined;
};
