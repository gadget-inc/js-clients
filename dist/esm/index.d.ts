export interface FieldSelection {
    [key: string]: boolean | null | undefined | FieldCall | FieldSelection;
}
export interface BuilderOperation {
    type: "query" | "subscription" | "mutation";
    fields: FieldSelection;
    name?: string;
    directives?: string[];
}
declare class FieldCall {
    readonly args: Record<string, any>;
    readonly subselection?: FieldSelection | undefined;
    constructor(args: Record<string, any>, subselection?: FieldSelection | undefined);
}
export interface VariableOptions {
    type: string;
    name?: string;
    value?: any;
    required?: boolean;
}
/** Represents one reference to a variable somewhere in a selection */
export declare class Variable {
    readonly type: string;
    readonly name?: string | undefined;
    readonly value?: any;
    constructor(type: string, name?: string | undefined, value?: any);
    present(): boolean;
}
/** Used for calling a field with arguments within the main body of a query */
export declare const Call: (args: Record<string, Variable | any>, subselection?: FieldSelection) => FieldCall;
/** Used for calling a field with a variable within the args to a field */
export declare const Var: (options: VariableOptions) => Variable;
/** Compiles one JS object describing a query into a GraphQL string */
export declare const compile: (operation: BuilderOperation) => string;
/** Compiles one JS object describing a query into a GraphQL string and set of variable values for passing alongside the query */
export declare const compileWithVariableValues: (operation: BuilderOperation) => {
    query: string;
    variables: Record<string, any>;
};
export {};
