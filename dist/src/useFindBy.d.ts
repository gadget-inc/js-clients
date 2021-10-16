import { GadgetRecord, LimitToKnownKeys, Select } from "@gadgetinc/api-client-core";
import { UseQueryResponse } from "urql";
import { FindOneFunction } from "./GadgetFunctions";
import { OptionsType } from "./OptionsType";
/**
 * React hook to fetch a Gadget record using the `findByXYZ` method of a given manager.
 *
 * @param finder `findByXYZ` function from a Gadget manager that will be used
 * @param value field value of the record to fetch
 * @param options options for selecting the fields in the result
 */
export declare const useFindBy: <OptionsT extends OptionsType, F extends FindOneFunction<OptionsT, any, any, any>, Options extends F["optionsType"]>(finder: F, value: string, options?: LimitToKnownKeys<Options, F["optionsType"]> | undefined) => UseQueryResponse<GadgetRecord<Select<Exclude<F["schemaType"], null | undefined>, Options["select"]>>, object>;
