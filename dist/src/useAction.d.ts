import { LimitToKnownKeys, Select } from "@gadgetinc/api-client-core";
import { UseMutationResponse } from "urql";
import { ActionFunction } from "./GadgetFunctions";
import { OptionsType } from "./OptionsType";
/**
 * React hook to fetch a Gadget record using the `findByXYZ` method of a given manager.
 *
 * @param action `findByXYZ` function from a Gadget manager that will be used
 * @param params input params to the Gadget action
 * @param options options for selecting the fields in the result
 */
export declare const useAction: <OptionsT extends OptionsType, F extends ActionFunction<OptionsT, any, any, any, any>, Options extends F["optionsType"]>(action: F, options?: LimitToKnownKeys<Options, F["optionsType"]> | undefined) => UseMutationResponse<Select<Exclude<F["schemaType"], null | undefined>, Options["select"]>, Exclude<F["variablesType"], null | undefined>>;
