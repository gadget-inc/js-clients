import type { ExecutionResult } from "graphql";
import { Repeater } from "../repeater/index.js";
export type ExecutionLivePatchResult<PatchPayload = unknown> = {
    errors?: ExecutionResult["errors"];
    data?: ExecutionResult["data"];
    patch?: PatchPayload;
    revision?: number;
    extensions?: ExecutionResult["extensions"];
};
export type ApplyPatchFunction<PatchPayload = unknown> = (previous: Record<string, unknown>, patch: PatchPayload) => Record<string, unknown>;
/**
 * Create a middleware generator function for applying live query patches on the client.
 */
export declare const createApplyLiveQueryPatch: <PatchPayload = unknown>(applyPatch: ApplyPatchFunction<PatchPayload>) => <TExecutionResult = Record<string, unknown>>(source: AsyncIterable<TExecutionResult>) => Repeater<TExecutionResult, any, unknown>;
