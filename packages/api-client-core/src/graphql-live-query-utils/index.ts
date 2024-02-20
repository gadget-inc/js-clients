import { applyJSONDiffPatch } from "./applyJSONDiffPatch.js";
import { createApplyLiveQueryPatch } from "./createApplyLivequeryPatch.js";

export const applyLiveQueryJSONDiffPatch =
    createApplyLiveQueryPatch(applyJSONDiffPatch);
