import type { AnyClient, AnyModelManager, GadgetRecord } from "@gadgetinc/api-client-core";
import type { ErrorWrapper } from "../utils.js";
/** Finds a given record from the backend database by either id or a `{[field: string]: value}` slug */
export declare const useFindExistingRecord: (modelManager: AnyModelManager | undefined, findBy: string | {
    [key: string]: any;
}, options: {
    select?: Record<string, any>;
    pause?: boolean;
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
export declare function transformContextAwareToSelect<T>(obj?: T): any;
export declare function extractModifiablePaths(obj: any, prefix?: string): string[];
export {};
