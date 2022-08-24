import { CombinedError } from "@urql/core";
import { ErrorWrapper } from "../src/utils";

describe("ErrorWrapper", () => {
  test("errorDataIfAbsent should return an error wrapper if data isn't found at a datapath", () => {
    const error = ErrorWrapper.errorIfDataAbsent(
      {
        data: {
          foo: {},
        },
        fetching: false,
        stale: false,
      },
      ["foo", "bar"]
    );

    expect(error).toBeTruthy();
    expect(error!.message).toMatchInlineSnapshot(
      `"[GraphQL] Internal Error: Gadget API didn't return expected data. Nothing found in response at foo.bar"`
    );
  });

  test("errorDataIfAbsent should return null if data is found at a datapath", () => {
    const error = ErrorWrapper.errorIfDataAbsent(
      {
        data: {
          foo: {
            bar: true,
          },
        },
        fetching: false,
        stale: false,
      },
      ["foo", "bar"]
    );

    expect(error).toBeFalsy();
  });

  test("forMaybeCombinedError should return a wrapper which reports all of urqls errors", () => {
    const error = ErrorWrapper.forMaybeCombinedError(
      new CombinedError({
        graphQLErrors: ["some server side graphql error"],
        response: { statusCode: 500 },
      })
    );

    expect(error!.response).toBeTruthy();
    expect(error!.executionErrors).toHaveLength(1);
    expect(error!.networkError).toBeUndefined();
    expect(error!.message).toMatchInlineSnapshot(`"[GraphQL] some server side graphql error"`);
  });

  test("forErrorsResponse should return a wrapper which reports server errors", () => {
    const error = ErrorWrapper.forErrorsResponse([{ code: "GGT_UNKNOWN", message: "Unknown server error occurred" }], { response: true });

    expect(error.response).toBeTruthy();
    expect(error.executionErrors).toHaveLength(1);
    expect(error.networkError).toBeUndefined();
    expect(error.message).toMatchInlineSnapshot(`"[GraphQL] GGT_UNKNOWN: Unknown server error occurred"`);
  });

  test("forErrorsResponse should return a wrapper which reports validation errors", () => {
    const error = ErrorWrapper.forErrorsResponse(
      [
        {
          code: "GGT_INVALID_RECORD",
          message: "widget record is invalid and can't be saved. name is not unique.",
          validationErrors: [{ apiIdentifier: "name", message: "is not unique" }],
        },
      ],
      { response: true }
    );

    expect(error.response).toBeTruthy();
    expect(error.executionErrors).toHaveLength(1);
    expect(error.networkError).toBeUndefined();
    expect(error.message).toMatchInlineSnapshot(`"[GraphQL] widget record is invalid and can't be saved. name is not unique."`);
    expect(error.validationErrors).toMatchInlineSnapshot(`null`);
  });
});
