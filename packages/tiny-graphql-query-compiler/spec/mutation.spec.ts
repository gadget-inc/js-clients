import { Call, Var, compile } from "../src";
import { expectValidGraphQLQuery } from "./helpers";

describe("compiling mutation", () => {
  test("it should compile a mutation for some fields", () => {
    const result = compile({
      type: "mutation",
      fields: {
        createPost: Call(
          { post: Var({ type: "PostInput" }) },
          {
            id: true,
            title: true,
          }
        ),
      },
    });

    expectValidGraphQLQuery(result);
    expect(result).toMatchInlineSnapshot(`
      "mutation ($post: PostInput) {
        createPost(post: $post) {
          id
          title
        }
      }"
    `);
  });

  test("it should compile a mutation that takes no arguments", () => {
    const result = compile({
      type: "mutation",
      fields: {
        createPost: {
          id: true,
          title: true,
        },
      },
    });

    expectValidGraphQLQuery(result);
    expect(result).toMatchInlineSnapshot(`
      "mutation  {
        createPost {
          id
          title
        }
      }"
    `);
  });
});
