import { ViewFunctionWithVariables, ViewFunctionWithoutVariables } from "../GadgetFunctions.js";
import { RuntimeAdapter } from "../adaptors/types.js";
import { CoreHooks } from "../createHooks.js";
import { ViewResult } from "../types.js";
import { ReadHookResult, ReadOperationOptions } from "./utils.js";
export declare const createUseView: (adapter: RuntimeAdapter, coreHooks: CoreHooks) => {
    useView: {
        <F extends ViewFunctionWithoutVariables<any>>(view: F, options?: Omit<ReadOperationOptions, "live">): ReadHookResult<ViewResult<F>>;
        <F_1 extends ViewFunctionWithVariables<any, any>>(view: F_1, variables: F_1["variablesType"], options?: Omit<ReadOperationOptions, "live">): ReadHookResult<ViewResult<F_1>>;
        (gellyQuery: string, variables?: Record<string, unknown>, options?: Omit<ReadOperationOptions, "live">): ReadHookResult<unknown>;
    };
};
