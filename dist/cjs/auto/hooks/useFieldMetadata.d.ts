import { type FieldMetadata } from "../../metadata.js";
export declare const useMaybeFieldMetadata: (fieldApiIdentifier: string) => {
    path: string;
    metadata: FieldMetadata | undefined;
};
export declare const useFieldMetadata: (fieldApiIdentifier: string) => {
    path: string;
    metadata: FieldMetadata;
};
export declare const useRelationshipTransformedMetaDataPaths: (fieldApiIdentifier: string) => {
    path: string;
    metaDataPath: string;
} | null;
