/// <reference types="react" />
import type { ShadcnElements } from "./elements.js";
export * from "./elements.js";
/**
 * Build the Autocomponents library for your shadcn presentation components.
 * Autocomponents will render these given components, so they need to take the same base props that mainline shadcn components do.
 */
export declare const makeAutocomponents: (elements: ShadcnElements) => {
    AutoButton: <GivenOptions extends import("../../utils.js").OptionsType, SchemaT, ActionFunc extends import("@gadgetinc/api-client-core").GlobalActionFunction<any> | import("@gadgetinc/api-client-core").ActionFunction<GivenOptions, any, any, SchemaT, any>>(props: import("../hooks/useAutoButtonController.js").AutoButtonProps<GivenOptions, SchemaT, ActionFunc> & import("./elements.js").ButtonProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").JSX.Element;
    AutoForm: <GivenOptions_1 extends import("../../utils.js").OptionsType, SchemaT_1, ActionFunc_1 extends import("@gadgetinc/api-client-core").ActionFunction<GivenOptions_1, any, any, SchemaT_1, any>>(props: {
        action: ActionFunc_1;
        record?: any;
        include?: string[] | undefined;
        exclude?: string[] | undefined;
        defaultValues?: (ActionFunc_1["variablesType"] & Record<string, unknown>) | undefined;
        submitLabel?: import("react").ReactNode;
        successContent?: import("react").ReactNode;
        title?: string | false | undefined;
        select?: GivenOptions_1["select"] | undefined;
        onSuccess?: ((record: import("../../use-action-form/types.js").UseActionFormHookStateData<ActionFunc_1>) => void) | undefined;
        onFailure?: ((error: Error | import("react-hook-form").FieldErrors<ActionFunc_1["variablesType"]>) => void) | undefined;
        children?: import("react").ReactNode;
        debug?: boolean | undefined;
    } & (ActionFunc_1 extends import("../../use-action-form/types.js").AnyActionWithId<GivenOptions_1> ? {
        findBy?: import("../../use-action-form/types.js").RecordIdentifier | undefined;
    } : {}) & import("./elements.js").BaseProps) => import("react").JSX.Element;
    AutoTable: <GivenOptions_2 extends import("../../utils.js").OptionsType, SchemaT_2, FinderFunction extends import("@gadgetinc/api-client-core").FindManyFunction<GivenOptions_2, any, SchemaT_2, any>, Options extends FinderFunction["optionsType"]>(props: import("../AutoTable.js").AutoTableProps<GivenOptions_2, SchemaT_2, FinderFunction, Options>) => import("react").JSX.Element;
};
