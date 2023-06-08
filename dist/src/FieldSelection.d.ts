/**
 * Represents a list of fields selected from a GraphQL API call. Allows nesting, conditional selection.
 * Example: `{ id: true, name: false, richText: { markdown: true, html: false } }`
 **/
export interface FieldSelection {
    [key: string]: boolean | null | undefined | FieldSelection;
}
/**
 * Converts our nested object format to the arrays of single-key objects that gql-query-builder expects
 * Input: `{ id: true, text: { html: true, markdown: true}}`
 * Output: `["id", { text: ["html", "markdown"] } ]`
 *
 * __Note__: It's important that any output objects have only one key -- `gql-query-builder` only looks at the first one. To add multiple fields with subselections, return multiple objects in the array.
 **/
export declare const fieldSelectionToGQLBuilderFields: (selection: FieldSelection, includeTypename?: boolean) => (string | object | import("gql-query-builder/build/NestedField").default)[];
