import type { Delta } from "@n1ru4l/json-patch-plus";
export type ApplyPatchFunction<PatchPayload = unknown> = (previous: Record<string, unknown>, patch: PatchPayload) => Record<string, unknown>;
export declare const applyJSONDiffPatch: ApplyPatchFunction<Delta>;
export declare const applyLiveQueryJSONDiffPatch: <TExecutionResult = Record<string, unknown>>(source: AsyncIterable<TExecutionResult>) => import("../repeater/index.js").Repeater<TExecutionResult, any, unknown>;
export { applyAsyncIterableIteratorToSink, makeAsyncIterableIteratorFromSink } from "@n1ru4l/push-pull-async-iterable-iterator";
