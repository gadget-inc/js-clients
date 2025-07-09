import { GraphQLError } from "@0no-co/graphql.web";
import { CombinedError } from "@urql/core";
import {
  assertMutationSuccess,
  assertNullableOperationSuccess,
  assertOperationSuccess,
  disambiguateActionVariables,
  disambiguateBulkActionVariables,
  formatErrorMessages,
  GadgetOperationError,
  getNonNullableError,
  InvalidRecordError,
} from "../src/index.js";
import {
  MockBulkCreateWidgetAction,
  MockBulkFlipDownWidgetsAction,
  MockBulkUpdateWidgetAction,
  MockWidgetCreateAction,
  MockWidgetUpdateAction,
} from "./mockActions.js";

describe("support utilities", () => {
  describe("assertOperationSuccess", () => {
    test("returns the result at the datapath if the operation was successful", () => {
      expect(
        assertOperationSuccess(
          {
            operation: null as any,
            data: { foo: { bar: "baz" } },
            stale: false,
            hasNext: false,
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
            stale: false,
            hasNext: false,
          },

          ["foo", "bar"]
        )
      ).toThrowErrorMatchingInlineSnapshot(`"[Network] foobar"`);
    });

    test("throws the operation error if with the full network error as a string if there is no error message", () => {
      expect(() =>
        assertOperationSuccess(
          {
            operation: null as any,
            data: null,
            error: new CombinedError({ networkError: new Error() }),
            stale: false,
            hasNext: false,
          },

          ["foo", "bar"]
        )
      ).toThrow(`[Network] No message, error:`);
    });

    test("throws an actual error object and not a string so that the user gets a stack message", () => {
      try {
        assertOperationSuccess(
          {
            operation: null as any,
            data: null,
            error: new CombinedError({ networkError: new Error("foobar") }),
            stale: false,
            hasNext: false,
          },

          ["foo", "bar"]
        );
      } catch (error: any) {
        expect(error).toBeInstanceOf(Error);
      }
    });

    test("throws the operation error if there's a error on the operation", () => {
      expect(() =>
        assertOperationSuccess(
          {
            operation: null as any,
            data: null,
            error: new CombinedError({ graphQLErrors: [new Error("foo")] }),
            stale: false,
            hasNext: false,
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
            stale: false,
            hasNext: false,
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
            stale: false,
            hasNext: false,
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
            stale: false,
            hasNext: false,
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
            stale: false,
            hasNext: false,
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
          stale: false,
          hasNext: false,
        },
        ["foo", "bar"]
      );
      expect(result).toBeNull();
    });
  });

  describe("GadgetOperationError", () => {
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
      expect(error?.message).toEqual("Record Not Found Error: Gadget API returned no data at foo");
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

  describe("assertMutationSuccess", () => {
    test("returns the result at the datapath if the operation was successful", () => {
      expect(
        assertMutationSuccess(
          {
            operation: null as any,
            data: { createWidget: { success: true, errors: null, widget: { bar: "baz" } } },
            stale: false,
            hasNext: false,
          },
          ["createWidget"]
        )
      ).toEqual({ success: true, errors: null, widget: { bar: "baz" } });
    });

    test("throws an error if success is false but no errors are returned", () => {
      expect(() =>
        assertMutationSuccess(
          {
            operation: null as any,
            data: {
              createWidget: {
                success: false,
                errors: null,
                widget: null,
              },
            },
            stale: false,
            hasNext: false,
          },

          ["createWidget"]
        )
      ).toThrowErrorMatchingInlineSnapshot(`"GGT_UNKNOWN: Gadget API operation not successful."`);
    });

    test("throws the first error from the mutation errors if present", () => {
      expect(() =>
        assertMutationSuccess(
          {
            operation: null as any,
            data: {
              createWidget: {
                success: false,
                errors: [{ code: "GGT_SOMETHING", message: "some message" }],
                widget: null,
              },
            },
            stale: false,
            hasNext: false,
          },

          ["createWidget"]
        )
      ).toThrowErrorMatchingInlineSnapshot(`"GGT_SOMETHING: some message"`);
    });

    test("throws a rich error representing a validation error if encountered", () => {
      let threw = false;
      try {
        assertMutationSuccess(
          {
            operation: null as any,
            data: {
              createWidget: {
                success: false,
                errors: [
                  {
                    code: "GGT_INVALID_RECORD",
                    message: "widget record is invalid and can't be saved. foo is not present, bar is not present.",
                    model: { apiIdentifier: "widget" },
                    validationErrors: [
                      { apiIdentifier: "foo", message: "is not present" },
                      { apiIdentifier: "bar", message: "is not present" },
                    ],
                    record: {
                      id: 10,
                      foo: null,
                      bar: null,
                    },
                  },
                ],
                widget: null,
              },
            },
            stale: false,
            hasNext: false,
          },
          ["createWidget"]
        );
      } catch (error: any) {
        threw = true;
        expect(error).toBeTruthy();
        expect(error.validationErrors).toHaveLength(2);
        expect(error.validationErrors[0].apiIdentifier).toEqual("foo");
        expect(error.validationErrors[0].message).toEqual("is not present");
        expect(error.modelApiIdentifier).toEqual("widget");
        expect(error.record.id).toEqual(10);
      }
      expect(threw).toBeTruthy();
    });

    test("throws a rich error representing a validation error if encountered where the extra context is missing", () => {
      let threw = false;
      try {
        assertMutationSuccess(
          {
            operation: null as any,
            data: {
              createWidget: {
                success: false,
                errors: [
                  {
                    code: "GGT_INVALID_RECORD",
                    message: "Record has one invalid error",
                    validationErrors: [{ apiIdentifier: "foo", message: "is not present" }],
                    model: null,
                    record: null,
                  },
                ],
                widget: null,
              },
            },
            stale: false,
            hasNext: false,
          },
          ["createWidget"]
        );
      } catch (error: any) {
        threw = true;
        expect(error).toBeTruthy();
        expect(error.validationErrors).toHaveLength(1);
        expect(error.validationErrors[0].apiIdentifier).toEqual("foo");
        expect(error.validationErrors[0].message).toEqual("is not present");
        expect(error.modelApiIdentifier).toBeFalsy();
        expect(error.record).toBeFalsy();
      }
      expect(threw).toBeTruthy();
    });
  });

  describe("disambiguateActionVariables", () => {
    test("it should map variables to the fully qualified form when operating with record identity", async () => {
      expect(MockWidgetUpdateAction.operatesWithRecordIdentity).toBe(true);

      expect(disambiguateActionVariables(MockWidgetUpdateAction, { id: "123", name: "foobar" })).toEqual({
        id: "123",
        widget: { name: "foobar" },
      });
    });

    test("it should leave the fully qualified as is when operating with record identity", async () => {
      expect(MockWidgetUpdateAction.operatesWithRecordIdentity).toBe(true);

      expect(disambiguateActionVariables(MockWidgetUpdateAction, { widget: { id: "123", name: "foobar" } })).toEqual({
        widget: { id: "123", name: "foobar" },
      });
    });

    test("it should not add params only variables when operating on the flat form with record identity", async () => {
      const action = { ...MockWidgetUpdateAction, paramOnlyVariables: ["foo"] };

      expect(disambiguateActionVariables(action, { id: "123", name: "foobar", foo: "bar" })).toEqual({
        id: "123",
        foo: "bar",
        widget: { name: "foobar" },
      });
    });

    test("it should map variables to the fully qualified form when operating without record identity", async () => {
      expect(MockWidgetCreateAction.operatesWithRecordIdentity).toBe(false);

      expect(disambiguateActionVariables(MockWidgetCreateAction, { id: "123", name: "foobar" })).toEqual({
        widget: { id: "123", name: "foobar" },
      });
    });

    test("it should leave the fully qualified as is when operating without record identity", async () => {
      expect(MockWidgetCreateAction.operatesWithRecordIdentity).toBe(false);

      expect(disambiguateActionVariables(MockWidgetCreateAction, { widget: { id: "123", name: "foobar" } })).toEqual({
        widget: { id: "123", name: "foobar" },
      });
    });

    test("it should not add params only variables when operating on the flat form without record identity", async () => {
      const action = { ...MockWidgetCreateAction, paramOnlyVariables: ["foo"] };

      expect(disambiguateActionVariables(action, { id: "123", name: "foobar", foo: "bar" })).toEqual({
        foo: "bar",
        widget: { id: "123", name: "foobar" },
      });
    });

    test("it should not disambiguate if the action does not have model input", async () => {
      const action = { ...MockWidgetCreateAction, acceptsModelInput: false };

      expect(disambiguateActionVariables(action, { id: "123", name: "foobar" })).toEqual({
        id: "123",
        name: "foobar",
      });
    });

    test("it should default to extracting ids if the action doesn't have operatesWithRecordIdentity", async () => {
      const { operatesWithRecordIdentity: _, ...action } = MockWidgetCreateAction;

      expect(disambiguateActionVariables(action as any, { id: "123", name: "foobar" })).toEqual({
        id: "123",
        widget: { name: "foobar" },
      });
    });

    test("it errors if there are ambiguous identifiers", async () => {
      const action = { ...MockWidgetUpdateAction, hasAmbiguousIdentifier: true };

      expect(() => disambiguateActionVariables(action, { id: "123", name: "foobar" })).toThrowErrorMatchingInlineSnapshot(
        `"Invalid arguments found in variables. Did you mean to use ({ widget: { ... } })?"`
      );
    });
  });

  describe("disambiguateBulkActionVariables", () => {
    test("it should leave variables objects with ids alone", () => {
      expect(disambiguateBulkActionVariables(MockBulkFlipDownWidgetsAction, { ids: ["1", "2", "3"] })).toEqual({ ids: ["1", "2", "3"] });
    });

    test("it should leave variables objects with fully qualified inputs alone", () => {
      expect(disambiguateBulkActionVariables(MockBulkUpdateWidgetAction, { inputs: [{ id: "123", widget: { name: "foobar" } }] })).toEqual({
        inputs: [{ id: "123", widget: { name: "foobar" } }],
      });
    });

    test("it should leave the structure of variables objects with inputs alone, but map each input to the fully qualified form when operating with record identity", () => {
      expect(MockBulkUpdateWidgetAction.operatesWithRecordIdentity).toBe(true);

      expect(disambiguateBulkActionVariables(MockBulkUpdateWidgetAction, { inputs: [{ id: "123", name: "foobar" }] })).toEqual({
        inputs: [{ id: "123", widget: { name: "foobar" } }],
      });
    });

    test("it should leave the structure of variables objects with inputs alone, but map each input to the fully qualified form when operating without record identity", () => {
      expect(MockBulkCreateWidgetAction.operatesWithRecordIdentity).toBe(false);

      expect(disambiguateBulkActionVariables(MockBulkCreateWidgetAction, { inputs: [{ id: "123", name: "foobar" }] })).toEqual({
        inputs: [{ widget: { id: "123", name: "foobar" } }],
      });
    });

    test("it should normalize ids arrays for actions which accept ids", () => {
      expect(disambiguateBulkActionVariables(MockBulkFlipDownWidgetsAction, ["1", "2", "3"])).toEqual({ ids: ["1", "2", "3"] });
    });

    test("it should normalize input arrays for actions which accept inputs containing shorthand inputs", () => {
      expect(disambiguateBulkActionVariables(MockBulkUpdateWidgetAction, [{ id: "123", name: "foobar" }])).toEqual({
        inputs: [{ id: "123", widget: { name: "foobar" } }],
      });
    });

    test("it should normalize input arrays for actions which accept inputs containing fully qualified inputs", () => {
      expect(disambiguateBulkActionVariables(MockBulkUpdateWidgetAction, [{ id: "123", widget: { name: "foobar" } }])).toEqual({
        inputs: [{ id: "123", widget: { name: "foobar" } }],
      });
    });
  });

  describe("formatErrorMessages", () => {
    test("it should format a validation error when there is a model api identifier", () => {
      const error = new InvalidRecordError(
        "Record is invalid and can't be saved. foo is not present, bar is not present.",
        [
          { apiIdentifier: "foo", message: "is not present" },
          { apiIdentifier: "bar", message: "is not long enough" },
        ],
        "widget"
      );

      const result = formatErrorMessages(error);

      expect(result).toEqual({
        widget: {
          foo: { message: "is not present" },
          bar: { message: "is not long enough" },
        },
      });
    });

    test("it should format a validation error when there is no model api identifier", () => {
      const error = new InvalidRecordError("Record is invalid and can't be saved. foo is not present, bar is not present.", [
        { apiIdentifier: "foo", message: "is not present" },
        { apiIdentifier: "bar", message: "is not long enough" },
      ]);

      const result = formatErrorMessages(error);

      expect(result).toEqual({
        foo: { message: "is not present" },
        bar: { message: "is not long enough" },
      });
    });

    test("is should format a standard error", () => {
      const error = new Error("Network error: something went wrong");

      const result = formatErrorMessages(error);

      expect(result).toEqual({
        root: { message: "Network error: something went wrong" },
      });
    });

    test("is should format a GadgetError with a code", () => {
      const error = new GadgetOperationError("GGT_SOMETHING: something went wrong", "GGT_SOMETHING");

      const result = formatErrorMessages(error);

      expect(result).toEqual({
        root: { message: "something went wrong" },
      });
    });
  });
});
