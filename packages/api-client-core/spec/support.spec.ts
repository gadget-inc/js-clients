import { CombinedError } from "@urql/core";
import { GraphQLError } from "graphql";
import { assertNullableOperationSuccess, assertOperationSuccess, GadgetOperationError, getNonNullableError } from "../src";

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

  describe("assertNullableOperationSuccess", () => {
    test("throws the operation error if there's a graphql error on the operation", () => {
      expect(() =>
        assertNullableOperationSuccess(
          {
            operation: null as any,
            data: null,
            error: new CombinedError({ graphQLErrors: [new GraphQLError("inner graphql error")] }),
          },
          ["foo", "bar"]
        )
      ).toThrowErrorMatchingInlineSnapshot(`"[GraphQL] inner graphql error"`);
    });

    test("returns null if data is missing", () => {
      const result = assertNullableOperationSuccess(
        {
          operation: null as any,
          data: undefined,
          error: undefined,
        },
        ["foo", "bar"]
      );
      expect(result).toBeNull();
    });
  });

  describe("GagetOperationError", () => {
    test("adds the error code to messages that don't have it already", () => {
      const error = new GadgetOperationError("some message", "GGT_SOMETHING");
      expect(error.message).toEqual("GGT_SOMETHING: some message");
    });
    test("doesn't add the error code to messages that have it already", () => {
      const error = new GadgetOperationError("GGT_SOMETHING: some message", "GGT_SOMETHING");
      expect(error.message).toEqual("GGT_SOMETHING: some message");
    });
  });

  describe("getNonNullableError", () => {
    test("returns an error if data is undefined", () => {
      const error = getNonNullableError({ fetching: false, data: undefined }, ["foo"]);
      expect(error?.message).toEqual("Internal Error: Gadget API didn't return expected data. Nothing found in response at foo");
    });
    test("returns an error if data is null", () => {
      const error = getNonNullableError({ fetching: false, data: { foo: null } }, ["foo"]);
      expect(error?.message).toEqual("Internal Error: Gadget API returned no data at foo");
    });
    test("returns void if fetch is in progress", () => {
      const error = getNonNullableError({ fetching: true, data: null }, [""]);
      expect(error).toBeUndefined();
    });
    test("returns void if data is valid", () => {
      const error = getNonNullableError({ fetching: false, data: { foo: { bar: "valid" } } }, ["foo", "bar"]);
      expect(error).toBeUndefined();
    });
  });
});
