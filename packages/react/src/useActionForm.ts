import type {
  ActionFunction,
  AnyClient,
  AnyModelManager,
  DefaultSelection,
  GadgetRecord,
  GlobalActionFunction,
  Select,
} from "@gadgetinc/api-client-core";
import { $modelRelationships, camelize } from "@gadgetinc/api-client-core";
import { useCallback, useEffect, useRef } from "react";
import type { DeepPartial, FieldErrors, FieldValues, UseFormProps, UseFormReturn } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useApi } from "./GadgetProvider.js";
import { useAction } from "./useAction.js";
import { useFindBy } from "./useFindBy.js";
import { useFindOne } from "./useFindOne.js";
import { useGlobalAction } from "./useGlobalAction.js";
import type { ActionHookState, ErrorWrapper, OptionsType } from "./utils.js";
import { get, set } from "./utils.js";

export * from "react-hook-form";

/** Finds a given record from the backend database by either id or a `{[field: string]: value}` slug */
const useFindExistingRecord = (
  modelManager: AnyModelManager | undefined,
  findBy: string | { [key: string]: any },
  options: { select?: Record<string, any>; pause?: boolean }
): [{ data?: GadgetRecord<any>; fetching: boolean; error?: ErrorWrapper }, () => void] => {
  // for simplicity, we conditionally call either the findBy or findOne hook. this violates the rules of hooks, but is a LOT simpler than mounting and pausing both hooks and massaging the results of each together. this means we don't support the same form toggling from being for a record found by id and then later a record found by some other criteria, but that's a very rare use case. you can workaround this by adding a `key` prop to the component calling `useActionForm`, and having the value change when the find method changes, which will give different instance of the component and avoid the hook order changing.
  if (modelManager && typeof findBy === "string") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useFindOne(modelManager as any, findBy, options);
  } else if (modelManager) {
    const [findByKey, findByValue] = Object.entries(findBy)[0];
    const finder = (modelManager as Record<string, any>)[`findBy${camelize(findByKey)}`];

    // eslint-disable-next-line react-hooks/rules-of-hooks
    return (useFindBy as any)(finder, findByValue, options);
  } else {
    return [
      { fetching: false },
      () => {
        // noop
      },
    ];
  }
};

const OmittedKeys = ["id", "createdAt", "updatedAt", "__typename"] as const;
type OmittedKey = (typeof OmittedKeys)[number];

const omitKeys = (data: any) => {
  const newData = { ...data };
  for (const key of OmittedKeys) {
    delete newData[key];
  }
  return newData;
};

const toDefaultValues = (modelApiIdentifier: string | undefined, data: any) => {
  data = omitKeys(data);

  if (modelApiIdentifier && data[modelApiIdentifier] && typeof data[modelApiIdentifier] === "object") {
    data[modelApiIdentifier] = omitKeys(data[modelApiIdentifier]);
  }

  return unwindEdges(data);
};

const unwindEdges = (input: any): any => {
  if (input !== null || (input !== undefined && typeof input === "object")) {
    if (Array.isArray(input)) {
      return input.map(unwindEdges);
    }

    if (input !== null && typeof input === "object") {
      if (input.edges && Array.isArray(input.edges)) {
        return input.edges.map((edge: any) => unwindEdges(edge.node));
      }

      const result: any = {};
      for (const key of Object.keys(input)) {
        result[key] = unwindEdges(input[key]);
      }
      return result;
    }

    return input;
  }
};

const disambiguateDefaultValues = (data: any, initialData: any, action: any) => {
  const initialKeys = Object.keys(initialData).filter((key) => !OmittedKeys.includes(key as OmittedKey));

  const result = Object.fromEntries(
    Object.entries(data).flatMap(([key, value]) => {
      if (initialKeys.includes(key)) {
        return [];
      }

      return [[key, value]];
    })
  );

  const modelData = { ...data[action.modelApiIdentifier] };

  for (const key of Object.keys(modelData)) {
    const initialValue = initialData[key];

    if (
      !!data[action.modelApiIdentifier] &&
      typeof data[action.modelApiIdentifier] === "object" &&
      key in data[action.modelApiIdentifier] &&
      initialValue !== data[action.modelApiIdentifier][key]
    ) {
      modelData[key] = data[action.modelApiIdentifier][key];
    } else if (key in data && initialValue !== data[key]) {
      modelData[key] = data[key];
    }
  }

  result[action.modelApiIdentifier] = modelData;
  return result;
};

function getUpdates(data: any): Record<string, number[]> {
  const updateList: Record<string, number[]> = {};

  function traverse(input: any, path: string | undefined = undefined, depth = 0): any {
    if (Array.isArray(input)) {
      return input.map((item: any, index) => {
        const currentPath = path ? `${path}.${index}` : index.toString();
        return traverse(item, currentPath, depth + 1);
      });
    } else if (input !== undefined && input !== null && typeof input === "object") {
      const result: any = {};

      for (const key of Object.keys(input)) {
        const currentPath = path ? `${path}.${key}` : key;
        result[key] = traverse(input[key], currentPath, depth + 1);
      }

      if (depth > 1) {
        const newPath = path?.substring(0, path.length - 2);

        if ("id" in input) {
          if (!updateList[newPath!]) {
            updateList[newPath!] = [];
          }

          updateList[newPath!].push(input["id"]);
        }
      }

      return result;
    }

    return input;
  }

  traverse(data);
  return updateList;
}

export const reshapeDataForGraphqlApi = async (client: AnyClient, defaultValues: any, data: any) => {
  const referencedTypes = client[$modelRelationships];

  if (!referencedTypes) {
    throw new Error("No Gadget model metadata found -- please ensure you are using the latest version of the API client for your app");
  }

  const updates = getUpdates(defaultValues); // grab the updates from default values to see what needs to be created, updated, or deleted

  function transform(
    input: any,
    depth = 0,
    path: string | undefined = undefined,
    fieldType: { type: string; model: string } | null = null,
    fieldRelationships: Record<string, { type: string; model: string }> | null = null
  ): any {
    if (Array.isArray(input)) {
      // If the input is an array, we need to handle it differently
      const results: any[] = [];
      const edge = updates[path!]; // grab the list of ids from the updates object, based on the path
      const handled: number[] = [];

      if (edge) {
        // if there are ids in the updates object, we need to handle them first
        results.push(
          edge.map((nodeId: any, nodeIndex: number) => {
            // for each id, find the corresponding item in the input array
            const item = input.find((item: any) => item.id == nodeId); // find the item in the input array that matches the id

            if (!item) {
              // if the item is not found, we need to delete it from the updates object as well as anything that references it
              const updateEntries = Object.entries(updates); // grab all the entries from the updates object
              const updateEntry = updateEntries.find(([key, _ids]) => key.includes(path! + "." + nodeIndex));

              if (updateEntry) {
                // if we find an entry that matches the path, we need to delete it from the updates object
                const { 0: updatePath, 1: _ } = updateEntry;
                delete updates[updatePath];
              }

              return { delete: { id: nodeId } };
            } else {
              const index = input.findIndex((item: any) => item.id == nodeId);
              delete updates[path!][nodeIndex]; // delete the id from the updates object so it's not handled again

              handled.push(index);

              const currentPath = path ? `${path}.${index}` : index.toString();
              return transform(item, depth + 1, currentPath, fieldType, fieldRelationships); // transform the item
            }
          })
        );
      }

      // handle the rest of the array - anything that wasn't in the updates object
      results.push(
        input
          .filter((_item, index) => !handled.includes(index))
          .map((item: any, index) => {
            const currentPath = path ? `${path}.${index}` : index.toString();
            return transform(item, depth + 1, currentPath, fieldType, fieldRelationships);
          })
      );

      return results.flatMap((result) => result);
    } else if (input != null && typeof input === "object") {
      // if the input is an object, we need to handle it differently
      const result: any = {};

      for (const key of Object.keys(input)) {
        const currentPath = path ? `${path}.${key}` : key;

        const fieldType = fieldRelationships ? fieldRelationships[key] : null;
        const relationships = fieldType ? referencedTypes?.[fieldType.model] : referencedTypes?.[key]; //

        result[key] = transform(input[key], depth + 1, currentPath, fieldType, relationships);
      }

      const { __typename, ...rest } = result;

      let belongsTo = null;
      const belongsToRelationships: Record<string, { type: string; model: string }> | null = fieldRelationships // grab the belongsTo relationships from the fieldRelationships object
        ? Object.entries(fieldRelationships)
            .filter(([_key, value]) => value.type === "BelongsTo")
            .reduce((obj, [key, value]) => {
              obj[key] = value;
              return obj;
            }, {} as Record<string, { type: string; model: string }>)
        : null;

      for (const key of Object.keys(belongsToRelationships ?? {})) {
        // for each belongsTo relationship, check if the input has a key that matches the relationship
        if (`${key}Id` in input) {
          if (belongsTo == null) {
            belongsTo = {};
          }

          belongsTo = { ...belongsTo, [key]: { _link: input[`${key}Id`] } };
          delete rest[`${key}Id`]; // delete the key from the rest object so it's not handled again
        }
      }

      if (belongsTo) {
        return depth <= 1 ? { ...rest, ...belongsTo } : { ...rest, create: { ...belongsTo } }; // when we're in the root, we need to return the belongsTo object as part of the result otherwise wrap it in a create
      }

      if (depth <= 1 || fieldType == null) {
        return { ...rest };
      }

      const inputHasId = "id" in input;

      switch (fieldType.type) {
        case "HasMany":
        case "HasOne":
          return inputHasId ? { update: { ...rest } } : { create: { ...rest } };
        case "BelongsTo":
          return inputHasId ? { _link: input["id"] } : { create: { ...rest } };
        default:
          throw new Error(
            `Can't transform input, Unknown field type ${fieldType}. ${JSON.stringify(
              {
                input,
                path,
                referencedTypes,
              },
              null,
              2
            )}`
          );
      }
    }

    return input;
  }

  const result = transform(data);

  return result;
};

/**
 * The identity of a record to build a form for
 *
 * - Pass the ID of a record as a string to look up a record by id
 * - Pass a {<fieldValue>: <value>} object to look up a record by some other field. __Note__: a `findBy` function must exist for the field you wish to find the record by.
 *
 * @example
 * // find the user record with ID=123
 * const { submit } = useActionForm(api.user.update, { record: "123" });
 *
 * @example
 * // find a record by email. `api.user.findByEmail` must exist
 * const { submit } = useActionForm(api.user.update, { record: { email: "user@gadget.app" } });
 */
export type RecordIdentifier = string | { [key: string]: any };

type UseActionFormHookStateData<F extends ActionFunction<any, any, any, any, any> | GlobalActionFunction<any>> = F extends ActionFunction<
  any,
  any,
  any,
  any,
  any
>
  ? F["hasReturnType"] extends true
    ? any
    : GadgetRecord<
        Select<Exclude<F["schemaType"], null | undefined>, DefaultSelection<F["selectionType"], F["optionsType"], F["defaultSelection"]>>
      >
  : any;

type UseActionFormHookState<F extends ActionFunction<any, any, any, any, any> | GlobalActionFunction<any>> = ActionHookState<
  UseActionFormHookStateData<F>,
  Exclude<F["variablesType"], null | undefined>
>;

type UseActionFormSubmit<F extends ActionFunction<any, any, any, any, any> | GlobalActionFunction<any>> = (
  event?: React.BaseSyntheticEvent<object, any, any> | undefined
) => Promise<UseActionFormHookState<F>>;

type ExcludeUndefined<T> = T extends undefined ? never : T;

type ServerSideError<F extends ActionFunction<any, any, any, any, any> | GlobalActionFunction<any>> = F extends ActionFunction<
  any,
  any,
  any,
  any,
  any
>
  ? {
      [key in F["modelApiIdentifier"]]?: {
        [key in
          | keyof F["selectionType"]
          | keyof ExcludeUndefined<F["variablesType"]>
          | ExcludeUndefined<F["modelApiIdentifier"] extends "user" ? "password" : never>]?: { message: string };
      };
    }
  : { [key in keyof ExcludeUndefined<F["variablesType"]>]: { message: string } };

type UseActionFormState<
  F extends ActionFunction<any, any, any, any, any> | GlobalActionFunction<any>,
  FormVariables extends FieldValues,
  FormContext
> = Omit<UseFormReturn<FormVariables, FormContext>["formState"], "errors"> & {
  errors: UseFormReturn<FormVariables, FormContext>["formState"]["errors"] & ServerSideError<F>;
};

type Increment<A extends number[]> = [...A, 0];

type IsAny<T> = 0 extends 1 & T ? true : false;

export type FormInput<InputT, Depth extends number = 9, CurrentDepth extends number[] = []> = CurrentDepth["length"] extends Depth
  ? any
  : IsAny<InputT> extends true
  ? any
  : InputT extends (infer Element)[]
  ? FormInput<Element, Depth, CurrentDepth>[]
  : InputT extends { create?: unknown; update?: unknown }
  ? FormInput<InputT["create"], Depth, Increment<CurrentDepth>> | FormInput<InputT["update"], Depth, Increment<CurrentDepth>>
  : InputT extends object
  ? { [K in keyof InputT]: FormInput<InputT[K], Depth, Increment<CurrentDepth>> }
  : InputT | null | undefined;

export type UseActionFormResult<
  GivenOptions extends OptionsType,
  SchemaT,
  ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any> | GlobalActionFunction<any>,
  FormVariables extends FieldValues,
  FormContext = any
> = Omit<UseFormReturn<FormVariables & FormInput<ActionFunc["variablesType"]>, FormContext>, "handleSubmit" | "formState"> & {
  formState: UseActionFormState<ActionFunc, FormVariables, FormContext>;
  /**
   * Any error that occurred during initial data fetching or action submission
   */
  error?: ErrorWrapper | Error | null;
  /**
   * Function to call to submit the form
   */
  submit: UseActionFormSubmit<ActionFunc>;
  /**
   * The data resulting from running the action
   */
  actionData?: ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any>
    ? ReturnType<typeof useAction<GivenOptions, SchemaT, ActionFunc, any>>[0]["data"]
    : ReturnType<typeof useGlobalAction<any>>[0]["data"];
};

/**
 * React hook to manage state for a form that calls a Gadget action. `useActionForm` must be passed an action function from an instance of your generated API client library, like `api.user.create`, `api.blogPost.publish` or `api.someGlobalAction`. `useActionForm` returns a `Form` object from `react-hook-form` which can be used to build great form experiences.
 *
 * `useActionForm` manages the Gadget API calls for the form, and handling validation errors returned by the Gadget backend. If your form is for an existing record, `useActionForm` will also fetch the record from the backend and populate the form with the existing values.
 *
 * `useActionForm` doesn't run the action when called. To actually submit the form, call the `submit` function on the returned `Form` object.
 *
 * @see https://react-hook-form.com/
 *
 * @param action an action function from a model manager in your application's client, like `api.user.create`
 * @param options action options, like selecting the fields in the result
 */
export const useActionForm = <
  GivenOptions extends OptionsType,
  SchemaT,
  ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any> | GlobalActionFunction<any>,
  // eslint-disable-next-line @typescript-eslint/ban-types
  ExtraFormVariables extends FieldValues = {},
  FormContext = any,
  ActionResultData = UseActionFormHookStateData<ActionFunc>,
  DefaultValues = ActionFunc["variablesType"] & ExtraFormVariables
>(
  action: ActionFunc,
  options?: Omit<UseFormProps<ActionFunc["variablesType"] & ExtraFormVariables, FormContext>, "defaultValues"> & {
    defaultValues?: DeepPartial<DefaultValues & { [key in OmittedKey]?: any }>;
    /**
     * The record identifier to run this action on, if it already exists.
     * Should be undefined for create actions, or a record ID (or finder) for update / etc actions
     **/
    findBy?: RecordIdentifier;
    /**
     * Which fields to select on from the record when retrieving it from the backend.
     */
    select?: ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any> ? ActionFunc["optionsType"]["select"] : never;
    /**
     * Which fields to send from the form's values when sending it from the backend.
     */
    send?: string[];
    /**
     * Called when the form submits
     */
    onSubmit?: () => void;
    /**
     * Called when the action completes successfully on the backend
     */
    onSuccess?: (actionResult: ActionResultData) => void;
    /**
     * Called when the form submission errors before sending, during the API call, or if the API call returns an error.
     */
    onError?: (error: Error | FieldErrors<ActionFunc["variablesType"]>) => void;
  }
): UseActionFormResult<GivenOptions, SchemaT, ActionFunc, ExtraFormVariables, FormContext> => {
  const api = useApi();
  const findExistingRecord = !!options?.findBy;
  const hasSetInitialValues = useRef<boolean>(!findExistingRecord);
  const isModelAction = "modelApiIdentifier" in action;

  // find the existing record if there is one
  const modelManager = isModelAction ? ((api as any)[action.modelApiIdentifier] as AnyModelManager) : undefined;
  const [findResult] = useFindExistingRecord(modelManager, options?.findBy || "1", {
    pause: !findExistingRecord,
    select: options?.select,
  });

  const isReady = !findExistingRecord || !!findResult.data;

  let defaultValues = options?.defaultValues;
  if (isModelAction && findResult.data) {
    const modelDefaultValues = toDefaultValues(action.modelApiIdentifier, findResult.data);
    defaultValues = action.hasAmbiguousIdentifier
      ? { ...options?.defaultValues, [action.modelApiIdentifier]: modelDefaultValues }
      : { ...options?.defaultValues, ...modelDefaultValues, [action.modelApiIdentifier]: modelDefaultValues };
  }

  let existingRecordId: string | undefined = undefined;

  if (findResult.data?.id) {
    existingRecordId = findResult.data.id;
  } else if (defaultValues?.id) {
    existingRecordId = defaultValues.id;
  } else if (isModelAction && (defaultValues as any)?.[action.modelApiIdentifier]?.id) {
    existingRecordId = (defaultValues as any)?.[action.modelApiIdentifier]?.id;
  }

  // setup the react-hook-form object, passing any options from the props
  const { handleSubmit, formState, ...formHook } = useForm<ActionFunc["variablesType"], FormContext>({
    ...options,
    defaultValues: toDefaultValues(isModelAction ? action.modelApiIdentifier : undefined, defaultValues),
  });

  // when the default values arrive from the record find later, reset them into the form. react-hook-form doesn't watch the default values after the first render
  useEffect(() => {
    if (isReady && !hasSetInitialValues.current && defaultValues) {
      hasSetInitialValues.current = true;
      formHook.reset(defaultValues);
    }
  }, [isReady, defaultValues, formHook]);

  // get the action runner to run on submit
  const [actionResult, runAction] =
    // eslint-disable-next-line react-hooks/rules-of-hooks
    isModelAction ? useAction(action, { select: options?.select }) : useGlobalAction(action);

  const handleSubmissionError = useCallback(
    (error: Error | FieldErrors<ActionFunc["variablesType"]>) => {
      if ("executionErrors" in error) {
        const errorWrapper = error as unknown as ErrorWrapper;
        const executionErrors = errorWrapper.executionErrors;

        if (executionErrors.length > 0) {
          for (const executionError of executionErrors) {
            if ("validationErrors" in executionError) {
              for (const validationError of executionError.validationErrors) {
                const errorKey = isModelAction
                  ? `${action.modelApiIdentifier}.${validationError.apiIdentifier}`
                  : validationError.apiIdentifier;
                formHook.setError(errorKey as any, {
                  message: validationError.message,
                });
              }
            } else {
              const codeToReplace = "code" in executionError ? `${executionError.code}: ` : "";
              const message = executionError.message.replace(codeToReplace, "");

              formHook.setError("root", { message });
            }
          }
        } else if (errorWrapper.networkError) {
          formHook.setError("root", { message: errorWrapper.networkError.message });
        }
      }

      options?.onError?.(error);
    },
    [action, formHook, options, isModelAction]
  );

  const submit = useCallback(
    async (event?: React.BaseSyntheticEvent<object, any, any> | undefined) => {
      let result: any;

      formHook.clearErrors();

      await handleSubmit(
        async (data) => {
          if (isModelAction) {
            if (!action.hasAmbiguousIdentifier && findResult.data) {
              data = disambiguateDefaultValues(data, findResult.data, action);
            }

            data = await reshapeDataForGraphqlApi(api, defaultValues, data);
          }

          let variables: ActionFunc["variablesType"] = {
            ...data,
          };

          if (existingRecordId) {
            variables.id = existingRecordId;
          }

          if (options?.send) {
            const unmasked = variables;
            variables = {};
            for (const key of options.send) {
              set(variables, key, get(unmasked, key));
            }
          }

          options?.onSubmit?.();

          result = await runAction(variables);
          if (!result.error) {
            options?.onSuccess?.(result.data);
          }
        },
        (errors) => {
          handleSubmissionError(errors);
        }
      )(event);

      if (result?.error) {
        handleSubmissionError(result.error);
      }

      return result;
    },
    [
      formHook,
      handleSubmit,
      action,
      isModelAction,
      findResult.data,
      existingRecordId,
      options,
      runAction,
      api,
      defaultValues,
      handleSubmissionError,
    ]
  );

  const proxiedFormState = new Proxy(formState, {
    get: (target, prop) => {
      if (prop === "isSubmitting") {
        return target.isSubmitting || actionResult.fetching;
      } else if (prop === "isSubmitSuccessful") {
        return target.isSubmitSuccessful && !actionResult.fetching && !actionResult.error;
      } else if (prop === "isLoading") {
        return target.isLoading || findResult.fetching;
      } else {
        return (target as any)[prop];
      }
    },
  }) as unknown as UseActionFormState<ActionFunc, ActionFunc["variablesType"] & ExtraFormVariables, FormContext>;

  return {
    ...formHook,
    formState: proxiedFormState,
    error: findResult.error || actionResult.error,
    submit: submit as unknown as UseActionFormSubmit<ActionFunc>,
    actionData: actionResult.data,
  };
};
