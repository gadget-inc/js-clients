import { InvalidRecordError } from "../src/index.js";

describe("InvalidRecordError", () => {
  test("it should compute a message with no validation errors", () => {
    const error = new InvalidRecordError(null, []);
    expect(error.message).toMatchInlineSnapshot(`"GGT_INVALID_RECORD: Record is invalid and can't be saved. ."`);
    expect(error.code).toEqual("GGT_INVALID_RECORD");
    expect(error.causedByClient).toBeTruthy();
  });

  test("it should compute a message with two validation errors", () => {
    const error = new InvalidRecordError(null, [
      {
        apiIdentifier: "name",
        message: "is not unique",
      },
      {
        apiIdentifier: "title",
        message: "is required",
      },
    ]);
    expect(error.message).toMatchInlineSnapshot(
      `"GGT_INVALID_RECORD: Record is invalid and can't be saved. name is not unique, title is required."`
    );
  });

  test("it should compute a message with 4 validation errors", () => {
    const error = new InvalidRecordError(null, [
      {
        apiIdentifier: "name",
        message: "is not unique",
      },
      {
        apiIdentifier: "title",
        message: "is required",
      },
      {
        apiIdentifier: "body",
        message: "is required",
      },
      {
        apiIdentifier: "body",
        message: "must be longer than 15 characters",
      },
    ]);
    expect(error.message).toMatchInlineSnapshot(
      `"GGT_INVALID_RECORD: Record is invalid and can't be saved. name is not unique, title is required, body is required, and 1 more error needs to be corrected."`
    );
  });

  test("it should compute a message with many validation errors", () => {
    const error = new InvalidRecordError(null, [
      {
        apiIdentifier: "name",
        message: "is not unique",
      },
      {
        apiIdentifier: "title",
        message: "is required",
      },
      {
        apiIdentifier: "body",
        message: "is required",
      },
      {
        apiIdentifier: "body",
        message: "must be longer than 15 characters",
      },
      {
        apiIdentifier: "publishDate",
        message: "is required",
      },
    ]);
    expect(error.message).toMatchInlineSnapshot(
      `"GGT_INVALID_RECORD: Record is invalid and can't be saved. name is not unique, title is required, body is required, and 2 more errors need to be corrected."`
    );
  });
});
