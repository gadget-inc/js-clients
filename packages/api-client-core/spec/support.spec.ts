import { CombinedError } from "@urql/core";
import { GraphQLError } from "graphql";
import { assertOperationSuccess } from "../src";

describe("support utilities", () => {
  describe("assertOperationSuccess", () => {
    test("returns the result at the datapath if the operation was successful", () => {
      expect(
        assertOperationSuccess(
          {
            operation: null as any,
            data: { foo: { bar: "baz" } },
          },
          ["foo", "bar"]
        )
      ).toEqual("baz");
    });

    test("throws the operation error if there's a network error on the operation", () => {
      expect(() =>
        assertOperationSuccess(
          {
            operation: null as any,
            data: null,
            error: new CombinedError({ networkError: new Error("foobar") }),
          },

          ["foo", "bar"]
        )
      ).toThrowErrorMatchingInlineSnapshot(`"[Network] foobar"`);
    });

    test("throws an actual error object and not a string so that the user gets a stack message", () => {
      try {
        assertOperationSuccess(
          {
            operation: null as any,
            data: null,
            error: new CombinedError({ networkError: new Error("foobar") }),
          },

          ["foo", "bar"]
        );
      } catch (error: any) {
        // eslint-disable-next-line jest/no-try-expect
        expect(error).toBeInstanceOf(Error);
      }
    });

    test("throws the operation error if there's multiple network errors on the operation", () => {
      expect(() =>
        assertOperationSuccess(
          {
            operation: null as any,
            data: null,
            // @ts-expect-error an array of network errors doesn't match urql's types, but we've observed it at runtime
            error: new CombinedError({ networkError: [new Error("foo"), new Error("foo")] }),
          },

          ["foo", "bar"]
        )
      ).toThrowErrorMatchingInlineSnapshot(`
        "[Network] foo
        [Network] foo"
      `);
    });

    test("throws the operation error if there's a error on the operation", () => {
      expect(() =>
        assertOperationSuccess(
          {
            operation: null as any,
            data: null,
            error: new CombinedError({ graphQLErrors: [new Error("foo")] }),
          },

          ["foo", "bar"]
        )
      ).toThrowErrorMatchingInlineSnapshot(`"[GraphQL] foo"`);
    });

    test("throws the operation error if there's multiple errors on the operation", () => {
      expect(() =>
        assertOperationSuccess(
          {
            operation: null as any,
            data: null,
            error: new CombinedError({ graphQLErrors: [new Error("foo"), "bar"] }),
          },

          ["foo", "bar"]
        )
      ).toThrowErrorMatchingInlineSnapshot(`
        "[GraphQL] foo
        [GraphQL] bar"
      `);
    });

    test("throws the operation error if there's a graphql error on the operation", () => {
      expect(() =>
        assertOperationSuccess(
          {
            operation: null as any,
            data: null,
            error: new CombinedError({ graphQLErrors: [new GraphQLError("inner graphql error")] }),
          },

          ["foo", "bar"]
        )
      ).toThrowErrorMatchingInlineSnapshot(`"[GraphQL] inner graphql error"`);
    });

    test("throws the operation error if there's no error on the operation but urql still throws a CombinedError", () => {
      expect(() =>
        assertOperationSuccess(
          {
            operation: null as any,
            data: null,
            error: new CombinedError({ response: { whatever: true } }),
          },

          ["foo", "bar"]
        )
      ).toThrowErrorMatchingInlineSnapshot(`""`);
    });
  });
});
