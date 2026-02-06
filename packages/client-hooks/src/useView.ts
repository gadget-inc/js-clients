import type { GQLBuilderResult, VariablesOptions, ViewFunction, ViewResult } from "@gadgetinc/core";
import type { RuntimeAdapter } from "./adapter.js";
import { createHookStub } from "./createHooks.js";
import type { CoreHooks, ReadHookResult, ReadOperationOptions, UseView } from "./types.js";
import { useQueryArgs } from "./utils.js";

let useViewImpl: UseView = createHookStub("useView");

createHookStub("useView", (adapter: RuntimeAdapter, coreHooks: CoreHooks) => {
  useViewImpl = <VariablesT, F extends ViewFunction<VariablesT, any>>(
    view: F | string,
    variablesOrOptions?: VariablesT | Omit<ReadOperationOptions, "live">,
    maybeOptions?: Omit<ReadOperationOptions, "live">
  ): ReadHookResult<ViewResult<F>> => {
    let variables: VariablesT | undefined;
    let options: Omit<ReadOperationOptions, "live"> | undefined;
    const { errorIfDataAbsent } = coreHooks.useCoreImplementation();

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
          ...(typeof view == "string" ? [] : (view.referencedTypenames ?? [])),
        ],
      },
    });

    const plan = adapter.framework.useMemo((): GQLBuilderResult => {
      if (typeof view == "string") {
        return { query: inlineViewQuery, variables: { query: view, variables: memoizedVariables } };
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

        return view.plan(variablesOptions);
      }
    }, [view, memoizedVariables]);

    const [rawResult, refresh] = coreHooks.useGadgetQuery(useQueryArgs(plan, memoizedOptions));

    const result = adapter.framework.useMemo(() => {
      if (typeof view == "string") {
        const data = rawResult.data?.["gellyView"];
        const error = errorIfDataAbsent(rawResult, ["gellyView"], options?.pause);
        return { ...rawResult, data, error };
      } else {
        return { ...rawResult, ...view.processResult(rawResult, { pause: options?.pause }) };
      }
    }, [rawResult, view, options?.pause]);

    return [result, refresh];
  };
});

export const useView: UseView = ((view: any, variablesOrOptions?: any, maybeOptions?: any) =>
  useViewImpl(view, variablesOrOptions, maybeOptions)) as UseView;

const inlineViewQuery = `query InlineView($query: String!, $variables: JSONObject) { 
  gellyView(query: $query, variables: $variables) 
}`;
