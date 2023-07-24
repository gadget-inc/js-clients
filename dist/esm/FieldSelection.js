/**
 * Converts our nested object format to the arrays of single-key objects that gql-query-builder expects
 * Input: `{ id: true, text: { html: true, markdown: true}}`
 * Output: `["id", { text: ["html", "markdown"] } ]`
 *
 * __Note__: It's important that any output objects have only one key -- `gql-query-builder` only looks at the first one. To add multiple fields with subselections, return multiple objects in the array.
 **/
export const fieldSelectionToGQLBuilderFields = (selection, includeTypename = false) => {
    const fields = [];
    if (includeTypename)
        fields.push("__typename");
    for (const [key, value] of Object.entries(selection)) {
        if (typeof value === "object" && value !== null) {
            fields.push({ [key]: fieldSelectionToGQLBuilderFields(value) });
        }
        else if (value) {
            fields.push(key);
        }
    }
    return [...new Set(fields)];
};
//# sourceMappingURL=FieldSelection.js.map