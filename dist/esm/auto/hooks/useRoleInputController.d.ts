import type { Control } from "react-hook-form";
export declare const useRoleInputController: (props: {
    field: string;
    control?: Control<any>;
}) => {
    selectedRoleKeys: any;
    metadata: import("../../internal/gql/graphql.js").FieldMetadataFragment;
    options: {
        value: string;
        label: string;
    }[];
    fieldProps: import("react-hook-form").ControllerRenderProps<any, string>;
    loading: boolean;
    rolesError: import("../../utils.js").ErrorWrapper | undefined;
    fieldError: import("react-hook-form").FieldError | undefined;
};
