import type { GQLBuilderResult, VariablesOptions, ViewFunction, ViewResult } from "@gadgetinc/api-client-core";
import { ErrorWrapper, get, namespaceDataPath } from "@gadgetinc/utils";
import { RuntimeAdapter } from "./adapter.js";
import { createHookStub } from "./createHooks.js";
import type { CoreHooks, ReadHookResult, ReadOperationOptions, UseView } from "./types.js";
import { useQueryArgs } from "./utils.js";

export let useView: UseView = createHookStub("useView", (adapter: RuntimeAdapter, coreHooks: CoreHooks) => {
  useView = <VariablesT, F extends ViewFunction<VariablesT, any>>(
    view: F | string,
    variablesOrOptions?: VariablesT | Omit<ReadOperationOptions, "live">,
    maybeOptions?: Omit<ReadOperationOptions, "live">
  ): ReadHookResult<ViewResult<F>> => {
    let variables: VariablesT | undefined;
    let options: Omit<ReadOperationOptions, "live"> | undefined;

    if (typeof view == "string" || "variables" in view) {
      variables = variablesOrOptions as VariablesT;
      options = maybeOptions;
    } else if (variablesOrOptions) {
      options = variablesOrOptions as Omit<ReadOperationOptions, "live">;
    }

    const memoizedVariables = coreHooks.useStructuralMemo(variables);
    const memoizedOptions = coreHooks.useStructuralMemo({
      ...options,
      context: {
        ...options?.context,
        // if the view exports the typenames it references, add them to the context so urql will refresh the view when mutations are made against these typenames
        additionalTypenames: [
          ...(options?.context?.additionalTypenames ?? []),
          ...(typeof view == "string" ? [] : view.referencedTypenames ?? []),
        ],
      },
    });

    const [plan, dataPath] = adapter.framework.useMemo((): [plan: GQLBuilderResult, dataPath: string[]] => {
      if (typeof view == "string") {
        return [{ query: inlineViewQuery, variables: { query: view, variables: memoizedVariables } }, ["gellyView"]];
      } else {
        const variablesOptions: VariablesOptions = {};
        if ("variables" in view && memoizedVariables) {
          for (const [name, variable] of Object.entries(view.variables)) {
            const value = memoizedVariables[name as keyof typeof memoizedVariables] as unknown;
            if (typeof value != "undefined" && value !== null) {
              variablesOptions[name] = {
                value,
                ...variable,
              };
            }
          }
        }

        return [view.plan(variablesOptions), namespaceDataPath([view.gqlFieldName], view.namespace)];
      }
    }, [view, memoizedVariables]);

    const [rawResult, refresh] = coreHooks.useGadgetQuery(useQueryArgs(plan, memoizedOptions));

    const result = adapter.framework.useMemo(() => {
      const data = get(rawResult.data, dataPath);
      const error = ErrorWrapper.errorIfDataAbsent(rawResult, dataPath, options?.pause);

      return { ...rawResult, data, error };
    }, [dataPath, options?.pause, rawResult]);

    return [result, refresh];
  };
});

const inlineViewQuery = `query InlineView($query: String!, $variables: JSONObject) { 
  gellyView(query: $query, variables: $variables) 
}`;
