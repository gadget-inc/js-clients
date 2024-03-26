import { Delta, patch } from "@n1ru4l/json-patch-plus";
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
