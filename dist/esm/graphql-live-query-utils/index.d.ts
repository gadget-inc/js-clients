import type { DefinitionNode, DirectiveNode } from "@0no-co/graphql.web";
import type { Delta } from "@n1ru4l/json-patch-plus";
import type { Maybe } from "graphql/jsutils/Maybe.js";
export type ApplyPatchFunction<PatchPayload = unknown> = (previous: Record<string, unknown>, patch: PatchPayload) => Record<string, unknown>;
export declare const applyJSONDiffPatch: ApplyPatchFunction<Delta>;
export declare const applyLiveQueryJSONDiffPatch: <TExecutionResult = Record<string, unknown>>(source: AsyncIterable<TExecutionResult>) => import("../repeater/index.js").Repeater<TExecutionResult, any, unknown>;
export { applyAsyncIterableIteratorToSink, makeAsyncIterableIteratorFromSink } from "@n1ru4l/push-pull-async-iterable-iterator";
export declare const getLiveDirectiveNode: (input: DefinitionNode) => Maybe<DirectiveNode>;
export declare const isLiveQueryOperationDefinitionNode: (input: DefinitionNode) => input is import("graphql").OperationDefinitionNode;
