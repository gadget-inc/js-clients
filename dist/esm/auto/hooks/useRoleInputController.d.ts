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
    fieldProps: import("../../useActionForm.js").ControllerRenderProps<any, string>;
    loading: boolean;
    rolesError: import("@gadgetinc/api-client-core").ErrorWrapper | undefined;
    fieldError: import("../../useActionForm.js").FieldError | undefined;
};
