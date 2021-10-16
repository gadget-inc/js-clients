import { GadgetRecord, LimitToKnownKeys, Select } from "@gadgetinc/api-client-core";
import { UseQueryResponse } from "urql";
import { FindManyFunction } from "./GadgetFunctions";
import { OptionsType } from "./OptionsType";
/**
 * React hook to fetch many Gadget records using the `findMany` method of a given manager.
 *
 * @param manager Gadget model manager to use
 * @param options options for filtering and searching records, and selecting the fields in each record of the result
 */
export declare const useFindMany: <OptionsT extends OptionsType, F extends FindManyFunction<OptionsT, any, any, any>, Options extends F["optionsType"]>(manager: {
    findMany: F;
}, options?: LimitToKnownKeys<Options, F["optionsType"]> | undefined) => UseQueryResponse<GadgetRecord<Select<Exclude<F["schemaType"], null | undefined>, Options["select"]>>[], object>;
