import { patch } from "@n1ru4l/json-patch-plus";
import { createApplyLiveQueryPatch } from "./createApplyLiveQueryPatch.js";
export const applyJSONDiffPatch = (left, delta) => patch({
    left,
    delta,
});
export const applyLiveQueryJSONDiffPatch = createApplyLiveQueryPatch(applyJSONDiffPatch);
export { applyAsyncIterableIteratorToSink, makeAsyncIterableIteratorFromSink } from "@n1ru4l/push-pull-async-iterable-iterator";
export const getLiveDirectiveNode = (input) => {
    var _a;
    if (input.kind !== "OperationDefinition" || input.operation !== "query") {
        return null;
    }
    return (_a = input.directives) === null || _a === void 0 ? void 0 : _a.find((d) => d.name.value === "live");
};
export const isLiveQueryOperationDefinitionNode = (input) => {
    return !!getLiveDirectiveNode(input);
};
//# sourceMappingURL=index.js.map