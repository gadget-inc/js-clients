import type { AnyClient, AnyModelManager, ErrorWrapper, GadgetRecord } from "@gadgetinc/api-client-core";
/** Finds a given record from the backend database by either id or a `{[field: string]: value}` slug */
export declare const useFindExistingRecord: (modelManager: AnyModelManager | undefined, findBy: string | {
    [key: string]: any;
} | undefined, options: {
    select?: Record<string, any>;
    pause?: boolean;
    throwOnInvalidFindByObject?: boolean;
}) => [{
    data?: GadgetRecord<any>;
    fetching: boolean;
    error?: ErrorWrapper;
}, () => void];
declare const OmittedKeys: readonly ["id", "createdAt", "updatedAt", "__typename"];
export type OmittedKey = (typeof OmittedKeys)[number];
export declare const processDefaultValues: (opts: {
    hasAmbiguousDefaultValues: boolean;
    modelApiIdentifier: string;
    data: any;
    defaultValues?: any;
}) => any;
export declare const toDefaultValues: (modelApiIdentifier: string | undefined, data: any) => any;
export declare const disambiguateDefaultValues: (data: any, initialData: any, action: any) => {
    [k: string]: unknown;
};
export declare const reshapeDataForGraphqlApi: (client: AnyClient, defaultValues: any, data: any) => Promise<any>;
export declare const isPlainObject: (obj: any) => obj is Record<string, unknown>;
export declare function transformContextAwareToSelect<T>(obj?: T): any;
export declare function getReadOnlyPaths(obj?: any, prefix?: string): string[];
/**
 * Uses the `select` object to remove any fields that are marked as `ReadOnly` from the `data` object.
 * Also removes any fields that isn't in the `send` array.
 */
export declare function applyDataMask(opts: {
    select?: any;
    send?: string[] | (() => string[]);
    data: Record<string, any>;
    modelApiIdentifier?: string;
}): {};
export {};
