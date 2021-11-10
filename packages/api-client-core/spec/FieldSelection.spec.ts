import { fieldSelectionToGQLBuilderFields } from "../src";

describe("fieldSelectionToGQLBuilderFields", () => {
  it("should convert a select parameter into an output suitable for gql-query-builder", () => {
    expect(fieldSelectionToGQLBuilderFields({ id: true, widget: { name: true, inventoryCount: false } })).toMatchInlineSnapshot(`
      Array [
        "id",
        Object {
          "widget": Array [
            "name",
          ],
        },
      ]
    `);
  });

  it("should allow no selections", () => {
    expect(fieldSelectionToGQLBuilderFields({})).toMatchInlineSnapshot(`Array []`);
  });

  it("should convert deeply nested select parameters", () => {
    expect(fieldSelectionToGQLBuilderFields({ id: true, widget: { name: true, gizmos: { edges: { node: { id: true } } } } }))
      .toMatchInlineSnapshot(`
      Array [
        "id",
        Object {
          "widget": Array [
            "name",
            Object {
              "gizmos": Array [
                Object {
                  "edges": Array [
                    Object {
                      "node": Array [
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
      Array [
        "__typename",
        "name",
      ]
    `);
  });
});
