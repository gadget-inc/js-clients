/**
 * Represents a list of fields selected from a GraphQL API call. Allows nesting, conditional selection.
 * Example: `{ id: true, name: false, richText: { markdown: true, html: false } }`
 **/
export interface FieldSelection {
    [key: string]: boolean | null | undefined | FieldSelection;
}
/**
 * Take a FieldSelection type and construct a type with all its fields required and selected.
 */
export type AllFieldsSelected<Selection extends FieldSelection> = {
    [K in keyof Selection]-?: NonNullable<Selection[K]> extends FieldSelection ? AllFieldsSelected<NonNullable<Selection[K]>> : true;
};
/**
 * Take a FieldSelection type and construct a type with its fields set to true
 * rather than (boolean | null | undefined)
 */
export type SomeFieldsSelected<Selection extends FieldSelection> = {
    [K in keyof Selection]?: NonNullable<Selection[K]> extends FieldSelection ? AllFieldsSelected<NonNullable<Selection[K]>> : true;
};
