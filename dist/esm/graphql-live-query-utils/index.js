import { patch } from "@n1ru4l/json-patch-plus";
import { createApplyLiveQueryPatch } from "./createApplyLiveQueryPatch.js";
export const applyJSONDiffPatch = (left, delta) => patch({
    left,
    delta,
});
export const applyLiveQueryJSONDiffPatch = createApplyLiveQueryPatch(applyJSONDiffPatch);
export { applyAsyncIterableIteratorToSink, makeAsyncIterableIteratorFromSink } from "@n1ru4l/push-pull-async-iterable-iterator";
//# sourceMappingURL=index.js.map