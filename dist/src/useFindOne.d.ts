import { GadgetRecord, LimitToKnownKeys, Select } from "@gadgetinc/api-client-core";
import { UseQueryResponse } from "urql";
import { FindOneFunction } from "./GadgetFunctions";
import { OptionsType } from "./OptionsType";
/**
 * React hook to fetch a Gadget record using the `findOne` method of a given manager.
 *
 * @param manager Gadget model manager to use
 * @param id id of the record to fetch
 * @param options options for selecting the fields in the result
 */
export declare const useFindOne: <OptionsT extends OptionsType, F extends FindOneFunction<OptionsT, any, any, any>, Options extends F["optionsType"]>(manager: {
    findOne: F;
}, id: string, options?: LimitToKnownKeys<Options, F["optionsType"]> | undefined) => UseQueryResponse<GadgetRecord<Select<Exclude<F["schemaType"], null | undefined>, Options["select"]>>, object>;
