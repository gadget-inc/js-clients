import { createApplyLiveQueryPatch } from "@n1ru4l/graphql-live-query-patch";
import { applyJSONDiffPatch } from "@n1ru4l/graphql-live-query-patch-jsondiffpatch";

export const applyLiveQueryJSONDiffPatch =
    createApplyLiveQueryPatch(applyJSONDiffPatch);