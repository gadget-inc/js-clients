"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyLiveQueryJSONDiffPatch = exports.applyJSONDiffPatch = void 0;
const json_patch_plus_1 = require("@n1ru4l/json-patch-plus");
const createApplyLiveQueryPatch_js_1 = require("./createApplyLiveQueryPatch.js");
const applyJSONDiffPatch = (left, delta) => (0, json_patch_plus_1.patch)({
    left,
    delta,
});
exports.applyJSONDiffPatch = applyJSONDiffPatch;
exports.applyLiveQueryJSONDiffPatch = (0, createApplyLiveQueryPatch_js_1.createApplyLiveQueryPatch)(exports.applyJSONDiffPatch);
//# sourceMappingURL=index.js.map