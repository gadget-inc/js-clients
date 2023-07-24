import { Call, Var, compile } from "../src";
import { expectValidGraphQLQuery } from "./helpers";

describe("compiling queries", () => {
  test("it should compile a query for some fields", () => {
    const result = compile({
      type: "query",
      fields: {
        id: true,
        name: true,
        age: true,
      },
    });

    expectValidGraphQLQuery(result);
    expect(result).toMatchInlineSnapshot(`
      "query  {
        id
        name
        age
      }"
    `);
  });

  test("it should compile a query for a subselection of fields", () => {
    const result = compile({
      type: "query",
      fields: {
        id: true,
        name: true,
        author: {
          id: true,
          age: true,
          deep: {
            whatever: true,
          },
        },
      },
    });

    expectValidGraphQLQuery(result);
    expect(result).toMatchInlineSnapshot(`
      "query  {
        id
        name
        author {
          id
          age
          deep {
            whatever
          }
        }
      }"
    `);
  });

  test("it should ignore falsy fields", () => {
    let result = compile({
      type: "query",
      fields: {
        id: true,
        name: false,
        age: false,
      },
    });

    expectValidGraphQLQuery(result);
    expect(result).not.toContain("name");
    expect(result).not.toContain("age");
    expect(result).toMatchInlineSnapshot(`
      "query  {
        id
      }"
    `);

    result = compile({
      type: "query",
      fields: {
        id: true,
        name: false,
        deep: {
          in: true,
          out: false,
        },
      },
    });

    expectValidGraphQLQuery(result);
    expect(result).not.toContain("name");
    expect(result).not.toContain("out");
    expect(result).toMatchInlineSnapshot(`
      "query  {
        id
        deep {
          in
        }
      }"
    `);
  });

  test("it should compile an empty query", () => {
    const result = compile({
      type: "query",
      fields: {},
    });

    // not valid GraphQL, but compiles anyways
    expect(result).toMatchInlineSnapshot(`
      "query  {
        
      }"
    `);
  });

  test("it should compile a union spread", () => {
    const result = compile({
      type: "query",
      fields: {
        id: true,
        name: true,
        ["... on User"]: {
          age: true,
        },
      },
    });

    expectValidGraphQLQuery(result);
    expect(result).toMatchInlineSnapshot(`
      "query  {
        id
        name
        ... on User {
          age
        }
      }"
    `);
  });

  test("it should compile a query with a name", () => {
    const result = compile({
      type: "query",
      name: "GetUsers",
      fields: {
        id: true,
        name: true,
        age: true,
      },
    });

    expectValidGraphQLQuery(result);
    expect(result).toMatchInlineSnapshot(`
      "query GetUsers {
        id
        name
        age
      }"
    `);
  });

  test("it should compile a query with a live directives", () => {
    const result = compile({
      type: "query",
      name: "GetUsers",
      fields: {
        id: true,
        name: true,
        age: true,
      },
      directives: ["@live"],
    });

    expectValidGraphQLQuery(result);
    expect(result).toMatchInlineSnapshot(`
      "query GetUsers @live {
        id
        name
        age
      }"
    `);
  });

  test("it should compile a query with variables and a live directives", () => {
    const result = compile({
      type: "query",
      name: "GetUsers",
      fields: {
        user: Call(
          { id: Var({ type: "ID" }) },
          {
            id: true,
          }
        ),
      },
      directives: ["@live"],
    });

    expectValidGraphQLQuery(result);
    expect(result).toMatchInlineSnapshot(`
      "query GetUsers($id: ID) @live {
        user(id: $id) { 
          id 
        }
      }"
    `);
  });
});
