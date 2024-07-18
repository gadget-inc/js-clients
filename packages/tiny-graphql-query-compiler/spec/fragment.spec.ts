import { Call, On, Var, compile } from "../src/index.js";
import { expectValidGraphQLQuery } from "./helpers.js";

describe("compiling with fragments", () => {
  test("it should compile a query that has fragments", () => {
    const result = compile({
      type: "query",
      fields: {
        post: {
          __typename: true,
          TypeWithName: On({
            id: true,
            name: true,
          }),
          TypeWithDescription: On({
            id: true,
            description: true,
          }),
        },
      },
    });

    expectValidGraphQLQuery(result);
    expect(result).toMatchInlineSnapshot(`
      "query  {
        post {
          __typename
          ... on TypeWithName {
            id
            name
          }
          ... on TypeWithDescription {
            id
            description
          }
        }
      }"
    `);
  });

  test("it should compile a query that has fragments that make field calls", () => {
    const result = compile({
      type: "query",
      fields: {
        post: {
          __typename: true,
          TypeWithName: On({
            id: true,
            name: true,
          }),
          TypeWithDescription: On({
            id: true,
            description: Call({ length: Var({ type: "Int" }) }),
          }),
        },
      },
    });

    expectValidGraphQLQuery(result);
    expect(result).toMatchInlineSnapshot(`
      "query ($length: Int) {
        post {
          __typename
          ... on TypeWithName {
            id
            name
          }
          ... on TypeWithDescription {
            id
            description(length: $length)
          }
        }
      }"
    `);
  });

  test("it should compile a query that has fragments that make field calls with a required value", () => {
    const result = compile({
      type: "query",
      fields: {
        post: {
          __typename: true,
          TypeWithName: On({
            id: true,
            name: true,
          }),
          TypeWithDescription: On({
            id: true,
            description: Call({ length: Var({ type: "Int", required: true }) }, { truncated: true }),
          }),
        },
      },
    });

    expectValidGraphQLQuery(result);
    expect(result).toMatchInlineSnapshot(`
      "query ($length: Int!) {
        post {
          __typename
          ... on TypeWithName {
            id
            name
          }
          ... on TypeWithDescription {
            id
            description(length: $length) {
              truncated
            }
          }
        }
      }"
    `);
  });

  test("it should compile a mutation that has fragments", () => {
    const result = compile({
      type: "mutation",
      name: "UpsertPost",
      fields: {
        upsertPost: Call(
          {
            on: Var({ type: "[String!]" }),
            post: Var({ type: "PostInput" }),
          },
          {
            __typename: true,
            UpsertPostCreate: On({
              result: true,
            }),
            UpsertPostUpdate: On({
              id: true,
              title: true,
              body: true,
            }),
          }
        ),
      },
    });

    expectValidGraphQLQuery(result);
    expect(result).toMatchInlineSnapshot(`
      "mutation UpsertPost($on: [String!], $post: PostInput) {
        upsertPost(on: $on, post: $post) {
          __typename
          ... on UpsertPostCreate {
            result
          }
          ... on UpsertPostUpdate {
            id
            title
            body
          }
        }
      }"
    `);
  });
});
