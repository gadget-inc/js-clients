"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAsyncIterableIteratorFromSink = exports.applyAsyncIterableIteratorToSink = exports.applyLiveQueryJSONDiffPatch = exports.applyJSONDiffPatch = void 0;
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
//# sourceMappingURL=index.js.map