import type { FieldMetadata } from "./metadata.js";
/**
 * Build a Yup validation schema given some fields metadata for validating that a data object conforms to the schema at runtime
 */
export declare const validationSchema: (fields: FieldMetadata[]) => import("yup").ObjectSchema<{
    [x: string]: any;
}, import("yup").AnyObject, {
    [x: string]: any;
}, "">;
