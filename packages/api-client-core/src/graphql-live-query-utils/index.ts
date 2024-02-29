import { applyJSONDiffPatch } from "@n1ru4l/graphql-live-query-patch-jsondiffpatch";
import { createApplyLiveQueryPatch } from "./createApplyLiveQueryPatch.js";

export const applyLiveQueryJSONDiffPatch = createApplyLiveQueryPatch(applyJSONDiffPatch);
