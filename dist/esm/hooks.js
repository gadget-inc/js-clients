import { createHooks, createUseAction, createUseBulkAction, createUseEnqueue, createUseFetch, createUseFindBy, createUseFindFirst, createUseFindMany, createUseFindOne, createUseGet, createUseGlobalAction, createUseMaybeFindFirst, createUseMaybeFindOne, createUseView, } from "@gadgetinc/api-client-core";
import { reactAdapter } from "./adaptor.js";
const coreHooks = createHooks(reactAdapter);
const { useGadgetQuery, useGadgetMutation, useConnection, useApi } = coreHooks;
export { useApi, useConnection, useGadgetMutation as useMutation, useGadgetQuery as useQuery };
export const { useAction } = createUseAction(reactAdapter, coreHooks);
export const { useBulkAction } = createUseBulkAction(reactAdapter, coreHooks);
export const { useEnqueue } = createUseEnqueue(reactAdapter, coreHooks);
export const { useFetch } = createUseFetch(reactAdapter, coreHooks);
export const { useFindMany } = createUseFindMany(reactAdapter, coreHooks);
export const { useFindOne } = createUseFindOne(reactAdapter, coreHooks);
export const { useFindBy } = createUseFindBy(reactAdapter, coreHooks);
export const { useFindFirst } = createUseFindFirst(reactAdapter, coreHooks);
export const { useGet } = createUseGet(reactAdapter, coreHooks);
export const { useGlobalAction } = createUseGlobalAction(reactAdapter, coreHooks);
export const { useMaybeFindFirst } = createUseMaybeFindFirst(reactAdapter, coreHooks);
export const { useMaybeFindOne } = createUseMaybeFindOne(reactAdapter, coreHooks);
export const { useView } = createUseView(reactAdapter, coreHooks);
//# sourceMappingURL=hooks.js.map