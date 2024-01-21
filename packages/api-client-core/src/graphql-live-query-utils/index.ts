import { createApplyLiveQueryPatch } from "./createApplyLivequeryPatch.js";
import { applyJSONDiffPatch } from "@n1ru4l/graphql-live-query-patch-jsondiffpatch";

export const applyLiveQueryJSONDiffPatch =
    createApplyLiveQueryPatch(applyJSONDiffPatch);