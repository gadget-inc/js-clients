import type { GadgetRangeFieldValidation } from "../../internal/gql/graphql.js";
import { type Control } from "../../useActionForm.js";
export declare const imageFileTypes: string[];
export declare const useFileInputController: (props: {
    field: string;
    control?: Control<any>;
}) => {
    fieldProps: import("react-hook-form/dist/types/controller.js").ControllerRenderProps<any, string>;
    isError: boolean;
    errorMessage: string | undefined;
    imageThumbnailURL: string | undefined;
    onFileUpload: (files: File[]) => Promise<void>;
    clearFileValue: () => void;
    validations: {
        fileSize: GadgetRangeFieldValidation | undefined;
        onlyImages: {
            acceptedTypes: string[];
            allowAnimatedImages: boolean;
        } | undefined;
    };
    metadata: import("../../metadata.js").FieldMetadata;
    canClearFileValue: boolean;
};
export declare const getFileSizeValidationMessage: (validation: GadgetRangeFieldValidation, messageMap: {
    min: (min: number) => string;
    max: (max: number) => string;
    inRange: (min: number, max: number) => string;
}) => string | undefined;
export declare const fileSizeValidationErrorMessage: (validation: GadgetRangeFieldValidation, fileSize: number) => string | undefined;
