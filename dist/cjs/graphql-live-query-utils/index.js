"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLiveQueryOperationDefinitionNode = exports.getLiveDirectiveNode = exports.makeAsyncIterableIteratorFromSink = exports.applyAsyncIterableIteratorToSink = exports.applyLiveQueryJSONDiffPatch = exports.applyJSONDiffPatch = void 0;
const json_patch_plus_1 = require("@n1ru4l/json-patch-plus");
const createApplyLiveQueryPatch_js_1 = require("./createApplyLiveQueryPatch.js");
const applyJSONDiffPatch = (left, delta) => (0, json_patch_plus_1.patch)({
    left,
    delta,
});
exports.applyJSONDiffPatch = applyJSONDiffPatch;
exports.applyLiveQueryJSONDiffPatch = (0, createApplyLiveQueryPatch_js_1.createApplyLiveQueryPatch)(exports.applyJSONDiffPatch);
var push_pull_async_iterable_iterator_1 = require("@n1ru4l/push-pull-async-iterable-iterator");
Object.defineProperty(exports, "applyAsyncIterableIteratorToSink", { enumerable: true, get: function () { return push_pull_async_iterable_iterator_1.applyAsyncIterableIteratorToSink; } });
Object.defineProperty(exports, "makeAsyncIterableIteratorFromSink", { enumerable: true, get: function () { return push_pull_async_iterable_iterator_1.makeAsyncIterableIteratorFromSink; } });
const getLiveDirectiveNode = (input) => {
    var _a;
    if (input.kind !== "OperationDefinition" || input.operation !== "query") {
        return null;
    }
    return (_a = input.directives) === null || _a === void 0 ? void 0 : _a.find((d) => d.name.value === "live");
};
exports.getLiveDirectiveNode = getLiveDirectiveNode;
const isLiveQueryOperationDefinitionNode = (input) => {
    return !!(0, exports.getLiveDirectiveNode)(input);
};
exports.isLiveQueryOperationDefinitionNode = isLiveQueryOperationDefinitionNode;
//# sourceMappingURL=index.js.map