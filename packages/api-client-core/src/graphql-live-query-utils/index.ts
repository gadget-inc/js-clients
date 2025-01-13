import type { DefinitionNode, DirectiveNode, OperationDefinitionNode } from "@0no-co/graphql.web";
import type { Delta } from "@n1ru4l/json-patch-plus";
import { patch } from "@n1ru4l/json-patch-plus";
import type { Maybe } from "graphql/jsutils/Maybe.js";
import { createApplyLiveQueryPatch } from "./createApplyLiveQueryPatch.js";

export type ApplyPatchFunction<PatchPayload = unknown> = (
  previous: Record<string, unknown>,
  patch: PatchPayload
) => Record<string, unknown>;

export const applyJSONDiffPatch: ApplyPatchFunction<Delta> = (left, delta): Record<string, unknown> =>
  patch({
    left,
    delta,
  });

export const applyLiveQueryJSONDiffPatch = createApplyLiveQueryPatch(applyJSONDiffPatch);
export { applyAsyncIterableIteratorToSink, makeAsyncIterableIteratorFromSink } from "@n1ru4l/push-pull-async-iterable-iterator";

export const getLiveDirectiveNode = (input: DefinitionNode): Maybe<DirectiveNode> => {
  if (input.kind !== "OperationDefinition" || input.operation !== "query") {
    return null;
  }
  return input.directives?.find((d) => d.name.value === "live");
};

export const isLiveQueryOperationDefinitionNode = (input: DefinitionNode): input is OperationDefinitionNode => {
  return !!getLiveDirectiveNode(input);
};
