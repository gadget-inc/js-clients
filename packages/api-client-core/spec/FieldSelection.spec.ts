import { fieldSelectionToGQLBuilderFields } from "../src";

describe("fieldSelectionToGQLBuilderFields", () => {
  it("should convert a select parameter into an output suitable for gql-query-builder", () => {
    expect(fieldSelectionToGQLBuilderFields({ id: true, widget: { name: true, inventoryCount: false } })).toMatchInlineSnapshot(`
      [
        "id",
        {
          "widget": [
            "name",
          ],
        },
      ]
    `);
  });

  it("should allow no selections", () => {
    expect(fieldSelectionToGQLBuilderFields({})).toMatchInlineSnapshot(`[]`);
  });

  it("should convert deeply nested select parameters", () => {
    expect(fieldSelectionToGQLBuilderFields({ id: true, widget: { name: true, gizmos: { edges: { node: { id: true } } } } }))
      .toMatchInlineSnapshot(`
      [
        "id",
        {
          "widget": [
            "name",
            {
              "gizmos": [
                {
                  "edges": [
                    {
                      "node": [
                        "id",
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ]
    `);
  });

  it("should include the typename param at the root when asked", () => {
    expect(fieldSelectionToGQLBuilderFields({ name: true, inventoryCount: false }, true)).toMatchInlineSnapshot(`
      [
        "__typename",
        "name",
      ]
    `);
  });
});
