import type { Control } from "../../useActionForm.js";
export declare const useRoleInputController: (props: {
    field: string;
    control?: Control<any>;
}) => {
    selectedRoleKeys: any;
    metadata: import("../../metadata.js").FieldMetadata;
    options: {
        value: string;
        label: string;
    }[];
    fieldProps: import("react-hook-form/dist/types/controller.js").ControllerRenderProps<any, string>;
    loading: boolean;
    rolesError: import("../../utils.js").ErrorWrapper | undefined;
    fieldError: import("react-hook-form/dist/types/errors.js").FieldError | undefined;
};
