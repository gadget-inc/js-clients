import type { FieldMetadata } from "./metadata.js";
export declare const RequiredValidationSpecId = "gadget/validation/required";
export interface FailedJSONParse {
    $failedParse: true;
    error: Error;
    raw: string;
}
export declare const isFailedJSONParse: (value: any) => value is FailedJSONParse;
/**
 * Build a Yup validation schema given some fields metadata for validating that a data object conforms to the schema at runtime
 */
export declare const validationSchema: (fields: FieldMetadata[], pathsToValidate?: string[], currentPath?: string) => import("yup").ObjectSchema<{
    [x: string]: any;
}, import("yup").AnyObject, {
    [x: string]: any;
}, "">;
export interface AutoFileFieldValue {
    fileName: string;
    mimeType: string;
    url?: string;
    directUploadToken?: string;
    $uploading?: boolean;
    $invalidFileSize?: number;
}
export declare const isAutoFileFieldValue: (value: any) => value is AutoFileFieldValue;
