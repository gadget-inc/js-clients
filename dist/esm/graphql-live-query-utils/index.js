import { patch } from "@n1ru4l/json-patch-plus";
import { createApplyLiveQueryPatch } from "./createApplyLiveQueryPatch.js";
export const applyJSONDiffPatch = (left, delta) => patch({
    left,
    delta,
});
export const applyLiveQueryJSONDiffPatch = createApplyLiveQueryPatch(applyJSONDiffPatch);
//# sourceMappingURL=index.js.map